export class Stack<T> {
  constructor(private items: T[] = []) { }

  push(item: T) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items.at(this.items.length - 1);
  }

  size() {
    return this.items.length;
  }
}