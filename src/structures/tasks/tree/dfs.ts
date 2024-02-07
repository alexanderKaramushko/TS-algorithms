import { BinaryTree } from "../../tree";

type Order = 'preorder' | 'inorder' | 'postorder';

/**
 * @description Обход бинарного дерева в глубину (depth-first-search)
 * 
 * @param {string} order
 * preorder – выполнение операции на узле до обхода потомков узла
 * inorder – выполнение операции на узле после окончания обхода по left
 * postorder – выполнение операции на узле после обхода потомков узла
 */
export function dfs(root: BinaryTree<number>, order: Order = 'preorder') {
  const values: (number | string)[] = [];

  function traverse(root: BinaryTree<number> | null) {
    if (!root) {
      return root;
    }

    if (order === 'preorder') {
      values.push(root.value);
    }

    traverse(root?.left ?? null);

    if (order === 'inorder') {
      values.push(root.value);
    }

    traverse(root?.right ?? null);

    if (order === 'postorder') {
      values.push(root.value);
    }
  }

  traverse(root);

  return values;
}
