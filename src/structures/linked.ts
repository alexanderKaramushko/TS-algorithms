type NodeModel<T> = {
  value: T;
  next: NodeModel<T> | null
}

export class ListNode<T> implements NodeModel<T> {
  constructor(
    public value: T,
    public next: NodeModel<T> | null = null
  ) { }
}

type List<T> = {
  head: NodeModel<T> | null
  current: NodeModel<T> | null
  getValues: () => T[]
}

export class LinkedList<T> implements List<T> {
  head: NodeModel<T> | null = null
  current: NodeModel<T> | null = null

  public append(value: T) {
    if (!this.head) {
      this.head = new ListNode(value) as NodeModel<T>;
      this.current = new ListNode(value);

      return this.current;
    }

    this.current = this.head;

    while (this.current.next) {
      this.current = this.current.next;
    }

    this.current.next = new ListNode(value);

    return this.current.next;
  }

  public setNext(listNode: NodeModel<T>, next: NodeModel<T>) {
    if (!this.head) {
      this.head = listNode;
    }

    this.current = this.head;

    while (this.current) {
      if (this.current === listNode) {
        this.current.next = next;
        break;
      }

      this.current = this.current.next;
    }
  }

  getValues() {
    const values = [];
    let current = this.head;

    while (current?.next !== null) {
      current = current?.next ?? null
      values.push(current?.value);
    }

    return values as T[];
  }
}
