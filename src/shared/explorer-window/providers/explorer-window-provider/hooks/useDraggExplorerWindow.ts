import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { useScreenProperties } from "@providers/screen-properties-provider/hooks";
import { useTaskManager } from "@providers/task-manager-provider/hooks";

import { ExplorerWindowProps, Position } from "../types";
import { getWindowDimensions, getNewWindowPosition } from "../helpers";

const OFFSET_DEFAULT: Position = {
  x: 0,
  y: 0,
};

type DraggExplorerWindow = Pick<ExplorerWindowProps, "position" | "taskId">;

export const useDraggExplorerWindow = ({
  position,
  taskId,
}: DraggExplorerWindow) => {
  const { properties } = useScreenProperties();
  const { onMarkAsActiveTask } = useTaskManager();

  const explorerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const [isWindowDragging, setIsWindowDragging] = useState(false);
  const [oldPosition, setOldPosition] = useState<Position>(position);
  const [newPosition, setNewPosition] = useState<Position>(position);
  const [offset, setOffset] = useState<Position>(OFFSET_DEFAULT);

  const onStartDraggingWindow: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      onMarkAsActiveTask(taskId);
      setIsWindowDragging(true);
      setOffset({
        x: event.clientX - newPosition.x,
        y: event.clientY - newPosition.y,
      });
    },
    [newPosition]
  );

  const onMoveWindow = useCallback(
    (event: MouseEvent) => {
      if (isWindowDragging) {
        const headerDimensions = getWindowDimensions(headerRef);

        const cursorPositions: Position = {
          x: event.clientX - offset.x,
          y: event.clientY - offset.y,
        };

        const newWindowPosition = getNewWindowPosition({
          headerDimensions,
          cursorPositions,
          screenDimensions: properties,
        });

        setNewPosition(newWindowPosition);
      }
    },
    [isWindowDragging, offset, properties]
  );

  const onStopDraggingWindow = useCallback(() => {
    setIsWindowDragging(false);
    setOldPosition(newPosition);
  }, [newPosition]);

  useEffect(() => {
    if (isWindowDragging) {
      window.addEventListener("mousemove", onMoveWindow);
      window.addEventListener("mouseup", onStopDraggingWindow);
    } else {
      window.removeEventListener("mousemove", onMoveWindow);
      window.removeEventListener("mouseup", onStopDraggingWindow);
    }
    return () => {
      window.removeEventListener("mousemove", onMoveWindow);
      window.removeEventListener("mouseup", onStopDraggingWindow);
    };
  }, [isWindowDragging, onMoveWindow, onStopDraggingWindow]);

  return {
    position: newPosition,
    oldPosition,
    isWindowDragging,
    explorerRef,
    headerRef,
    onStartDraggingWindow,
    onStopDraggingWindow,
  };
};
