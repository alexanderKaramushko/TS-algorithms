import { LinkedList } from "../../linked";

/**
 * @see {@link https://leetcode.com/problems/palindrome-linked-list}
 */
export function isPalindrome(linkedList: LinkedList<number>) {
  let str = '';
  let node = linkedList.head;

  while (node) {
    str += node.value;
    node = node.next;
  }

  return str === str.split('').reverse().join('');
}
