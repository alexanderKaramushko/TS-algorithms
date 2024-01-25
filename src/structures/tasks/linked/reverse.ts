import { LinkedList, NodeModel } from "../../linked";
import { Stack } from "../../stack/stack";

/**
 * @see {@link https://leetcode.com/problems/reverse-linked-list}
 */
export function reverseList1(linkedList: LinkedList<number>): LinkedList<number> {
  const values = new Stack<number>([]);

  let node = linkedList.head;

  while (node) {
    if (node?.value) {
      values.push(node.value);
    }

    node = node.next;
  }

  const reversed = new LinkedList();

  while (values.size() > 0) {
    reversed.append(values.pop());
  }

  return linkedList;
};

/**
 * @see {@link https://leetcode.com/problems/reverse-linked-list}
 */
export function reverseList2(linkedList: LinkedList<number>): LinkedList<number> {
  let previous: NodeModel<number> | null = null;
  let currentNext: NodeModel<number> | null = null;
  let current = linkedList.head;

  while (current) {
    currentNext = current.next ? Object.assign({}, current.next) : null;

    if (previous) {
      current.next = previous;
    } else {
      current.next = null;
    }

    if (currentNext) {
      linkedList.head = currentNext;
    }

    previous = current;
    current = currentNext;
  }

  return linkedList;
};
