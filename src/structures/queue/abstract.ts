/**
 * Абсрактная структура данных "Очередь".
 */
export type AbstractQueue<T> = {
  enqueue: (item: T) => void;
  dequeue: () => T | undefined;
  peek: () => T | undefined;
  size: () => number;
}
