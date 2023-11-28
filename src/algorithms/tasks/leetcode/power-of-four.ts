/**
 * @see {@link https://leetcode.com/problems/power-of-four}
 * 
 * ACCEPTED.
 */
export function isPowerOfFour(n: number): boolean {
  if ((n % 1) !== 0 || n === 0) {
    return false;
  }

  if (n === 1) {
    return true;
  }

  return isPowerOfFour(n / 4);
};
