import { Stack } from "../../stack";
import { BinaryTreeNode } from "../../tree";

/**
 * @see {@link https://example.com}
 *
 *
 * @description
 */
export function maxDepthIterative(tree: BinaryTreeNode<number>) {
  const stack = new Stack<[BinaryTreeNode<number>, number]>([[tree, 1]]);
  let max = 0;

  while (stack.size() > 0) {
    const [node, depth = 0] = stack.pop() ?? [];

    max = Math.max(max, depth);

    if (node?.left) {
      stack.push([node.left, depth + 1]);
    }

    if (node?.right) {
      stack.push([node.right, depth + 1]);
    }
  }

  return max;
}
