/**
 * @see {@link https://leetcode.com/problems/subarray-product-less-than-k}
 */
export function validProduct(nums: number[], k: number) {
  if (k <= 1) {
    return 0;
  }

  let left = 0;
  let curr = 1;
  let ans = 0;

  for (let right = 0; right < nums.length; right++) {
    curr *= nums[right];

    while (curr >= k) {
      curr /= nums[left];
      left++;
    }

    ans += right - left + 1;
  }

  return ans;
}
