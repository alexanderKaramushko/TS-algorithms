import { BinaryTree } from "../../tree";

/**
 * @see {@link https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/description}
 *
 *
 * @description
 */
export function minDifference(root: BinaryTree<number>) {
  function traverse(root: BinaryTree<number> | null, currMax: number, currMin: number): number {
    if (!root) {
      return currMax - currMin;
    }

    const newMax = Math.max(currMax, root.value);
    const newMin = Math.min(currMin, root.value);

    const left = traverse(root.left, newMax, newMin);
    const right = traverse(root.right, newMax, newMin);

    return Math.max(left, right);
  }

  return traverse(root, root.value, root.value);
}

