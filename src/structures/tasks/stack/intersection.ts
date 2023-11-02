function sortArrays(arr1: number[], arr2: number[]) {
  if (arr1.length > arr2.length) {
    return [arr2, arr1];
  }

  return [arr1, arr2];
}

/**
 * @description
 * Есть два сортированных массива чисел
 * Числа сортированы, но могут повторяться
 * Нужно написать функцию, которая возвращает новый массив,
 * содержащий элементы, которые встречаются в обоих массивах
 * 
 * ACCEPTED.
 */
export function findEqualElements(arr1: number[], arr2: number[]) {
  const intersections = [];

  while (arr1.length && arr2.length) {
    const [minArr = [], maxArr = []] = sortArrays(arr1, arr2);

    const minLastEl = minArr.at(-1) as number;
    const maxLastEl = maxArr.at(-1) as number;

    if (maxLastEl > minLastEl) {
      maxArr.pop();
    }

    if (maxLastEl < minLastEl) {
      minArr.pop();
    }

    if (maxLastEl === minLastEl) {
      maxArr.pop();
      intersections.push(minArr.pop());
    }
  }

  return intersections;
}
