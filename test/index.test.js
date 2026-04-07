'use strict';
/**
 * Lightweight smoke tests — no external test runner needed.
 * Run: node test/index.test.js
 */

const M = require('../index');

let passed = 0;
let failed = 0;

function assert(label, actual, expected, epsilon = 1e-9) {
  const ok = typeof expected === 'boolean'
    ? actual === expected
    : Math.abs(actual - expected) < epsilon;
  if (ok) {
    console.log(`  ✓ ${label}`);
    passed++;
  } else {
    console.error(`  ✗ ${label} — expected ${expected}, got ${actual}`);
    failed++;
  }
}

function assertDeep(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (ok) { console.log(`  ✓ ${label}`); passed++; }
  else { console.error(`  ✗ ${label} — expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`); failed++; }
}

// ─── Arithmetic ───────────────────────────────────────────────────────────────
console.log('\nArithmetic');
assert('add(1,2,3)', M.add(1, 2, 3), 6);
assert('subtract(10,3,2)', M.subtract(10, 3, 2), 5);
assert('multiply(2,3,4)', M.multiply(2, 3, 4), 24);
assert('divide(10,4)', M.divide(10, 4), 2.5);
assert('modulo(7,3)', M.modulo(7, 3), 1);
assert('modulo(-1,3)', M.modulo(-1, 3), 2);
assert('clamp(15,0,10)', M.clamp(15, 0, 10), 10);
assert('lerp(0,10,0.5)', M.lerp(0, 10, 0.5), 5);
assert('normalize(5,0,10)', M.normalize(5, 0, 10), 0.5);
assert('roundTo(3.14159,2)', M.roundTo(3.14159, 2), 3.14);

// ─── Trigonometry ─────────────────────────────────────────────────────────────
console.log('\nTrigonometry');
assert('toRadians(180)', M.toRadians(180), Math.PI);
assert('toDegrees(PI)', M.toDegrees(Math.PI), 180);
assert('sinDeg(90)', M.sinDeg(90), 1, 1e-9);
assert('cosDeg(0)', M.cosDeg(0), 1);
assert('hypot(3,4)', M.hypot(3, 4), 5);

// ─── Geometry ─────────────────────────────────────────────────────────────────
console.log('\nGeometry');
assert('circleArea(5)', M.circleArea(5), Math.PI * 25);
assert('circlePerimeter(5)', M.circlePerimeter(5), 2 * Math.PI * 5);
assert('triangleAreaHeron(3,4,5)', M.triangleAreaHeron(3, 4, 5), 6);
assert('distance2D(0,0,3,4)', M.distance2D(0, 0, 3, 4), 5);
assert('sphereVolume(3)', M.sphereVolume(3), (4 / 3) * Math.PI * 27);
assert('cylinderVolume(2,5)', M.cylinderVolume(2, 5), Math.PI * 4 * 5);
assert('coneVolume(3,4)', M.coneVolume(3, 4), (1 / 3) * Math.PI * 9 * 4);

// ─── Statistics ───────────────────────────────────────────────────────────────
console.log('\nStatistics');
const data = [2, 4, 4, 4, 5, 5, 7, 9];
assert('mean', M.mean(data), 5);
assert('median', M.median(data), 4.5);
assertDeep('mode', M.mode(data), [4]);
assert('variance', M.variance(data), 4);
assert('standardDeviation', M.standardDeviation(data), 2);
assert('percentile(data,25)', M.percentile(data, 25), 4);
assert('correlation perfect', M.correlation([1,2,3],[2,4,6]), 1);

// ─── Algebra ──────────────────────────────────────────────────────────────────
console.log('\nAlgebra');
const roots = M.quadraticFormula(1, -5, 6);
assert('quadratic root1', roots[0], 3);
assert('quadratic root2', roots[1], 2);
assertDeep('solveLinearSystem', M.solveLinearSystem2x2(2,1,8, 1,-1,1), { x: 3, y: 2 });
assert('evaluatePolynomial x²+x+1 at 2', M.evaluatePolynomial([1, 1, 1], 2), 7);
assert('nthRoot(-8,3)', M.nthRoot(-8, 3), -2, 1e-9);

// ─── Number Theory ────────────────────────────────────────────────────────────
console.log('\nNumber Theory');
assert('gcd(48,18)', M.gcd(48, 18), 6);
assert('lcm(4,6)', M.lcm(4, 6), 12);
assert('factorial(6)', M.factorial(6), 720);
assert('binomial(5,2)', M.binomial(5, 2), 10);
assert('isPrime(97)', M.isPrime(97), true);
assert('isPrime(4)', M.isPrime(4), false);
assertDeep('primeFactors(12)', M.primeFactors(12), [2, 2, 3]);
assert('fibonacci(10)', M.fibonacci(10), 55);
assertDeep('fibonacciSequence(6)', M.fibonacciSequence(6), [0, 1, 1, 2, 3, 5]);
assertDeep('sieve(10)', M.sieve(10), [2, 3, 5, 7]);
assert('nthPrime(5)', M.nthPrime(5), 11);
assert('isPerfect(6)', M.isPerfect(6), true);
assert('totient(9)', M.totient(9), 6);

// ─── Vectors ──────────────────────────────────────────────────────────────────
console.log('\nVectors');
const v1 = M.vec2(3, 4);
assert('vec2Magnitude', M.vec2Magnitude(v1), 5);
const vn = M.vec2Normalize(v1);
assert('vec2Normalize x', vn.x, 0.6);
assert('vec2Normalize y', vn.y, 0.8);
assert('vec2Dot', M.vec2Dot(M.vec2(1, 0), M.vec2(0, 1)), 0);
const rv = M.vec2Rotate(M.vec2(1, 0), Math.PI / 2);
assert('vec2Rotate x≈0', rv.x, 0, 1e-9);
assert('vec2Rotate y≈1', rv.y, 1, 1e-9);

const a3 = M.vec3(1, 0, 0);
const b3 = M.vec3(0, 1, 0);
assertDeep('vec3Cross', M.vec3Cross(a3, b3), { x: 0, y: 0, z: 1 });

// ─── Matrix ───────────────────────────────────────────────────────────────────
console.log('\nMatrix');
const I2 = M.matIdentity(2);
assertDeep('matIdentity(2)', I2, [[1, 0], [0, 1]]);
const A = [[1, 2], [3, 4]];
const B = [[5, 6], [7, 8]];
assertDeep('matAdd', M.matAdd(A, B), [[6, 8], [10, 12]]);
assertDeep('matMul', M.matMul(A, B), [[19, 22], [43, 50]]);
assert('matDet', M.matDet(A), -2);
assert('matTrace', M.matTrace(A), 5);
assertDeep('matTranspose', M.matTranspose(A), [[1, 3], [2, 4]]);

// ─── Summary ──────────────────────────────────────────────────────────────────
console.log(`\n${'─'.repeat(40)}`);
console.log(`Tests: ${passed + failed} | ✓ ${passed} passed | ✗ ${failed} failed`);
if (failed > 0) process.exit(1);
