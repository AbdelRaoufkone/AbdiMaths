// AbdiMaths v2.0.0 — TypeScript definitions

// ─── Arithmetic ───────────────────────────────────────────────────────────────
export function add(...numbers: number[]): number;
export function subtract(...numbers: number[]): number;
export function multiply(...numbers: number[]): number;
export function divide(a: number, b: number): number;
export function modulo(a: number, b: number): number;
export function abs(n: number): number;
export function sign(n: number): number;
export function getNumberOfDigits(number: number): number;
export function roundTo(number: number, decimals?: number): number;
export function clamp(value: number, min: number, max: number): number;
export function lerp(a: number, b: number, t: number): number;
export function normalize(value: number, min: number, max: number): number;

// ─── Trigonometry ─────────────────────────────────────────────────────────────
export const PI: number;
export function toRadians(deg: number): number;
export function toDegrees(rad: number): number;
export function sin(angleInRadians: number): number;
export function cos(angleInRadians: number): number;
export function tan(angleInRadians: number): number;
export function asin(value: number): number;
export function acos(value: number): number;
export function atan(value: number): number;
export function atan2(y: number, x: number): number;
export function sinh(value: number): number;
export function cosh(value: number): number;
export function tanh(value: number): number;
export function sinDeg(deg: number): number;
export function cosDeg(deg: number): number;
export function tanDeg(deg: number): number;
export function asinDeg(value: number): number;
export function acosDeg(value: number): number;
export function atanDeg(value: number): number;
export function hypot(...values: number[]): number;

// ─── Geometry ─────────────────────────────────────────────────────────────────
export function circleArea(radius: number): number;
export function rectangleArea(width: number, height: number): number;
export function squareArea(side: number): number;
export function triangleArea(base: number, height: number): number;
export function trapezoidArea(a: number, b: number, height: number): number;
export function parallelogramArea(base: number, height: number): number;
export function rhombusArea(d1: number, d2: number): number;
export function regularHexagonArea(side: number): number;
export function ellipseArea(a: number, b: number): number;
export function triangleAreaHeron(a: number, b: number, c: number): number;
export function circlePerimeter(radius: number): number;
export function rectanglePerimeter(width: number, height: number): number;
export function squarePerimeter(side: number): number;
export function trianglePerimeter(a: number, b: number, c: number): number;
export function parallelogramPerimeter(a: number, b: number): number;
export function trapezoidPerimeter(a: number, b: number, c: number, d: number): number;
export function regularPolygonPerimeter(sides: number, sideLength: number): number;
export function sphereVolume(radius: number): number;
export function sphereSurface(radius: number): number;
export function cubicVolume(side: number): number;
export function cuboidVolume(length: number, width: number, height: number): number;
export function cylinderVolume(radius: number, height: number): number;
export function cylinderSurface(radius: number, height: number): number;
export function coneVolume(radius: number, height: number): number;
export function coneSurface(radius: number, height: number): number;
export function pyramidVolume(baseArea: number, height: number): number;
export function distance2D(x1: number, y1: number, x2: number, y2: number): number;
export function distance3D(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
export function angleFromSides(opposite: number, hypotenuse: number): number;

// ─── Statistics ───────────────────────────────────────────────────────────────
export function sum(arr: number[]): number;
export function mean(arr: number[]): number;
export function median(arr: number[]): number;
export function mode(arr: number[]): number[];
export function range(arr: number[]): number;
export function variance(arr: number[]): number;
export function sampleVariance(arr: number[]): number;
export function standardDeviation(arr: number[]): number;
export function sampleStandardDeviation(arr: number[]): number;
export function percentile(arr: number[], p: number): number;
export function iqr(arr: number[]): number;
export function covariance(arrX: number[], arrY: number[]): number;
export function correlation(arrX: number[], arrY: number[]): number;
export function zScore(value: number, arr: number[]): number;
export function minMax(arr: number[]): { min: number; max: number };

// ─── Algebra ──────────────────────────────────────────────────────────────────
export interface ComplexRoot { re: number; im: number; }
export function linearEquation(a: number, b: number): number | null;
export function quadraticFormula(a: number, b: number, c: number): number[] | ComplexRoot[];
export function cubicFormula(a: number, b: number, c: number, d: number): number[];
export function solveLinearSystem2x2(
  a1: number, b1: number, c1: number,
  a2: number, b2: number, c2: number
): { x: number; y: number } | null;
export function evaluatePolynomial(coeffs: number[], x: number): number;
export function power(base: number, exponent: number): number;
export function squareRoot(number: number): number;
export function nthRoot(number: number, n: number): number;
export function log(n: number): number;
export function log2(n: number): number;
export function log10(n: number): number;
export function logBase(n: number, base: number): number;

// ─── Number Theory ────────────────────────────────────────────────────────────
export function gcd(a: number, b: number): number;
export function lcm(a: number, b: number): number;
export function factorial(n: number): number;
export function binomial(n: number, k: number): number;
export function isPrime(n: number): boolean;
export function primeFactors(n: number): number[];
export function sieve(limit: number): number[];
export function nthPrime(n: number): number;
export function fibonacci(n: number): number;
export function fibonacciSequence(n: number): number[];
export function isPerfect(n: number): boolean;
export function totient(n: number): number;

// ─── Vectors ──────────────────────────────────────────────────────────────────
export interface Vec2 { x: number; y: number; }
export interface Vec3 { x: number; y: number; z: number; }

export function vec2(x?: number, y?: number): Vec2;
export function vec2Add(a: Vec2, b: Vec2): Vec2;
export function vec2Sub(a: Vec2, b: Vec2): Vec2;
export function vec2Scale(v: Vec2, s: number): Vec2;
export function vec2Magnitude(v: Vec2): number;
export function vec2Normalize(v: Vec2): Vec2;
export function vec2Dot(a: Vec2, b: Vec2): number;
export function vec2Cross(a: Vec2, b: Vec2): number;
export function vec2Angle(a: Vec2, b: Vec2): number;
export function vec2Distance(a: Vec2, b: Vec2): number;
export function vec2Lerp(a: Vec2, b: Vec2, t: number): Vec2;
export function vec2Rotate(v: Vec2, angle: number): Vec2;

export function vec3(x?: number, y?: number, z?: number): Vec3;
export function vec3Add(a: Vec3, b: Vec3): Vec3;
export function vec3Sub(a: Vec3, b: Vec3): Vec3;
export function vec3Scale(v: Vec3, s: number): Vec3;
export function vec3Magnitude(v: Vec3): number;
export function vec3Normalize(v: Vec3): Vec3;
export function vec3Dot(a: Vec3, b: Vec3): number;
export function vec3Cross(a: Vec3, b: Vec3): Vec3;
export function vec3Angle(a: Vec3, b: Vec3): number;
export function vec3Distance(a: Vec3, b: Vec3): number;
export function vec3Lerp(a: Vec3, b: Vec3, t: number): Vec3;

// ─── Matrix ───────────────────────────────────────────────────────────────────
export type Matrix = number[][];

export function matCreate(rows: number, cols: number, fill?: number): Matrix;
export function matIdentity(n: number): Matrix;
export function matClone(m: Matrix): Matrix;
export function matTranspose(m: Matrix): Matrix;
export function matAdd(a: Matrix, b: Matrix): Matrix;
export function matSub(a: Matrix, b: Matrix): Matrix;
export function matScale(m: Matrix, scalar: number): Matrix;
export function matMul(a: Matrix, b: Matrix): Matrix;
export function matDet(m: Matrix): number;
export function matTrace(m: Matrix): number;
export function matNorm(m: Matrix): number;

// ─── Sub-modules ──────────────────────────────────────────────────────────────
export declare const arithmetic:   typeof import('./src/arithmetic');
export declare const trigonometry: typeof import('./src/trigonometry');
export declare const geometry:     typeof import('./src/geometry');
export declare const statistics:   typeof import('./src/statistics');
export declare const algebra:      typeof import('./src/algebra');
export declare const numberTheory: typeof import('./src/numberTheory');
export declare const vector:       typeof import('./src/vector');
export declare const matrix:       typeof import('./src/matrix');
