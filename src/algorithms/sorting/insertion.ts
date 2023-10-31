// Сравниваем 4 с 5
// [5, 4, 3, 2, 1]
// Меняем местами, запоминаем индекс отсортированной части
// [4, 5, 3, 8, 1]
// Сравниваем 3 с элементами до конца отсортированной части
// [4, 5, 3, 8, 1]
// Меняем местами, запоминаем индекс отсортированной части
// [3, 4, 5, 8, 1]
// 8 > последнего отсортированного элемента, пропускаем
// [3, 4, 5, 8, 1]
// Сравниваем 1 с элементами до конца отсортированной части
// [3, 4, 5, 8, 1]
// Меняем местами, запоминаем индекс отсортированной части
// [1, 3, 4, 5, 8]
export function insertion(input: number[]) {
  let sorted: number[] = input.splice(0, 1);

  for (let i = 0; i < input.length; i++) {
    const element = input[i];

    if (element > sorted[sorted.length - 1]) {
      sorted.push(element);
      continue;
    }

    label:
    for (let j = 0; j <= sorted.length; j++) {
      const sortedElement = sorted[j];

      if (element < sortedElement) {
        sorted = [
          ...(j !== 0 ? sorted.slice(0, j) : []),
          element,
          ...sorted.slice(j)
        ];

        break label;
      }
    }
  }

  return sorted;
}
