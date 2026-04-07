'use strict';

/** Greatest common divisor (Euclidean algorithm) */
function gcd(a, b) {
  a = Math.abs(Math.trunc(a));
  b = Math.abs(Math.trunc(b));
  while (b !== 0) { [a, b] = [b, a % b]; }
  return a;
}

/** Least common multiple */
function lcm(a, b) {
  const g = gcd(a, b);
  if (g === 0) return 0;
  return Math.abs(Math.trunc(a) * Math.trunc(b)) / g;
}

/** Factorial — iterative, handles up to ~170 before Infinity */
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) throw new RangeError('factorial requiert un entier ≥ 0');
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

/** Binomial coefficient C(n, k) */
function binomial(n, k) {
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  k = Math.min(k, n - k); // take advantage of symmetry
  let result = 1;
  for (let i = 0; i < k; i++) {
    result = (result * (n - i)) / (i + 1);
  }
  return Math.round(result);
}

/** Returns true if n is prime */
function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) return false;
  if (n < 4) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

/** Prime factors of n (as sorted array, may have duplicates) */
function primeFactors(n) {
  if (!Number.isInteger(n) || n < 1) throw new RangeError('primeFactors requiert un entier ≥ 1');
  const factors = [];
  let divisor = 2;
  while (n > 1) {
    while (n % divisor === 0) { factors.push(divisor); n /= divisor; }
    divisor++;
  }
  return factors;
}

/** nth Fibonacci number (0-indexed: fib(0)=0, fib(1)=1) */
function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0) throw new RangeError('fibonacci requiert un entier ≥ 0');
  if (n <= 1) return n;
  let [a, b] = [0, 1];
  for (let i = 2; i <= n; i++) { [a, b] = [b, a + b]; }
  return b;
}

/** Fibonacci sequence as array up to length n */
function fibonacciSequence(n) {
  if (!Number.isInteger(n) || n < 1) throw new RangeError('fibonacciSequence requiert un entier ≥ 1');
  const seq = [0];
  if (n === 1) return seq;
  seq.push(1);
  for (let i = 2; i < n; i++) seq.push(seq[i - 1] + seq[i - 2]);
  return seq;
}

/** Sieve of Eratosthenes — returns all primes up to limit */
function sieve(limit) {
  if (!Number.isInteger(limit) || limit < 2) return [];
  const composite = new Uint8Array(limit + 1);
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (!composite[i]) {
      primes.push(i);
      for (let j = i * i; j <= limit; j += i) composite[j] = 1;
    }
  }
  return primes;
}

/** nth prime (1-indexed) */
function nthPrime(n) {
  if (!Number.isInteger(n) || n < 1) throw new RangeError('nthPrime requiert un entier ≥ 1');
  let count = 0, candidate = 1;
  while (count < n) { if (isPrime(++candidate)) count++; }
  return candidate;
}

/** Check if n is a perfect number */
function isPerfect(n) {
  if (!Number.isInteger(n) || n < 1) return false;
  let sum = 1;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) { sum += i; if (i !== n / i) sum += n / i; }
  }
  return n > 1 && sum === n;
}

/** Euler's totient φ(n) — count of integers ≤ n coprime to n */
function totient(n) {
  if (!Number.isInteger(n) || n < 1) throw new RangeError('totient requiert un entier ≥ 1');
  let result = n;
  let temp = n;
  for (let p = 2; p * p <= temp; p++) {
    if (temp % p === 0) {
      while (temp % p === 0) temp /= p;
      result -= result / p;
    }
  }
  if (temp > 1) result -= result / temp;
  return result;
}

module.exports = {
  gcd, lcm,
  factorial, binomial,
  isPrime, primeFactors, sieve, nthPrime,
  fibonacci, fibonacciSequence,
  isPerfect, totient,
};
