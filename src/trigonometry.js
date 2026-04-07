'use strict';

const PI = Math.PI;

/** Convert degrees to radians */
function toRadians(deg) {
  return (deg * PI) / 180;
}

/** Convert radians to degrees */
function toDegrees(rad) {
  return (rad * 180) / PI;
}

// ── Radian-based ────────────────────────────────────────────────────────────

function sin(angleInRadians) { return Math.sin(angleInRadians); }
function cos(angleInRadians) { return Math.cos(angleInRadians); }
function tan(angleInRadians) { return Math.tan(angleInRadians); }
function asin(value) { return Math.asin(value); }
function acos(value) { return Math.acos(value); }
function atan(value) { return Math.atan(value); }
function atan2(y, x) { return Math.atan2(y, x); }
function sinh(value) { return Math.sinh(value); }
function cosh(value) { return Math.cosh(value); }
function tanh(value) { return Math.tanh(value); }

// ── Degree-based ─────────────────────────────────────────────────────────────

function sinDeg(deg) { return Math.sin(toRadians(deg)); }
function cosDeg(deg) { return Math.cos(toRadians(deg)); }
function tanDeg(deg) { return Math.tan(toRadians(deg)); }
function asinDeg(value) { return toDegrees(Math.asin(value)); }
function acosDeg(value) { return toDegrees(Math.acos(value)); }
function atanDeg(value) { return toDegrees(Math.atan(value)); }

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Hypotenuse: √(a²+b²) */
function hypot(...values) { return Math.hypot(...values); }

module.exports = {
  PI,
  toRadians,
  toDegrees,
  sin, cos, tan,
  asin, acos, atan, atan2,
  sinh, cosh, tanh,
  sinDeg, cosDeg, tanDeg,
  asinDeg, acosDeg, atanDeg,
  hypot,
};
