import { Stack } from "../../stack/stack";

/**
 * @see {@link http://ulivt.ru:8082/ru/problem-pid-c5a4}
 * 
 * ACCEPTED.
 */
export function biggestRight(size: number, first: number, x: number, y: number) {
  const stack = new Stack<number>([]);
  const numbers = Array.from({ 0: first, length: size });

  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index - 1]) {
      numbers[index] = (numbers[index - 1] * x + y) % (10 ** 9 + 7);
    }
  }

  const biggest: number[] = [];

  for (let index = numbers.length - 1; index >= 0; index--) {
    while (stack.size() > 0) {
      if (numbers[stack.peek() as number] > numbers[index]) {
        biggest.push(stack.peek() as number);
        break;
      }

      stack.pop();
    }

    if (stack.size() === 0) {
      biggest.push(-1);
    }

    stack.push(index);
  }

  return biggest.reduce((sum, current) => sum + current, 0);
}
