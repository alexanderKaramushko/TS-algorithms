/**
 * @see {@link https://leetcode.com/problems/number-of-ways-to-split-array/description}
 */
export function splitArrayVariants(nums: number[]) {
  const prefixSum = [nums[0]];

  for (let index = 1; index < nums.length; index++) {
    prefixSum.push(prefixSum[index - 1] + nums[index]);
  }

  let ans = 0;

  for (let index = 1; index < prefixSum.length; index++) {
    const rightSum = prefixSum[prefixSum.length - 1] - prefixSum[index === 0 ? 0 : index - 1];

    if (prefixSum[index - 1] >= rightSum) {
      ans++;
    }
  }

  return ans;
}
