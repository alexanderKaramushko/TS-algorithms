/**
 * @description Переместить нули в конец без изменения первоначального порядка
 */
export function moveNulls(numbers: number[]): number[] {
  const start = [];
  const end = [];

  for (const number of numbers) {
    if (number === 0) {
      end.push(number)
    } else {
      start.push(number);
    }
  }

  return [...start, ...end];
}
