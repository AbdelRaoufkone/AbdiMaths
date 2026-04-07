'use strict';

/**
 * General m×n matrix utilities.
 * Matrices are represented as arrays of row arrays: number[][]
 */

function _shape(m) {
  const rows = m.length;
  const cols = m[0]?.length ?? 0;
  if (rows === 0 || cols === 0 || m.some(r => r.length !== cols))
    throw new TypeError('Matrice invalide — toutes les lignes doivent avoir la même longueur');
  return { rows, cols };
}

/** Create a rows×cols matrix filled with fill (default 0) */
function matCreate(rows, cols, fill = 0) {
  return Array.from({ length: rows }, () => Array(cols).fill(fill));
}

/** Identity matrix of size n */
function matIdentity(n) {
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))
  );
}

/** Deep copy */
function matClone(m) { return m.map(r => [...r]); }

/** Transpose */
function matTranspose(m) {
  const { rows, cols } = _shape(m);
  return Array.from({ length: cols }, (_, j) =>
    Array.from({ length: rows }, (_, i) => m[i][j])
  );
}

/** Element-wise addition */
function matAdd(a, b) {
  const { rows, cols } = _shape(a);
  const sb = _shape(b);
  if (rows !== sb.rows || cols !== sb.cols)
    throw new RangeError('Les matrices doivent avoir les mêmes dimensions pour l\'addition');
  return a.map((row, i) => row.map((v, j) => v + b[i][j]));
}

/** Element-wise subtraction */
function matSub(a, b) {
  const { rows, cols } = _shape(a);
  const sb = _shape(b);
  if (rows !== sb.rows || cols !== sb.cols)
    throw new RangeError('Les matrices doivent avoir les mêmes dimensions pour la soustraction');
  return a.map((row, i) => row.map((v, j) => v - b[i][j]));
}

/** Scalar multiplication */
function matScale(m, scalar) {
  return m.map(row => row.map(v => v * scalar));
}

/** Matrix multiplication */
function matMul(a, b) {
  const sa = _shape(a);
  const sb = _shape(b);
  if (sa.cols !== sb.rows)
    throw new RangeError(`Dimensions incompatibles: ${sa.rows}×${sa.cols} × ${sb.rows}×${sb.cols}`);
  return Array.from({ length: sa.rows }, (_, i) =>
    Array.from({ length: sb.cols }, (_, j) =>
      a[i].reduce((sum, _, k) => sum + a[i][k] * b[k][j], 0)
    )
  );
}

/** Determinant of a square matrix (recursive, suitable for small matrices) */
function matDet(m) {
  const { rows, cols } = _shape(m);
  if (rows !== cols) throw new RangeError('Le déterminant requiert une matrice carrée');
  if (rows === 1) return m[0][0];
  if (rows === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  return m[0].reduce((det, val, j) => {
    if (val === 0) return det;
    const minor = m.slice(1).map(row => [...row.slice(0, j), ...row.slice(j + 1)]);
    return det + val * (j % 2 === 0 ? 1 : -1) * matDet(minor);
  }, 0);
}

/** Trace (sum of diagonal elements) */
function matTrace(m) {
  const { rows, cols } = _shape(m);
  if (rows !== cols) throw new RangeError('La trace requiert une matrice carrée');
  return m.reduce((acc, row, i) => acc + row[i], 0);
}

/** Frobenius norm — sqrt of sum of squared elements */
function matNorm(m) {
  _shape(m);
  return Math.sqrt(m.flat().reduce((acc, v) => acc + v ** 2, 0));
}

module.exports = {
  matCreate, matIdentity, matClone,
  matTranspose, matAdd, matSub, matScale, matMul,
  matDet, matTrace, matNorm,
};
