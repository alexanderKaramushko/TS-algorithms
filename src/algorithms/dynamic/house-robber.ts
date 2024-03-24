/**
 * @see {@link https://leetcode.com/problems/house-robber/description}
 *
 * @description
 */
export function houseRobber(nums: number[]) {
  const results: Record<number, number> = {};

  function dp(index: number) {
    if (index === 0) {
      return nums[index];
    }

    if (index == 1) {
      return Math.max(nums[0], nums[1]);
    }

    if (Reflect.has(results, index)) {
      return Reflect.get(results, index);
    }

    const first = dp(index - 1);
    const second = dp(index - 2) + nums[index];

    results[index] = Math.max(first, second);

    return results[index];
  }

  if (nums.length == 1) {
    return nums[0];
  }

  return dp(nums.length - 1);
}
