// Разбиваем массив на подсписки
// [6, 3, 2, 9]
// Разбиваем массив на два посписка по двум элементам
// [6, 3] и [2, 9]
// Разбиваем массив 4 подсписка по одному элементу
// [6] [3] и [2] [9]
// Объединяем [6] [3] и [2] [9], сразу сортируя
// 6 > 3, помещаем 3 в новый массив
// [3, 6] и [2, 9]
// Объединяем [3, 6] и [2, 9], сразу сортируя
// 3 > 2, помещаем 2 в новый массив
// [3, 6] и [9]
// [2]
// 3 < 9, помещаем 3 в новый массив
// [6] и [9]
// [2, 3]
// 6 < 9, помещаем 6 в новый массив
// [] и [9]
// [2, 3, 6]
// Перемещаем остаток в новый массив
// [] и[]
// [2, 3, 6, 9]
export function merge(input: number[]) {
  if (input.length <= 1) {
    return;
  }

  const middle = Math.floor(input.length / 2);
  const left = input.slice(0, middle);
  const right = input.slice(middle);

  merge(left);
  merge(right);

  let leftIndex = 0;
  let rightIndex = 0;
  let inputIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    const leftElement = left[leftIndex];
    const rightElement = right[rightIndex];

    if (leftElement <= rightElement) {
      input[inputIndex] = leftElement;
      leftIndex++;
    } else {
      input[inputIndex] = rightElement;
      rightIndex++;
    }

    inputIndex++;
  }

  while (leftIndex < left.length) {
    input[inputIndex] = left[leftIndex]
    leftIndex++;
    inputIndex++;
  }

  while (rightIndex < right.length) {
    input[inputIndex] = right[rightIndex]
    rightIndex++;
    inputIndex++;
  }

  return input;
}

