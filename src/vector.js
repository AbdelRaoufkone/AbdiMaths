'use strict';

/**
 * Immutable 2D and 3D vector utilities.
 * All functions return plain objects { x, y } or { x, y, z }.
 */

// ─── 2D Vectors ──────────────────────────────────────────────────────────────

function vec2(x = 0, y = 0) { return { x, y }; }

function vec2Add(a, b) { return { x: a.x + b.x, y: a.y + b.y }; }
function vec2Sub(a, b) { return { x: a.x - b.x, y: a.y - b.y }; }
function vec2Scale(v, s) { return { x: v.x * s, y: v.y * s }; }

function vec2Magnitude(v) { return Math.sqrt(v.x ** 2 + v.y ** 2); }

function vec2Normalize(v) {
  const mag = vec2Magnitude(v);
  if (mag === 0) throw new RangeError('Impossible de normaliser un vecteur nul');
  return { x: v.x / mag, y: v.y / mag };
}

function vec2Dot(a, b) { return a.x * b.x + a.y * b.y; }

/** 2D "cross product" — returns scalar (z-component of 3D cross) */
function vec2Cross(a, b) { return a.x * b.y - a.y * b.x; }

/** Angle between two 2D vectors (radians) */
function vec2Angle(a, b) {
  const dot = vec2Dot(a, b);
  const mags = vec2Magnitude(a) * vec2Magnitude(b);
  if (mags === 0) throw new RangeError('Vecteur nul — angle indéfini');
  return Math.acos(Math.min(1, Math.max(-1, dot / mags)));
}

/** Distance between two 2D points */
function vec2Distance(a, b) { return vec2Magnitude(vec2Sub(a, b)); }

/** Linear interpolation between two 2D vectors */
function vec2Lerp(a, b, t) {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

/** Rotate a 2D vector by angle (radians) */
function vec2Rotate(v, angle) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return { x: v.x * cos - v.y * sin, y: v.x * sin + v.y * cos };
}

// ─── 3D Vectors ──────────────────────────────────────────────────────────────

function vec3(x = 0, y = 0, z = 0) { return { x, y, z }; }

function vec3Add(a, b) { return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z }; }
function vec3Sub(a, b) { return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z }; }
function vec3Scale(v, s) { return { x: v.x * s, y: v.y * s, z: v.z * s }; }

function vec3Magnitude(v) { return Math.sqrt(v.x ** 2 + v.y ** 2 + v.z ** 2); }

function vec3Normalize(v) {
  const mag = vec3Magnitude(v);
  if (mag === 0) throw new RangeError('Impossible de normaliser un vecteur nul');
  return { x: v.x / mag, y: v.y / mag, z: v.z / mag };
}

function vec3Dot(a, b) { return a.x * b.x + a.y * b.y + a.z * b.z; }

function vec3Cross(a, b) {
  return {
    x: a.y * b.z - a.z * b.y,
    y: a.z * b.x - a.x * b.z,
    z: a.x * b.y - a.y * b.x,
  };
}

function vec3Angle(a, b) {
  const dot = vec3Dot(a, b);
  const mags = vec3Magnitude(a) * vec3Magnitude(b);
  if (mags === 0) throw new RangeError('Vecteur nul — angle indéfini');
  return Math.acos(Math.min(1, Math.max(-1, dot / mags)));
}

function vec3Distance(a, b) { return vec3Magnitude(vec3Sub(a, b)); }

function vec3Lerp(a, b, t) {
  return {
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t,
    z: a.z + (b.z - a.z) * t,
  };
}

module.exports = {
  // 2D
  vec2, vec2Add, vec2Sub, vec2Scale,
  vec2Magnitude, vec2Normalize, vec2Dot, vec2Cross,
  vec2Angle, vec2Distance, vec2Lerp, vec2Rotate,
  // 3D
  vec3, vec3Add, vec3Sub, vec3Scale,
  vec3Magnitude, vec3Normalize, vec3Dot, vec3Cross,
  vec3Angle, vec3Distance, vec3Lerp,
};
