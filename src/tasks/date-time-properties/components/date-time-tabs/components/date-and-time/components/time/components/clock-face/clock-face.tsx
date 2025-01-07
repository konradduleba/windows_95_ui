import React, { useEffect } from "react";
import { useWatch } from "react-hook-form";

import { DATE_TIME_FORM_NAME_KEYS } from "@tasks/date-time-properties/form/types";

import { useDrawClockFace } from "./hooks";

import styles from "./clock-face.module.scss";

export const ClockFace: React.FC = () => {
  const hours = useWatch({ name: DATE_TIME_FORM_NAME_KEYS.HOURS });
  const minutes = useWatch({ name: DATE_TIME_FORM_NAME_KEYS.MINUTES });
  const seconds = useWatch({ name: DATE_TIME_FORM_NAME_KEYS.SECONDS });

  const { clockHeight, clockWidth, canvasRef, startDrawing } = useDrawClockFace(
    {
      hours,
      minutes,
      seconds,
    }
  );

  useEffect(() => {
    startDrawing();
  }, [hours, minutes, seconds, startDrawing]);

  return (
    <canvas
      ref={canvasRef}
      width={clockWidth}
      height={clockHeight}
      className={styles.canvas}
    />
  );
};
