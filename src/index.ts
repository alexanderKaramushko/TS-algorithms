// Файл для дебаггинга

import { bfs } from "./structures/tasks/tree/bfs";
import { BinaryTree } from "./structures/tree";

const tree = new BinaryTree(1);

tree.insertLeft(2);

tree.insertRight(3);
tree.right?.insertLeft(7);
tree.right?.insertRight(8);
tree.right?.insertRight(9);

console.log(bfs(tree))