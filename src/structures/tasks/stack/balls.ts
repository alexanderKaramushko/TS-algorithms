import { Stack } from "../../stack/stack";

type ColorType = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

type Batch = {
  type: ColorType;
  count: number;
}

/**
 * @see {@link https://informatics.msk.ru/mod/statements/view.php?chapterid=111648#1}
 * 
 * ACCEPTED.
 */
export function balls(input: string) {
  const stack = new Stack<Batch>([{
    type: input[0] as ColorType,
    count: 1
  }]);

  let count = 0;

  for (let index = 1; index < input.length; index++) {
    const symbol = input[index];

    if (symbol === ' ') {
      continue;
    }

    const batch = stack.peek() as Batch;

    if (symbol !== batch.type && batch.count >= 3) {
      count += batch.count;
      stack.pop();
    }

    const nextBatch = stack.peek() as Batch;

    if (symbol === nextBatch?.type) {
      nextBatch.count += 1;
      continue;
    }

    stack.push({
      type: symbol as ColorType,
      count: 1,
    });
  }

  if (stack.size() > 0) {
    const ball = stack.peek();

    ball && (count += ball.count);
  }

  console.dir(stack)

  return count;
}
