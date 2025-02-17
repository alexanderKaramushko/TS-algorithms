export function minMax(k: number, nums: number[]) {
  const _nums = [...nums].sort((a, b) => a - b);

  return _nums.reduce((minMax, num, index, arr) => {
    if ((index + 1) % k !== 0 && index !== arr.length - 1) {
      return minMax;
    }

    const differ = num - arr[index - (k - 1)];

    if (differ < minMax) {
      return differ;
    }

    return minMax;
  }, Infinity);
}
