import { BinaryTree } from "../../tree";

/**
 * @see {@link https://leetcode.com/problems/closest-binary-search-tree-value/description}
 */
export function closestBst(root: BinaryTree<number> | null, target: number, closest: number = root?.value ?? 0): number {
  if (!root) {
    return closest;
  }

  if (Math.abs(target - root.value) === Math.abs(target - closest)) {
    closest = Math.min(root.value, closest);
  }

  if (Math.abs(target - root.value) < Math.abs(target - closest)) {
    closest = root.value;
  }

  let leftClosest = -Infinity;
  let rightClosest = -Infinity;

  if (target <= root.value) {
    leftClosest = closestBst(root?.left ?? null, target, closest);
  }

  if (target >= root.value) {
    rightClosest = closestBst(root?.right ?? null, target, closest);
  }

  if (Math.abs(target - leftClosest) <= Math.abs(target - rightClosest)) {
    return leftClosest;
  }

  return rightClosest;
}
