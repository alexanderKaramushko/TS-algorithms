import { LinkedQueue } from "../../queue/linked-queue";
import { BinaryTree } from "../../tree";

/**
 * @description Обход бинарного дерева в ширину (breadth-first-search)
 */
export function bfs(root: BinaryTree<number>) {
  const values: number[] = [];
  const queue = new LinkedQueue<BinaryTree<number>>();

  queue.enqueue(root);

  while (queue.size() > 0) {
    const node = queue.peek() as BinaryTree<number>;

    values.push(node.value);

    if (node.left) {
      queue.enqueue(node.left);
    }

    if (node.right) {
      queue.enqueue(node.right);
    }

    queue.dequeue();
  }

  return values;
}
