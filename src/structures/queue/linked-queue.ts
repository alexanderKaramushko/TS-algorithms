import { ListNode, NodeModel } from "../linked";

/**
 * @description Реализация очереди на основе связного списка.
 */
export class LinkedQueue<T> {
  private _size = 0
  private front: NodeModel<T> | null = null
  private rear: NodeModel<T> | null = null

  enqueue(item: T) {
    this._size += 1;

    const node = new ListNode(item);

    if (this.rear === null) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  dequeue() {
    if (this.size() === 0) {
      throw new Error('Очередь пуста!');
    }

    this._size -= 1;

    const temp = this.front?.value;

    if (this.front === null) {
      this.rear = null;
    } else {
      this.front = this.front.next;
    }

    return temp;
  }

  peek() {
    return this.front?.value;
  }

  size() {
    return this._size;
  }
};