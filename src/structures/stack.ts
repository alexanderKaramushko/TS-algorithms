export class Stack<T> {
  constructor(private items: T[]) { }

  push(item: T) {
    this.items.push(item);
  }

  pop() {
    const last = this.items.pop();

    return last;
  }

  peek() {
    return this.items.at(this.items.length - 1);
  }

  size() {
    return this.items.length;
  }
}