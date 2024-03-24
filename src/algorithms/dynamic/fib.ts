/**
 * @description Fibonacci via DP.
 */
export function fib(n: number) {
  let arr = new Array(n + 1).fill(0);

  arr[1] = 1;

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
}
