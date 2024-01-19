import { BinaryTree } from "../../tree";

/**
 * @see {@link https://leetcode.com/problems/same-tree/description}
 *
 *
 * @description
 */
export function isSameTree(root1: BinaryTree<number> | null, root2: BinaryTree<number> | null): boolean {
  if (!root1 && !root2) {
    return true;
  }

  if (root1 === null || root2 === null) {
    return false;
  }

  return root1?.value === root2.value
    && isSameTree(root1.left, root2.left)
    && isSameTree(root1.right, root2.right);
}
