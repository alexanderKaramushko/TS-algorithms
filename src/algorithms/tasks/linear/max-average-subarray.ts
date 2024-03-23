/**
 * @see {@link https://leetcode.com/problems/maximum-average-subarray-i/description}
 *
 *
 * @description
 */
export function maxAverageSubarray(nums: number[], k: number) {
  if (nums.length === 1) {
    return nums[0];
  }

  let curr = 0;

  for (let index = 0; index < k; index++) {
    curr += nums[index];
  }

  let ans = curr / k;
  let avg = curr / k;

  for (let index = k; index < nums.length; index++) {
    curr += (nums[index] - nums[index - k]);
    avg = curr / k;

    ans = Math.max(ans, avg);
  }

  return ans;
}
