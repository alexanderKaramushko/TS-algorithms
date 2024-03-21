/**
 * @see {@link https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string}
 */
export function balancedStr(str: string) {
  const prefixSum: number[] = [];

  for (let index = 0; index < str.length; index++) {
    const num = +str[index] === 0 ? -1 : 1;

    prefixSum.push((prefixSum[prefixSum.length - 1] ?? 0) + num);
  }

  const hash: Record<number, number> = {};

  let maxSequence = 0;

  for (let index = 0; index < prefixSum.length; index++) {
    const num = prefixSum[index];

    if (num === 0 && !Reflect.has(hash, num)) {
      maxSequence = Math.max(maxSequence, index + 1);
      hash[num] = index;
      continue;
    }

    if (Reflect.has(hash, num)) {
      maxSequence = Math.max(maxSequence, index - hash[num]);
    } else {
      hash[num] = index;
    }
  }

  return maxSequence;
}