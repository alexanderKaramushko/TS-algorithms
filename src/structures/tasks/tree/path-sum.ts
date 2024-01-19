import { BinaryTree } from "../../tree";

/**
 * @see {@link https://leetcode.com/problems/path-sum/description/}
 *
 *
 * @description
 * 
 * Если дерево leaf, то сложить текущее значение с накопленной суммой и проверить
 * на равенство с targetSum.
 * 
 * Взять true из left или right после завершения сравнений на текущем дереве.
 */
export function hasPathSum(root: BinaryTree<number> | null, targetSum: number) {
  function traverse(root: BinaryTree<number> | null, curr: number): boolean {
    if (!root) {
      return false;
    }

    if (!root.left && !root.right) {
      return curr + root.value === targetSum;
    }

    curr += root.value;

    const left = traverse(root.left, curr);
    const right = traverse(root.right, curr);

    return left || right;
  }

  return traverse(root, 0);
}
