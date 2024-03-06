function binary(arr: number[], target: number) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

/**
 * @see {@link https://leetcode.com/problems/longest-subsequence-with-limited-sum/description}
 */
export function longestSubsequence(nums: number[], queries: number[]): number[] {
  nums.sort((a, b) => a - b);

  const prefixSum: number[] = [];

  prefixSum[0] = nums[0];

  for (let index = 1; index < nums.length; index++) {
    prefixSum[index] = prefixSum[index - 1] + nums[index];
  }

  const ans = [];

  for (let index = 0; index < queries.length; index++) {
    const query = queries[index];

    ans.push(binary(prefixSum, query));
  }

  return ans;
}
