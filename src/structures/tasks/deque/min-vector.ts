import { Deque } from "../../queue/deque";

/**
 * @see {@link https://informatics.msk.ru/mod/statements/view.php?chapterid=756#1}
 */
export function minVector(vectorSize: number, sequence: number[]) {
  const queue = new Deque<[number, number]>();
  const min: number[] = [];

  for (let index = 0; index < sequence.length + 1; index++) {
    const [firstIndex, firstItem] = queue.peekFirst() ?? [];

    if (index >= vectorSize) {
      min.push(firstItem);
    }

    if (firstIndex !== undefined && index - vectorSize === firstIndex) {
      queue.dequeueFirst();
    }

    while (queue.size() > 0) {
      const [, lastItem] = queue.peekLast() ?? [];

      if (lastItem && lastItem > sequence[index]) {
        queue.dequeueLast();
        continue;
      }

      break;
    }

    queue.enqueueLast([index, sequence[index]]);
  }

  return min;
}
