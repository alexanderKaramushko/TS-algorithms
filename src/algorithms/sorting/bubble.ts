/**
 * 1. Запустить цикл для элементов
 * 2. Запустить цикл для элемента
 * 3. Если следующий элемент > текущего, то поменять их местами
 * 4. После окончания цикла для элемента, вернуться на шаг 2
 */
export function bubble(input: number[]) {
  let hasSwaps = true;

  for (let i = 0; i < input.length; i++) {
    if (!hasSwaps) {
      break;
    }

    hasSwaps = false;

    for (let j = 0; j < input.length - i; j++) {
      const element = input[j];
      const nextElement = input[j + 1];

      if (element > nextElement) {
        input[j + 1] = element;
        input[j] = nextElement;
        hasSwaps = true;
      }
    }
  }

  console.log(input)

  return input;
}
