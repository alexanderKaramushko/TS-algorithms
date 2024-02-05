import { BinaryTree } from "../../tree";

/**
 * @see {@link https://leetcode.com/problems/find-largest-value-in-each-tree-row/}
 */
export function rowLargest(root: BinaryTree<number>) {
  const max: number[] = [];

  let queue: BinaryTree<number>[] = [];
  queue.push(root);

  while (queue.length) {
    const currentSize = queue.length;
    const nextQueue: BinaryTree<number>[] = [];
    let currentMax = -Infinity;

    for (let index = 0; index < currentSize; index++) {
      const node = queue[index];

      if (node.value > currentMax) {
        currentMax = node.value;
      }

      if (node.left) {
        nextQueue.push(node.left);
      }

      if (node.right) {
        nextQueue.push(node.right);
      }
    }

    max.push(currentMax);
    currentMax = -Infinity;
    queue = nextQueue;
  }

  return max;
}
