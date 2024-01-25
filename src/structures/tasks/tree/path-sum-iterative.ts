import { Stack } from "../../stack/stack";
import { BinaryTree } from "../../tree";

/**
 * @see {@link https://leetcode.com/problems/path-sum/description/}
 *
 *
 * @description
 */
export function pathSumIterative(tree: BinaryTree<number>, targetSum: number) {
  const stack = new Stack<[BinaryTree<number>, number]>([[tree, 0]]);

  while (stack.size() > 0) {
    const [node, curr = 0] = stack.pop() ?? [];

    if (!node?.left && !node?.right) {
      if (curr + (node?.value ?? 0) === targetSum) {
        return true;
      }
    }

    if (node?.left) {
      stack.push([node.left, curr + node.value]);
    }

    if (node?.right) {
      stack.push([node.right, curr + node.value]);
    }
  }

  return false;
}
