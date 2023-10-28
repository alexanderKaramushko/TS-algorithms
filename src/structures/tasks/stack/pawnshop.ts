import { Stack } from "../../stack";

/**
 * @description Выкупить | Сумма | Максимальная сумма | Кол-во для выкупа самого ценного
 */
type TakeOperation = '2' | '3' | '4' | '5';

/**
 * @description Сдать
 */
type PutOperation = `${1} ${number}`;

type ItemIndex = number;

/**
 * @see {@link http://ulivt.ru:8082/ru/problem-pid-c5a5}
 * 
 * ACCEPTED.
 */
export function pawnshop() {
  const stack = new Stack<ItemIndex>([]);
  const items: number[] = [];

  let sum = 0;

  const takeOperations: Record<TakeOperation, () => void> = {
    2: () => {
      const index = items.length - 1;

      if (stack.peek() === index) {
        stack.pop();
      }

      sum -= (items.pop() ?? 0);
    },
    3: () => {
      console.log(sum);
    },
    4: () => {
      console.log(items[stack.peek() as ItemIndex]);
    },
    5: () => {
      const item = stack.peek();

      if (item) {
        console.log(items.length - item);
      } else {
        console.log(0);
      }
    }
  }

  return (input: TakeOperation | PutOperation) => {
    if (input.includes(' ')) {
      const [, cost] = input.split(' ');

      items.push(+cost);
      sum += +cost;

      if (+cost > (items[stack.peek() as ItemIndex] ?? -Infinity)) {
        stack.push(items.length - 1);
      }
    } else {
      takeOperations[input as TakeOperation]();
    }
  }
}
