export const drawHand = (
  ctx: CanvasRenderingContext2D,
  angle: number,
  length: number,
  width: number,
  color: string
) => {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.moveTo(0, 0);
  ctx.lineTo(
    length * Math.cos(angle - Math.PI / 2),
    length * Math.sin(angle - Math.PI / 2)
  );
  ctx.stroke();
};
