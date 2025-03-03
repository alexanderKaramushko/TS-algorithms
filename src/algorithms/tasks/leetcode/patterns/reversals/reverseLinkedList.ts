export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

/**
 * @see {@link https://leetcode.com/problems/reverse-linked-list/}
 *
 *
 * @description
 * 
 * Сохраним следующий узел.
 * Далее передвигаем указатель текущего узла на предыдущий
 * и устанавливаем предыдущий узел как текущий.
 * Устанавливаем следующий узел как следующий текущий.
 * 
 * prev    c  n
 * null <- 1  2 -> 3
 * 
 *         p  c
 * null <- 1  2 -> 3
 *
 *              p    c
 * null <- 1 <- 2 <- 3
 */
export function reverseLinkedList(node: ListNode | null) {
  let prev = null;
  let current = node;

  while (current !== null) {
    // Сохранить следующий узел для обработки
    let next = current.next;

    // Связать текущий узел с предыдущим
    current.next = prev;
    // Передвинуть предыдущий узел на текущий
    prev = current;

    // Взять в обработку следующий узел
    current = next;
  }

  if (prev) {
    node = prev;
  }

  return node;
}
