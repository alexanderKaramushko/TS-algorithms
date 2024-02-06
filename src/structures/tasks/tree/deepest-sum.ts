import { BinaryTree } from "../../tree";

/**
 * @see {@link https://leetcode.com/problems/deepest-leaves-sum/description}
 */
export function deepestSum(root: BinaryTree<number>) {
  let queue: BinaryTree<number>[] = [];
  queue.push(root);

  while (queue.length) {
    const currentSize = queue.length;
    const nextQueue: BinaryTree<number>[] = [];
    let sum = 0;

    for (let index = 0; index < currentSize; index++) {
      const node = queue[index];

      sum += node.value;

      if (node.left) {
        nextQueue.push(node.left);
      }

      if (node.right) {
        nextQueue.push(node.right);
      }
    }

    if (!nextQueue.length) {
      return sum
    }

    sum = 0;
    queue = nextQueue;
  }

  return 0;
}
