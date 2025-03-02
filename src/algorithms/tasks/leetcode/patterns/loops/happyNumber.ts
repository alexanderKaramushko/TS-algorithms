/**
 * @see {@link https://example.com}
 *
 * @description Продолжаем суммировать числа до тех пор, пока не будет 1
 * или вновь не встретим то же самое число, то есть бесконечный цикл
 */
export function happyNumber(n: number) {
  const seen = new Set();
  let newNum = n;

  while (true) {
    const sum = newNum.toString().split('').reduce((sum, num) => sum + Number.parseInt(num, 10) ** 2, 0);

    if (seen.has(sum)) {
      return false;
    }

    if (sum === 1) {
      return true;
    }

    newNum = sum;
    seen.add(sum);
  }
}
