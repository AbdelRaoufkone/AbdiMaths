# AbdiMaths

A modern, modular JavaScript mathematics library with zero dependencies.

**v2.0.0** — 8 modules, 100+ functions, full TypeScript support.

## Installation

```bash
npm install abdimaths
```

## Modules

| Module | Highlights |
|---|---|
| `arithmetic` | add, subtract, clamp, lerp, normalize, roundTo… |
| `trigonometry` | sin/cos/tan in radians AND degrees, asin/acos/atan, sinh/cosh/tanh |
| `geometry` | 10+ areas, 7 perimeters, 9 volumes/surfaces, 2D/3D distances |
| `statistics` | mean, median, mode, variance, std dev, percentile, correlation, z-score |
| `algebra` | linear/quadratic/cubic equations, 2×2 systems, polynomial evaluation |
| `numberTheory` | GCD, LCM, factorial, fibonacci, primes, sieve, totient |
| `vector` | Immutable 2D & 3D vectors (add, scale, dot, cross, rotate, lerp…) |
| `matrix` | m×n matrix math (mul, det, transpose, trace, norm…) |

---

## Usage

```js
const M = require('abdimaths');

// Or import only what you need
const { statistics } = require('abdimaths');
```

### Arithmetic

```js
M.add(1, 2, 3)          // 6
M.multiply(2, 3, 4)     // 24
M.divide(10, 3)         // 3.333...
M.modulo(-1, 3)         // 2  (always non-negative)
M.clamp(15, 0, 10)      // 10
M.lerp(0, 100, 0.25)    // 25
M.normalize(5, 0, 10)   // 0.5
M.roundTo(3.14159, 2)   // 3.14
```

### Trigonometry

```js
M.toRadians(180)   // Math.PI
M.toDegrees(Math.PI) // 180

// Degree-based variants (suffix Deg)
M.sinDeg(90)   // 1
M.cosDeg(60)   // 0.5
M.tanDeg(45)   // 1

// Standard radian-based
M.sin(Math.PI / 2) // 1
M.hypot(3, 4)      // 5
```

### Geometry

```js
// 2D
M.circleArea(5)            // 78.53...
M.circlePerimeter(5)       // 31.41...
M.triangleAreaHeron(3,4,5) // 6  (Heron's formula)
M.ellipseArea(4, 3)        // 37.69...
M.distance2D(0,0, 3,4)     // 5

// 3D
M.sphereVolume(3)          // 113.09...
M.cylinderVolume(2, 5)     // 62.83...
M.coneVolume(3, 4)         // 37.69...
M.pyramidVolume(16, 9)     // 48
```

### Statistics

```js
const data = [2, 4, 4, 4, 5, 5, 7, 9];

M.mean(data)              // 5
M.median(data)            // 4.5
M.mode(data)              // [4]
M.variance(data)          // 4
M.standardDeviation(data) // 2
M.percentile(data, 75)    // 5.75
M.iqr(data)               // 1.75

M.correlation([1,2,3], [2,4,6]) // 1  (perfect positive)
M.zScore(9, data)               // 2
M.minMax(data)                  // { min: 2, max: 9 }
```

### Algebra

```js
// Quadratic: x² - 5x + 6 = 0
M.quadraticFormula(1, -5, 6)  // [3, 2]

// Complex roots: x² + 1 = 0
M.quadraticFormula(1, 0, 1)   // [{ re: 0, im: 1 }, { re: 0, im: -1 }]

// 2×2 linear system: 2x+y=8, x-y=1
M.solveLinearSystem2x2(2,1,8, 1,-1,1) // { x: 3, y: 2 }

// Polynomial evaluation (Horner): p(x) = 1 + x + x²  at x=2
M.evaluatePolynomial([1, 1, 1], 2) // 7

M.nthRoot(-8, 3)  // -2
M.logBase(8, 2)   // 3
```

### Number Theory

```js
M.gcd(48, 18)          // 6
M.lcm(4, 6)            // 12
M.factorial(6)         // 720
M.binomial(5, 2)       // 10

M.isPrime(97)          // true
M.primeFactors(12)     // [2, 2, 3]
M.sieve(20)            // [2, 3, 5, 7, 11, 13, 17, 19]
M.nthPrime(10)         // 29

M.fibonacci(10)        // 55
M.fibonacciSequence(6) // [0, 1, 1, 2, 3, 5]

M.isPerfect(28)        // true
M.totient(9)           // 6
```

### Vectors

```js
const a = M.vec2(3, 4);
const b = M.vec2(1, 0);

M.vec2Magnitude(a)      // 5
M.vec2Normalize(a)      // { x: 0.6, y: 0.8 }
M.vec2Dot(a, b)         // 3
M.vec2Cross(a, b)       // -4  (scalar)
M.vec2Rotate(b, Math.PI / 2) // { x: 0, y: 1 }
M.vec2Lerp(M.vec2(0,0), M.vec2(10,10), 0.5) // { x: 5, y: 5 }

// 3D
const u = M.vec3(1, 0, 0);
const v = M.vec3(0, 1, 0);
M.vec3Cross(u, v)  // { x: 0, y: 0, z: 1 }
M.vec3Dot(u, v)    // 0
```

### Matrix

```js
const A = [[1, 2], [3, 4]];
const B = [[5, 6], [7, 8]];

M.matMul(A, B)       // [[19, 22], [43, 50]]
M.matDet(A)          // -2
M.matTranspose(A)    // [[1, 3], [2, 4]]
M.matTrace(A)        // 5
M.matIdentity(3)     // 3×3 identity matrix
M.matNorm(A)         // Frobenius norm ≈ 5.477
```

---

## Sub-module imports

```js
// Use a sub-module directly
const { mean, standardDeviation } = require('abdimaths').statistics;
const { isPrime, sieve } = require('abdimaths').numberTheory;
const { vec2, vec2Add } = require('abdimaths').vector;
```

## TypeScript

Full type definitions are included — no `@types/` package needed.

```ts
import { quadraticFormula, ComplexRoot } from 'abdimaths';
```

## Running tests

```bash
node test/index.test.js
```

## Author

AbdiRak (AbdelRaouf KONE) — abdel.koner@gmail.com

## License

ISC
