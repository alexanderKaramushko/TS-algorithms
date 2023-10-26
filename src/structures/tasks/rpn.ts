import { Stack } from "../stack";

/**
 * @see {@link https://informatics.msk.ru/mod/statements/view.php?chapterid=1915#1}
 * 
 * ACCEPTED.
 */
export function rpn(input: string) {
  const stack = new Stack<number>([]);
  const operators = '+-*';

  for (const symbol of [...input]) {
    if (operators.includes(symbol)) {
      const operand1 = stack.pop() as number;
      const operand2 = stack.pop() as number;

      switch (symbol) {
        case '-':
          stack.push(operand2 - operand1);
          continue
        case '+':
          stack.push(operand2 + operand1);
          continue
        case '*':
          stack.push(operand2 * operand1);
          continue
        default:
          continue;
      }
    }

    if (symbol === ' ') {
      continue;
    }

    stack.push(+symbol);
  }

  return stack.pop();
}
