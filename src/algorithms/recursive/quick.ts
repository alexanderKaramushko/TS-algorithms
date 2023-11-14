import { hoare } from "../sorting/hoare";

/**
 * @see {@link https://new.contest.yandex.ru/48570/problem?id=215/2023_04_06/onaxya4yqZ}
 * 
 * Асимптотика
 * 
 * В среднем O(n log n), где n – сортировка меньшего и большего массивов,
 * а log n – кол-во вызовов для каждого массива
 */
export function quick(input: number[], leftIndex: number = 0, rightIndex: number = input.length - 1) {
  if (input.length === 1) {
    return input;
  }

  if (leftIndex >= rightIndex) {
    return;
  }

  const pivotIndex = hoare(input, leftIndex, rightIndex);

  quick(input, leftIndex, pivotIndex - 1);
  quick(input, pivotIndex + 1, rightIndex);

  return input;
}
