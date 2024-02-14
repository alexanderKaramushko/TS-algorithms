/**
 * @see {@link https://leetcode.com/problems/valid-palindrome/description}
 */
export function palindrome(input: string) {
  let left = 0;
  let right = input.length - 1;

  while (left < right) {
    while (/[^А-Яа-я]/.test(input[left])) {
      left++;
    }

    while (/[^А-Яа-я]/.test(input[right])) {
      right--;
    }

    if (input[left].toLowerCase() === input[right].toLowerCase()) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
}
