import { BinaryTree } from "../../tree";

/**
 * @see {@link https://leetcode.com/problems/minimum-depth-of-binary-tree/description}
 *
 *
 * @description
 */
export function minDepth(root: BinaryTree<number> | null, depth: number): number {
  if (!root) {
    return 0;
  }

  if (!root.left && !root.right) {
    return depth + 1;
  }

  const left = minDepth(root.left, depth + 1);
  const right = minDepth(root.right, depth + 1);

  if (left === 0 || right === 0) {
    return Math.max(left, right)
  }

  return Math.min(left, right);
}
