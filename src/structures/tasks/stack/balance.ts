import { Stack } from "../../stack";

/**
 * @see {@link https://informatics.msk.ru/mod/statements/view.php?chapterid=112984#1}
 * 
 * ACCEPTED.
 */
export function balance(input: string) {
  const stack = new Stack<string>([]);

  const openBrackets = '([{';
  const closeBrackets = ')]}';

  for (const bracket of [...input]) {
    if (openBrackets.includes(bracket)) {
      stack.push(bracket);
    }

    if (openBrackets.indexOf(stack.peek() as string) === closeBrackets.indexOf(bracket)) {
      stack.pop();
    }

    if (stack.size() === 0) {
      return 'NO';
    }
  }

  return stack.size() === 0 ? 'YES' : 'NO';
}
