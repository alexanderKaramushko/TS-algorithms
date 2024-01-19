import { BinaryTree } from "../../tree";

/**
 * @see {@link https://leetcode.com/problems/count-good-nodes-in-binary-tree/description}
 *
 *
 * @description
 * "Правильным" (good) узлом в дереве считается узел, который больше или равен предыдущим узлам от корня.
 */
export function countGoodNodes(root: BinaryTree<number>) {
  let count = 0;

  function traverse(root: BinaryTree<number> | null, max: number) {
    if (!root) {
      return;
    }

    if (root.value >= max) {
      count++;
      max = root.value;
    }

    if (!root.left && !root.right) {
      return;
    }

    traverse(root.left, max);
    traverse(root.right, max);
  }

  traverse(root, -Infinity);

  return count;
}
