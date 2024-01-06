export class Deque<T> {
  constructor(private items: T[] = []) { }

  enqueueFirst(item: T) {
    this.items = [item, ...this.items];
  }

  enqueueLast(item: T) {
    this.items.push(item);
  }

  dequeueFirst() {
    const last = this.items.shift();

    return last;
  }

  dequeueLast() {
    const last = this.items.pop();

    return last;
  }

  peekFirst() {
    return this.items[0];
  }

  peekLast() {
    return this.items.at(this.items.length - 1);
  }

  size() {
    return this.items.length;
  }
}