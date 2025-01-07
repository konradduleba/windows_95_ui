import { MouseEventHandler, ReactNode, RefObject } from "react";

type OnCloseExplorer = {
  onCloseExplorer: () => void;
};

type CloseButton = {
  taskId: string;
};

export type Action = {
  id: string;
  content: ReactNode;
};

export enum ActionTypes {
  CLOSE = "close",
  SUBMIT = "submit",
  OK = "ok",
  CUSTOM = "custom",
}

type Actions = {
  actions: Action[];
};

type Heading = {
  title: ReactNode;
  icon?: ReactNode;
};

type FooterCommonTypes = {
  id: string;
  value: ReactNode;
  formId?: string;
  disabled?: boolean;
};

type CloseAction = FooterCommonTypes & {
  action: ActionTypes.CLOSE;
};

type SubmitAction = FooterCommonTypes & {
  action: ActionTypes.SUBMIT;
};

type OkAction = FooterCommonTypes & {
  action: ActionTypes.OK;
};

type CustomAction = FooterCommonTypes & {
  action?: ActionTypes.CUSTOM;
  testId: string;
  onClick: () => void;
};

export type FooterButton = CloseAction | OkAction | SubmitAction | CustomAction;

export type FooterAlign = "left" | "center" | "right";

type Footer = {
  buttons: FooterButton[];
  footerAlign?: FooterAlign;
  footerOnRightSide?: boolean;
};

type AvailableClassNames = {
  wrapperClassName?: string;
};

export type Position = {
  x: number;
  y: number;
};

type DraggWindow = {
  isDraggable?: boolean;
  explorerRef: RefObject<HTMLDivElement>;
  headerRef: RefObject<HTMLDivElement>;
  onStartDraggingWindow: MouseEventHandler<HTMLDivElement>;
  position: Position;
  oldPosition: Position;
  isWindowDragging: boolean;
};

type ExplorerCommonWindowProps = {
  width: number;
  testId: string;
  disableClose?: boolean;
};

export type ExplorerWindowProviderProps = ExplorerCommonWindowProps &
  Actions &
  OnCloseExplorer &
  CloseButton &
  Heading &
  Footer &
  DraggWindow &
  AvailableClassNames;

export type ExplorerWindowProps = Omit<
  ExplorerWindowProviderProps,
  | "onCloseExplorer"
  | "explorerRef"
  | "onStartDraggingWindow"
  | "onStopDraggingWindow"
  | "oldPosition"
  | "isWindowDragging"
  | "headerRef"
>;
