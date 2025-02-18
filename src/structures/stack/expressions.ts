import { Stack } from "./stack";

/**
 * @description Дана, строка, которая содержит корректное арифметическое выражение,
 * в котором содержатся только целые положительные числа, пробелы, знаки + и *.
 * 
 * 1. 
 */
export function expressions(input: string) {
  const stack: string[] = [];

  for (const char of input) {
    if (char === ' ') {
      continue;
    }

    if (stack[stack.length - 1] === '*') {
      stack.pop();
      stack.push((+(stack.pop() ?? 0) * +char).toString());
      continue;
    }

    stack.push(char);
  }

  return stack.reduce((sum, item) => !Number.isNaN(+item) ? sum + +item : sum, 0);
}
