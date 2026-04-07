# Changelog

All notable changes to AbdiMaths are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
versioning follows [Semantic Versioning](https://semver.org/).

---

## [2.0.0] — 2026-04-07

### Breaking changes
- `quadraticFormula` now returns complex root objects `{ re, im }` when Δ < 0 instead of a French string
- Library restructured into `src/` sub-modules (flat imports still work via `index.js`)

### Added

#### Arithmetic
- `modulo(a, b)` — always non-negative modulo
- `clamp(value, min, max)` — constrain a value to a range
- `lerp(a, b, t)` — linear interpolation
- `normalize(value, min, max)` — map a value to [0, 1]
- `roundTo(number, decimals)` — round to N decimal places
- `abs(n)`, `sign(n)`

#### Trigonometry
- `toRadians(deg)` / `toDegrees(rad)` — unit conversion
- `sinDeg`, `cosDeg`, `tanDeg` — degree-based variants
- `asin`, `acos`, `atan`, `atan2` — inverse trig (radians)
- `asinDeg`, `acosDeg`, `atanDeg` — inverse trig (degrees)
- `sinh`, `cosh`, `tanh` — hyperbolic functions
- `hypot(...values)` — Pythagorean hypotenuse

#### Geometry
- **Areas**: `circleArea`, `rectangleArea`, `trapezoidArea`, `parallelogramArea`, `rhombusArea`, `regularHexagonArea`, `ellipseArea`, `triangleAreaHeron`
- **Perimeters**: `circlePerimeter`, `rectanglePerimeter`, `squarePerimeter`, `trianglePerimeter`, `regularPolygonPerimeter`
- **Volumes / surfaces**: `sphereVolume`, `sphereSurface`, `cylinderVolume`, `cylinderSurface`, `coneVolume`, `coneSurface`, `pyramidVolume`
- `distance2D`, `distance3D`, `angleFromSides`

#### Statistics (new module)
- `sum`, `mean`, `median`, `mode`, `range`
- `variance`, `sampleVariance`, `standardDeviation`, `sampleStandardDeviation`
- `percentile`, `iqr`, `covariance`, `correlation`, `zScore`, `minMax`

#### Algebra
- `linearEquation(a, b)` — solve ax + b = 0
- `solveLinearSystem2x2` — Cramer's rule for 2×2 systems
- `evaluatePolynomial(coeffs, x)` — Horner's method
- `nthRoot(number, n)` — real nth root
- `log`, `log2`, `log10`, `logBase(n, base)`

#### Number Theory (new module)
- `gcd`, `lcm`
- `factorial`, `binomial`
- `isPrime`, `primeFactors`, `sieve`, `nthPrime`
- `fibonacci`, `fibonacciSequence`
- `isPerfect`, `totient`

#### Vectors (new module)
- **2D**: `vec2`, `vec2Add`, `vec2Sub`, `vec2Scale`, `vec2Magnitude`, `vec2Normalize`, `vec2Dot`, `vec2Cross`, `vec2Angle`, `vec2Distance`, `vec2Lerp`, `vec2Rotate`
- **3D**: `vec3`, `vec3Add`, `vec3Sub`, `vec3Scale`, `vec3Magnitude`, `vec3Normalize`, `vec3Dot`, `vec3Cross`, `vec3Angle`, `vec3Distance`, `vec3Lerp`

#### Matrix (new module)
- `matCreate`, `matIdentity`, `matClone`
- `matTranspose`, `matAdd`, `matSub`, `matScale`, `matMul`
- `matDet`, `matTrace`, `matNorm`

#### TypeScript
- `index.d.ts` — complete type definitions for all 100+ exports, no `@types/` package needed

#### Testing
- `test/index.test.js` — 60-assertion smoke suite, zero dependencies

### Changed
- `package.json`: added `types`, `engines` (Node ≥ 14), `files` whitelist, `prepublishOnly` hook
- `README.md`: full rewrite with examples for every module

---

## [1.1.1] — previous

- Minor index update

## [1.1.0] — previous

- Initial geometry and equation functions

## [1.0.0] — previous

- Initial release
