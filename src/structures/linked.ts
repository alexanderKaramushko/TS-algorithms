type NodeModel<T> = {
  data: T;
  next: NodeModel<T> | null
}

class Item<T> implements NodeModel<T> {
  constructor(
    public data: T,
    public next: NodeModel<T> | null = null
  ) { }
}

type List<T> = {
  head: NodeModel<T> | null
  current: NodeModel<T> | null
  toString: () => T[]
}

export class LinkedList<T> implements List<T> {
  head: NodeModel<T> | null = null
  current: NodeModel<T> | null = null

  public append(value: T) {
    if (!this.head) {
      this.head = new Item(value) as NodeModel<T>;
    }

    this.current = this.head;

    while (this.current.next) {
      this.current = this.current.next;
    }

    this.current.next = new Item(value);
  }

  toString() {
    const values = [];
    let current = this.head;

    while (current?.next !== null) {
      current = current?.next ?? null
      values.push(current?.data);
    }

    return values as T[];
  }
}
