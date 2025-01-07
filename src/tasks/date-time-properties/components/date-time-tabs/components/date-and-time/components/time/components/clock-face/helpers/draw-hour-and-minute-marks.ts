import { HOUR_DOT, MINUTE_DOT, RADIUS } from "../constants";

export const drawHourAndMinuteMarks = (ctx: CanvasRenderingContext2D) => {
  for (let i = 0; i < 60; i++) {
    const angle = (i * Math.PI) / 30;
    const x = RADIUS * 0.9 * Math.cos(angle - Math.PI / 2);
    const y = RADIUS * 0.9 * Math.sin(angle - Math.PI / 2);

    const isHourMark = i % 5 === 0;

    const { COLOR, SIZE } = isHourMark ? HOUR_DOT : MINUTE_DOT;

    ctx.beginPath();
    ctx.arc(x, y, SIZE, 0, 2 * Math.PI);
    ctx.fillStyle = COLOR;
    ctx.fill();
  }
};
