import { Stack } from "../../stack/stack";
import { BinaryTree, BinaryTreeNode } from "../../tree";

/**
 * @see {@link https://leetcode.com/problems/range-sum-of-bst/description}
 */
export function rangeBst(root: BinaryTree<number> | null, low: number, high: number) {
  if (!root) {
    return 0;
  }

  let sum = 0;

  if (root.value >= low && root.value <= high) {
    sum += root.value;
  }

  if (root.value >= low) {
    sum += rangeBst(root?.left ?? null, low, high);
  }

  if (root.value <= high) {
    sum += rangeBst(root?.right ?? null, low, high);
  }

  return sum;
}
