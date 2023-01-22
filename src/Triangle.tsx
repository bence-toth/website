import { useMemo } from "react";

import type { TriangleData } from "./triangles";

const distanceBetween = (x1: number, y1: number, x2: number, y2: number) =>
  ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5;

interface TriangleProps {
  mouseX: number | null;
  mouseY: number | null;
  triangle: TriangleData;
}

const Triangle = ({ triangle, mouseX, mouseY }: TriangleProps) => {
  const distance = useMemo(
    () =>
      distanceBetween(
        mouseX ?? 400,
        mouseY ?? 400,
        triangle.midpoint[0],
        triangle.midpoint[1]
      ),
    [mouseX, mouseY, triangle.midpoint]
  );

  const multiplier = Math.max((800 - distance) / 450, 1);

  const strokeColor =
    mouseX !== null && mouseY !== null
      ? `hsl(${triangle.color.hue}deg, ${
          triangle.color.saturation
        }%, ${Math.min(
          Math.round(triangle.color.lightness * multiplier * 0.8),
          100
        )}%)`
      : `hsl(${triangle.color.hue}deg, ${
          triangle.color.saturation
        }%, ${Math.round(triangle.color.lightness * 0.8)}%)`;

  const fillColor =
    mouseX !== null && mouseY !== null
      ? `hsl(${triangle.color.hue}deg, ${
          triangle.color.saturation
        }%, ${Math.min(
          Math.round(triangle.color.lightness * multiplier),
          100
        )}%)`
      : `hsl(${triangle.color.hue}deg, ${triangle.color.saturation}%, ${triangle.color.lightness}%)`;

  return (
    <polygon
      points={`
            ${triangle.points[0]},${triangle.points[1]}
            ${triangle.points[2]},${triangle.points[3]}
            ${triangle.points[4]},${triangle.points[5]}
          `}
      style={{
        fill: fillColor,
        stroke: strokeColor,
        strokeWidth: 1,
      }}
    />
  );
};

export default Triangle;
