import { Stack } from "../../stack/stack";

/**
 * @description Реверсирование строки с помощью стека.
 */
export function reverse(input: string): string {
  const stack = new Stack<string>([]);

  for (const char of input) {
    stack.push(char);
  }

  let reversed = '';

  while (stack.size() > 0) {
    reversed += stack.pop();
  }

  return reversed;
}
