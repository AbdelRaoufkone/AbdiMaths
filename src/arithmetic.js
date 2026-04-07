'use strict';

/**
 * Arithmetic operations — all variadic, no external deps.
 */

function add(...numbers) {
  if (numbers.length === 0) throw new TypeError('add() requiert au moins un argument');
  return numbers.reduce((acc, n) => acc + n, 0);
}

function subtract(...numbers) {
  if (numbers.length === 0) throw new TypeError('subtract() requiert au moins un argument');
  return numbers.reduce((acc, n) => acc - n);
}

function multiply(...numbers) {
  if (numbers.length === 0) throw new TypeError('multiply() requiert au moins un argument');
  return numbers.reduce((acc, n) => acc * n, 1);
}

function divide(a, b) {
  if (b === 0) throw new RangeError("Division par zéro n'est pas autorisée");
  return a / b;
}

function modulo(a, b) {
  if (b === 0) throw new RangeError("Modulo par zéro n'est pas autorisé");
  return ((a % b) + b) % b; // always non-negative
}

function abs(n) {
  return Math.abs(n);
}

function sign(n) {
  return Math.sign(n);
}

function getNumberOfDigits(number) {
  return Math.abs(number).toString().replace('.', '').length;
}

function roundTo(number, decimals = 0) {
  const factor = 10 ** decimals;
  return Math.round(number * factor) / factor;
}

function clamp(value, min, max) {
  if (min > max) throw new RangeError('min doit être inférieur ou égal à max');
  return Math.min(Math.max(value, min), max);
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function normalize(value, min, max) {
  if (min === max) throw new RangeError('min et max ne peuvent pas être identiques');
  return (value - min) / (max - min);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  abs,
  sign,
  getNumberOfDigits,
  roundTo,
  clamp,
  lerp,
  normalize,
};
