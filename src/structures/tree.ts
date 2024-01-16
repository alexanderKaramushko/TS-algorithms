export type BinaryTreeNode<T> = {
  value: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;
}

export class BinaryTree<T> implements BinaryTreeNode<T> {
  constructor(
    public value: T,
    public left: BinaryTree<T> | null = null,
    public right: BinaryTree<T> | null = null,
  ) { }

  insertLeft(value: T) {
    if (this.left) {
      const tree = new BinaryTree(value);
      tree.left = this.left;

      this.left = tree;
    } else {
      this.left = new BinaryTree(value);
    }
  }

  insertRight(value: T) {
    if (this.right) {
      const tree = new BinaryTree(value);
      tree.right = this.right;

      this.right = tree;
    } else {
      this.right = new BinaryTree(value);
    }
  }
}