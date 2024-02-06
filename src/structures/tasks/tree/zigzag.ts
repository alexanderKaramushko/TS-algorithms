import { BinaryTree } from "../../tree";

/**
 * @see {@link https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal}
 */
export function zigzag(root: BinaryTree<number>) {
  const chunks: number[][] = [];

  let queue: BinaryTree<number>[] = [];
  queue.push(root);

  let leftToRight = false;

  while (queue.length) {
    const currentSize = queue.length;
    const nextQueue: BinaryTree<number>[] = [];
    let chunk: number[] = [];

    for (let index = 0; index < currentSize; index++) {
      const node = queue[index];

      if (leftToRight) {
        chunk.push(node.value);
      } else {
        chunk.unshift(node.value);
      }

      if (node.right) {
        nextQueue.push(node.right);
      }

      if (node.left) {
        nextQueue.push(node.left);
      }
    }

    chunks.push(chunk);
    chunk = [];

    leftToRight = !leftToRight;
    queue = nextQueue;
  }

  return chunks;
}
