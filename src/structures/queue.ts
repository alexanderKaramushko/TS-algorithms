export class Queue<T> {
  constructor(private items: T[]) { }

  enqueue(item: T) {
    this.items = [item, ...this.items];
  }

  dequeue() {
    const last = this.items.pop();

    return last;
  }

  peek() {
    return this.items.at(this.items.length - 1);
  }

  size() {
    return this.items.length;
  }
};