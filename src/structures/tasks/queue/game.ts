import { LinkedQueue } from "../../queue/linked-queue";

type Card = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/**
 * @see {@link https://informatics.msk.ru/pluginfile.php/56777/mod_resource/content/0/module1/lesson11.pdf}
 * 
 * @returns {string} first или second + кол-во сделанных ходох до победы.
 * Либо возврат слова botva, если на протяжянии 10^6 ходов не был определен победитель.
 * Карта 0 > карта 9.
 */
export function game(player1: Card[], player2: Card[]) {
  const queue1 = new LinkedQueue<Card>();
  const queue2 = new LinkedQueue<Card>();

  player1.forEach((item) => queue1.enqueue(item));
  player2.forEach((item) => queue2.enqueue(item));

  let moves = 0;

  while (moves < 10 ** 6 && queue1.size() > 0 && queue2.size() > 0) {
    moves += 1;

    const card1 = queue1.peek() as Card;
    const card2 = queue2.peek() as Card;

    if (card1 === 0 && card2 === 9) {
      queue1.enqueue(queue1.dequeue() as Card);
      queue1.enqueue(queue2.dequeue() as Card);
      break;
    }

    if (card1 === 9 && card2 === 0) {
      queue2.enqueue(queue2.dequeue() as Card);
      queue2.enqueue(queue1.dequeue() as Card);
      break;
    }

    if (card1 > card2) {
      queue1.enqueue(queue1.dequeue() as Card);
      queue1.enqueue(queue2.dequeue() as Card);
    } else {
      queue2.enqueue(queue2.dequeue() as Card);
      queue2.enqueue(queue1.dequeue() as Card);
    }
  }

  if (queue1.size() === 0) {
    return `second ${moves}`;
  }

  if (queue2.size() === 0) {
    return `first ${moves}`;
  }

  return 'botva';
}
