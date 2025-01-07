import { useRef } from "react";

import { HOUR_HAND, MINUTE_HAND, RADIUS, SECOND_HAND } from "../constants";

import { drawHand, drawHourAndMinuteMarks } from "../helpers";

type UseDrawClockFace = {
  hours: number;
  minutes: number;
  seconds: number;
};

export const useDrawClockFace = ({
  hours,
  minutes,
  seconds,
}: UseDrawClockFace) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawHands = (ctx: CanvasRenderingContext2D) => {
    const hourAngle = ((hours + minutes / 60) * Math.PI) / 6;
    drawHand(ctx, hourAngle, RADIUS * 0.5, HOUR_HAND.SIZE, HOUR_HAND.COLOR);

    const minuteAngle = ((minutes + seconds / 60) * Math.PI) / 30;
    drawHand(
      ctx,
      minuteAngle,
      RADIUS * 0.75,
      MINUTE_HAND.SIZE,
      MINUTE_HAND.COLOR
    );

    const secondAngle = (seconds * Math.PI) / 30;
    drawHand(
      ctx,
      secondAngle,
      RADIUS * 0.85,
      SECOND_HAND.SIZE,
      SECOND_HAND.COLOR
    );
  };

  const startDrawing = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);

    drawHourAndMinuteMarks(ctx);
    drawHands(ctx);

    ctx.restore();
  };

  return {
    startDrawing,
    canvasRef,
    clockWidth: RADIUS * 2,
    clockHeight: RADIUS * 2,
  };
};
