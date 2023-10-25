/**
 * @see {@link https://informatics.msk.ru/mod/statements/view.php?chapterid=112984#1}
 */

import { Deque } from "../deque";

/**
 * @description
 * 
 * ACCEPTED.
 * 
 * "+" поставить гоблина в конец очереди
 * "*" поставить гоблина в середину очереди (за центром, если кол-во в очереди нечетное)
 * "-" завести текущего гоблина к шаману
 */
type Operation = {
  type: '+' | '*' | '-';
  value?: number;
}

/**
 * @returns порядок гоблинов, которые зашли к шаману
 */
export function orderQueue(): (operations: Operation) => void {
  const head = new Deque<number>([]);
  const tail = new Deque<number>([]);

  return (operation: Operation) => {
    if (operation.type === '-') {
      console.log(head.dequeueFirst())
    }

    if (operation.type === '*') {
      tail.enqueueFirst(operation.value as number);
    }

    if (operation.type === '+') {
      tail.enqueueLast(operation.value as number);
    }

    while (head.size() < tail.size()) {
      head.enqueueLast(tail.dequeueFirst() as number);
    }
  }
}