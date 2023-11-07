/**
 * @see {@link https://new.contest.yandex.ru/48570/problem?id=215/2023_04_06/onaxya4yqZ}
 * @todo
 * Сделать разбиение по Ламуто через swap
 * 
 * Асимптотика
 * 
 * В среднем O(n log n), где n – сортировка меньшего и большего массивов,
 * а log n – кол-во вызовов для каждого массива
 */
export function quick(input: number[]) {
  if (input.length <= 1) {
    return input;
  }

  const pivot = input[0];

  const less = input.filter((n) => n < pivot);
  const greater = input.filter((n) => n > pivot);

  quick(less);
  quick(greater);

  let inputIndex = 0;

  for (let index = 0; index < less.length; index++) {
    if (input[index] === less[index]) {
      inputIndex++;
      continue;
    }

    input[index] = less[index];
    inputIndex++;
  }

  input[inputIndex] = pivot;
  inputIndex++;

  for (let index = 0; index < greater.length; index++) {
    if (input[index] === greater[index]) {
      inputIndex++;
      continue;
    }

    input[inputIndex] = greater[index];
    inputIndex++;
  }

  return input;
}
