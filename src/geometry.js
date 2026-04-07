'use strict';

const PI = Math.PI;

// ─── 2D Areas ────────────────────────────────────────────────────────────────

function circleArea(radius) { return PI * radius ** 2; }
function rectangleArea(width, height) { return width * height; }
function squareArea(side) { return side ** 2; }
function triangleArea(base, height) { return 0.5 * base * height; }
function trapezoidArea(a, b, height) { return 0.5 * (a + b) * height; }
function parallelogramArea(base, height) { return base * height; }
function rhombusArea(d1, d2) { return 0.5 * d1 * d2; }
function regularHexagonArea(side) { return (3 * Math.sqrt(3) / 2) * side ** 2; }
function ellipseArea(a, b) { return PI * a * b; }

/** Heron's formula — area from three sides */
function triangleAreaHeron(a, b, c) {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  if (isNaN(area)) throw new RangeError('Ces côtés ne forment pas un triangle valide');
  return area;
}

// ─── 2D Perimeters ───────────────────────────────────────────────────────────

function circlePerimeter(radius) { return 2 * PI * radius; }
function rectanglePerimeter(width, height) { return 2 * (width + height); }
function squarePerimeter(side) { return 4 * side; }
function trianglePerimeter(a, b, c) { return a + b + c; }
function parallelogramPerimeter(a, b) { return 2 * (a + b); }
function trapezoidPerimeter(a, b, c, d) { return a + b + c + d; }
function regularPolygonPerimeter(sides, sideLength) { return sides * sideLength; }

// ─── 3D Volumes ──────────────────────────────────────────────────────────────

function sphereVolume(radius) { return (4 / 3) * PI * radius ** 3; }
function sphereSurface(radius) { return 4 * PI * radius ** 2; }
function cubicVolume(side) { return side ** 3; }
function cuboidVolume(length, width, height) { return length * width * height; }
function cylinderVolume(radius, height) { return PI * radius ** 2 * height; }
function cylinderSurface(radius, height) { return 2 * PI * radius * (radius + height); }
function coneVolume(radius, height) { return (1 / 3) * PI * radius ** 2 * height; }
function coneSurface(radius, height) {
  const slant = Math.sqrt(radius ** 2 + height ** 2);
  return PI * radius * (radius + slant);
}
function pyramidVolume(baseArea, height) { return (1 / 3) * baseArea * height; }

// ─── Distances & Angles ──────────────────────────────────────────────────────

function distance2D(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function distance3D(x1, y1, z1, x2, y2, z2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
}

/** Angle (rad) of a right triangle given opposite and hypotenuse sides */
function angleFromSides(opposite, hypotenuse) {
  return Math.asin(opposite / hypotenuse);
}

module.exports = {
  // 2D Areas
  circleArea, rectangleArea, squareArea, triangleArea,
  trapezoidArea, parallelogramArea, rhombusArea,
  regularHexagonArea, ellipseArea, triangleAreaHeron,
  // 2D Perimeters
  circlePerimeter, rectanglePerimeter, squarePerimeter,
  trianglePerimeter, parallelogramPerimeter, trapezoidPerimeter,
  regularPolygonPerimeter,
  // 3D
  sphereVolume, sphereSurface,
  cubicVolume, cuboidVolume,
  cylinderVolume, cylinderSurface,
  coneVolume, coneSurface,
  pyramidVolume,
  // Distances
  distance2D, distance3D, angleFromSides,
};
