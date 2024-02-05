import { LinkedQueue } from "../../queue/linked-queue";
import { BinaryTree } from "../../tree";

/**
 * @see {@link https://leetcode.com/problems/binary-tree-right-side-view}
 */
export function right(root: BinaryTree<number>) {
  const rightMost: number[] = [];

  let queue: BinaryTree<number>[] = [];
  queue.push(root);

  while (queue.length) {
    const currentSize = queue.length;
    const nextQueue: BinaryTree<number>[] = [];

    rightMost.push(queue[queue.length - 1].value);

    for (let index = 0; index < currentSize; index++) {
      const node = queue[index];

      if (node.left) {
        nextQueue.push(node.left);
      }

      if (node.right) {
        nextQueue.push(node.right);
      }
    }

    queue = nextQueue;
  }

  return rightMost;
}
