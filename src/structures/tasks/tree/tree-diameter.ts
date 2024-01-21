import { BinaryTreeNode } from "../../tree";

/**
 * @see {@link https://leetcode.com/problems/diameter-of-binary-tree/description}
 *
 *
 * @description Диаметр двоичного дерева — это длина самого длинного пути между любыми двумя узлами дерева.
 * Этот путь может проходить через корень, а может и не проходить.
 * 
 * Длина пути между двумя узлами представлена ​​количеством ребер между ними.
 */
export function treeDiameter(root: BinaryTreeNode<number> | null): number {
  let diameter = 0;

  function traverse(root: BinaryTreeNode<number> | null): number {
    if (!root) {
      return 0;
    }

    const left = traverse(root.left);
    const right = traverse(root.right);

    diameter = Math.max(diameter, left + right);

    return Math.max(left, right) + 1;
  }

  traverse(root);

  return diameter;
}
