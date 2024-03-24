/**
 * @see {@link https://leetcode.com/problems/longest-increasing-subsequence/description}
 * 
 * @description
 * 
 * 1. Запустить цикл по nums.
 * 2. Запустить цикл на отрезке [0, i].
 * 3. Если nums[i] > nums[j], то выбрать максимумальную
 *    длину подпоследовательности: либо длина текущего dp[i],
 *    либо длина подпоследовательности dp[j] + 1 (текущая позиция).
 */
export function longestSubsequence(nums: number[]) {
  let dp = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}
