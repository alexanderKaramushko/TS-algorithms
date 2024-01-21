import { BinaryTree } from "../../tree";

/**
 * @see {@link https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description}
 * @see {@link https://en.wikipedia.org/wiki/Lowest_common_ancestor}
 *
 * @description
 * 
 * Если left и right не равны null, то возвратить узел, на котором это произошло как ответ.
 * Если left равен null, а right нет, то значит возвратить как ответ right, так как он содержит следующий искомый узел.
 * Если right равен null, а left нет, то значит возвратить как ответ left, так как он содержит следующий искомый узел.
 */
export function lca(root: BinaryTree<number> | null, p: BinaryTree<number>, q: BinaryTree<number>): number | null {
  if (!root) {
    return null;
  }

  if (root.value === p.value || root.value === q.value) {
    return root.value;
  }

  const left = lca(root.left, p, q);
  const right = lca(root.right, p, q);

  if (left !== null && right !== null) {
    return root.value;
  }

  if (left !== null) {
    return left;
  }

  return right;
}
