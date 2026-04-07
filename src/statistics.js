'use strict';

function _requireArray(arr, name = 'arr') {
  if (!Array.isArray(arr) || arr.length === 0)
    throw new TypeError(`${name} doit être un tableau non vide`);
}

/** Sum of all values */
function sum(arr) {
  _requireArray(arr);
  return arr.reduce((acc, n) => acc + n, 0);
}

/** Arithmetic mean */
function mean(arr) {
  _requireArray(arr);
  return sum(arr) / arr.length;
}

/** Median value */
function median(arr) {
  _requireArray(arr);
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

/** Mode(s) — returns array of most frequent values */
function mode(arr) {
  _requireArray(arr);
  const freq = new Map();
  for (const n of arr) freq.set(n, (freq.get(n) ?? 0) + 1);
  const maxFreq = Math.max(...freq.values());
  return [...freq.entries()]
    .filter(([, f]) => f === maxFreq)
    .map(([v]) => v);
}

/** Range (max − min) */
function range(arr) {
  _requireArray(arr);
  return Math.max(...arr) - Math.min(...arr);
}

/** Population variance */
function variance(arr) {
  _requireArray(arr);
  const m = mean(arr);
  return mean(arr.map(n => (n - m) ** 2));
}

/** Sample variance */
function sampleVariance(arr) {
  _requireArray(arr);
  if (arr.length < 2) throw new RangeError('sampleVariance requiert au moins 2 valeurs');
  const m = mean(arr);
  return arr.reduce((acc, n) => acc + (n - m) ** 2, 0) / (arr.length - 1);
}

/** Population standard deviation */
function standardDeviation(arr) {
  return Math.sqrt(variance(arr));
}

/** Sample standard deviation */
function sampleStandardDeviation(arr) {
  return Math.sqrt(sampleVariance(arr));
}

/** p-th percentile (0–100) using linear interpolation */
function percentile(arr, p) {
  _requireArray(arr);
  if (p < 0 || p > 100) throw new RangeError('p doit être entre 0 et 100');
  const sorted = [...arr].sort((a, b) => a - b);
  const index = (p / 100) * (sorted.length - 1);
  const lower = Math.floor(index);
  const upper = Math.ceil(index);
  if (lower === upper) return sorted[lower];
  return sorted[lower] + (index - lower) * (sorted[upper] - sorted[lower]);
}

/** Interquartile range (Q3 − Q1) */
function iqr(arr) {
  return percentile(arr, 75) - percentile(arr, 25);
}

/** Covariance of two arrays */
function covariance(arrX, arrY) {
  _requireArray(arrX, 'arrX');
  _requireArray(arrY, 'arrY');
  if (arrX.length !== arrY.length) throw new RangeError('Les deux tableaux doivent avoir la même longueur');
  const mx = mean(arrX);
  const my = mean(arrY);
  return arrX.reduce((acc, x, i) => acc + (x - mx) * (arrY[i] - my), 0) / arrX.length;
}

/** Pearson correlation coefficient */
function correlation(arrX, arrY) {
  const cov = covariance(arrX, arrY);
  return cov / (standardDeviation(arrX) * standardDeviation(arrY));
}

/** z-score of a value relative to an array */
function zScore(value, arr) {
  const sd = standardDeviation(arr);
  if (sd === 0) throw new RangeError('Écart-type nul, z-score indéfini');
  return (value - mean(arr)) / sd;
}

/** Min and max in one pass */
function minMax(arr) {
  _requireArray(arr);
  return { min: Math.min(...arr), max: Math.max(...arr) };
}

module.exports = {
  sum, mean, median, mode, range,
  variance, sampleVariance,
  standardDeviation, sampleStandardDeviation,
  percentile, iqr,
  covariance, correlation, zScore,
  minMax,
};
