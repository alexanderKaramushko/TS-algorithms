function countStack(stack: number[]) {
  let count = 0;
  let ones = 0;
  let zeroes = 0;

  while (stack.length > 0) {
    const num = stack.pop();

    if (num === 1) {
      ones++;
    } else {
      zeroes++;
    }

    count = Math.min(ones, zeroes) * 2;
  }

  return count;
}

/**
 * @see {@link https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/description}
 */
export function balancedStr(str: string) {
  const stack: number[] = [];
  let maxSequence = 0;

  for (let index = str.length - 1; index >= 0; index--) {
    const num = +str[index];
    const prev = stack[stack.length - 1] ?? [];

    if (prev === 0 && num === 1) {
      maxSequence = Math.max(maxSequence, countStack(stack));
    }

    stack.push(num);
  }

  const prev = stack[stack.length - 1] ?? [];

  if (prev === 0) {
    maxSequence = Math.max(maxSequence, countStack(stack));
  }

  return maxSequence;
}

