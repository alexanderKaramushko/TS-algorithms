import { BinaryTree } from "../../tree";

/**
 * @see {@link https://leetcode.com/problems/maximum-depth-of-binary-tree/description}
 */
export function maxDepth(root: BinaryTree<number> | null): number {
  if (!root) {
    return 0;
  }

  const left = maxDepth(root?.left ?? null);
  const right = maxDepth(root?.right ?? null);

  return Math.max(left, right) + 1;
}
