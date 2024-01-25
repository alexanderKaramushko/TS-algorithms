/**
 * @description Стек, поддерживающий получение минимального элемента за O(1).
 * 
 * Реализован на основе второго стека на структуре данных массива,
 * сохраняющего только наименьшие вхождения.
 */
export class MinStack<T> {
  constructor(
    private items: T[] = [],
    private min: T[] = [],
  ) { }

  push(item: T) {
    if (this.min.length === 0) {
      this.min.push(item);
    } else if (item <= this.min[this.min.length - 1]) {
      this.min.push(item);
    } else {
      this.min.push(this.min[this.min.length - 1]);
    }

    this.items.push(item);
  }

  pop() {
    this.min.pop();
    return this.items.pop();
  }

  peek() {
    return this.items.at(this.items.length - 1);
  }

  size() {
    return this.items.length;
  }

  getMin() {
    return this.min[this.min.length - 1];
  }
}