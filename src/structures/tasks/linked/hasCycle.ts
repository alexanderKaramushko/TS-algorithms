import { LinkedList } from "../../linked";

/**
 * @see {@link https://leetcode.com/problems/linked-list-cycle}
 */
export function hasCycle(linkedList: LinkedList<number>) {
  const walked = new Map();

  let node = linkedList.head;
  let hasCycle = false;

  while (node) {
    walked.set(node, true);

    if (walked.has(node)) {
      hasCycle = true;
      break;
    }

    node = node.next;
  }

  return hasCycle;
}
