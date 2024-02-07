import { BinaryTree } from "../../tree";

/**
 * @see {@link https://leetcode.com/problems/insert-into-a-binary-search-tree/description}
 */
export function bstInsertion(root: BinaryTree<number> | null, value: number) {
  if (!root) {
    return {
      left: null,
      right: null,
      value,
    };
  }

  if (!root.left && value < root.value) {
    root.insertLeft(value);
  }

  if (!root.right && value > root.value) {
    root.insertRight(value);
  }

  if (root.value > value) {
    bstInsertion(root?.left ?? null, value);
  }

  if (root.value < value) {
    bstInsertion(root?.right ?? null, value);
  }

  return root;
}
