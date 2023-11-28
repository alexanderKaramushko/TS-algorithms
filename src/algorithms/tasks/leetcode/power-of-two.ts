/**
 * @description Двоичный код степени двойки имеет только одну единицу.
 * 
 * 100 - 4
 * 101 - 5
 * 110 - 6
 * 111 - 7
 * 1000 - 8
 * ...
 */
export function isPowerOfTwo(n: number): boolean {
  return (n & 1) === 0;
};
