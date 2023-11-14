function swap(input: number[], index1: number, index2: number) {
  const left = input[index1];
  const right = input[index2];

  input[index1] = right;
  input[index2] = left;
}

/**
 * @description Разбиение по Хоару
 * 
 * Взять 0 как Опорный элемент
 * [0, 5, -2, 7, 3]
 * 
 * 1. Найти i от начала > опорного элемента
 * 5
 * 
 * 2. Найти j от конца < опорного элемента
 * -2
 * 
 * 3. Обменять i и j местами, i++, j--
 * [0, -2, 5, 7, 3]
 * 
 * i >= j, разбиение завершено, обменять опорный и j местами
 * Иначе вернуться на пункт 1
 * 
 * @returns индекс опорного элемента
 * 
 */
export function hoare(input: number[], leftIndex: number, rightIndex: number) {
  const pivot = input[leftIndex];

  let i = leftIndex + 1;
  let j = rightIndex;

  while (true) {
    while (i < rightIndex && input[i] < pivot) {
      i++;
    }

    while (input[j] > pivot) {
      j--;
    }

    if (i >= j) {
      break;
    }

    swap(input, i, j);
    i++;
    j--;
  }

  swap(input, leftIndex, j);

  return j;
}
