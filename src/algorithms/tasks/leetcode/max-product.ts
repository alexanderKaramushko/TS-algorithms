/**
 * @see {@link https://education.yandex.ru/handbook/algorithms/article/zadacha-maksimalnoe-proizvedenie}
 * 
 * @description
 * Ограничения: 2 <= n <= 2 * 10^5; 0 <= a..n <= 2 * 10^5
 * Реализация алгоритма сложности O(n^2) не подойдет, так как
 * примерное кол-во выполняемых элементарных операций компьютером
 * равняется 10^8–10^9, то есть до миллиарда в секунду.
 * 
 * O(n^2) же в самом худшем случае выполнит
 * около 10 миллиардов элементарых операций в секунду: 2^2 * (10^5)^2
 */
export function maxProduct(input: number[]) {
  let firstMax = -Infinity;
  let secondMax = -Infinity;

  for (let index = 0; index < input.length; index++) {
    if (input[index] > firstMax) {
      secondMax = firstMax;
      firstMax = input[index];

      continue;
    }

    if (input[index] > secondMax) {
      secondMax = input[index];
    }
  }

  return firstMax * secondMax;
};
