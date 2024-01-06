/**
 * @description Вернуть индексы двух чисел в неотсортированном массиве,
 * которые в сумме дают искомое число k.
 */
export function sumOfTwo(numbers: number[], k: number) {
  const table = numbers.reduce((scheme, number, index) => ({
    ...scheme,
    [number]: index,
  }), {});

  for (let index = 0; index < numbers.length; index++) {
    if (Reflect.has(table, k - numbers[index])) {
      return [index, Reflect.get(table, k - numbers[index])];
    }
  }

  return null;
}
