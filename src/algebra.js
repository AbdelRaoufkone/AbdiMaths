'use strict';

/**
 * Equation solving — quadratic, cubic, and linear systems.
 */

/** Solve ax + b = 0 → returns x or null if no solution */
function linearEquation(a, b) {
  if (a === 0) return b === 0 ? Infinity : null; // infinite or no solution
  return -b / a;
}

/** Solve ax² + bx + c = 0 */
function quadraticFormula(a, b, c) {
  if (a === 0) throw new RangeError("'a' ne peut pas être 0 pour une équation du second degré");
  const delta = b ** 2 - 4 * a * c;
  if (delta < 0) {
    // Return complex roots
    const realPart = -b / (2 * a);
    const imagPart = Math.sqrt(-delta) / (2 * a);
    return [
      { re: realPart, im: imagPart },
      { re: realPart, im: -imagPart },
    ];
  }
  if (delta === 0) return [-b / (2 * a)];
  const sq = Math.sqrt(delta);
  return [(-b + sq) / (2 * a), (-b - sq) / (2 * a)];
}

/** Solve ax³ + bx² + cx + d = 0 — returns array of real roots */
function cubicFormula(a, b, c, d) {
  const discriminant =
    18 * a * b * c * d -
    4 * b ** 3 * d +
    b ** 2 * c ** 2 -
    4 * a * c ** 3 -
    27 * a ** 2 * d ** 2;

  const delta0 = b ** 2 - 3 * a * c;
  const delta1 = 2 * b ** 3 - 9 * a * b * c + 27 * a ** 2 * d;

  if (discriminant > 0) {
    const C = Math.cbrt((delta1 + Math.sqrt(discriminant)) / 2);
    const root1 = -(1 / 3) * (b + C + delta0 / C);
    return [root1];
  } else if (discriminant === 0) {
    const root1 = -((1 / 3) * (b + delta0 / (2 * Math.sqrt(delta0))));
    const root2 = -((1 / 3) * (b - delta0 / (2 * Math.sqrt(delta0))));
    return [root1, root2];
  } else {
    const R = -(Math.cbrt(Math.abs(delta1 + Math.sqrt(-discriminant)) / 2));
    const Im = Math.sqrt(3) * Math.cbrt(Math.abs(delta1 - Math.sqrt(-discriminant)) / 2);
    const root1 = -(1 / 3) * (b + R + Im);
    const root2 = -(1 / 3) * (b - (R + Im) / 2);
    const root3 = -(1 / 3) * (b - (R - Im) / 2);
    return [root1, root2, root3];
  }
}

/**
 * Solve 2×2 linear system via Cramer's rule:
 *   a1*x + b1*y = c1
 *   a2*x + b2*y = c2
 */
function solveLinearSystem2x2(a1, b1, c1, a2, b2, c2) {
  const det = a1 * b2 - a2 * b1;
  if (det === 0) return null; // no unique solution
  return {
    x: (c1 * b2 - c2 * b1) / det,
    y: (a1 * c2 - a2 * c1) / det,
  };
}

/** Evaluate polynomial p(x) = coeffs[0] + coeffs[1]*x + ... + coeffs[n]*x^n */
function evaluatePolynomial(coeffs, x) {
  if (!Array.isArray(coeffs) || coeffs.length === 0)
    throw new TypeError('coeffs doit être un tableau non vide');
  // Horner's method
  return coeffs.reduceRight((acc, c) => acc * x + c);
}

/** Power */
function power(base, exponent) {
  return base ** exponent;
}

/** Natural log, log base 2, log base 10 */
function log(n) { return Math.log(n); }
function log2(n) { return Math.log2(n); }
function log10(n) { return Math.log10(n); }
function logBase(n, base) { return Math.log(n) / Math.log(base); }

/** Square root and nth root */
function squareRoot(number) { return Math.sqrt(number); }
function nthRoot(number, n) { return Math.sign(number) * Math.abs(number) ** (1 / n); }

module.exports = {
  linearEquation,
  quadraticFormula,
  cubicFormula,
  solveLinearSystem2x2,
  evaluatePolynomial,
  power, squareRoot, nthRoot,
  log, log2, log10, logBase,
};
