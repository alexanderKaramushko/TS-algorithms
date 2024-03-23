/**
 * @description
 */
export function queriesSum(nums: number[], queries: number[][], limit: number) {
  const prefixSum = [nums[0]];

  for (let index = 1; index < nums.length; index++) {
    prefixSum.push(prefixSum[index - 1] + nums[index]);
  }

  const ans: boolean[] = [];

  for (let index = 0; index < queries.length; index++) {
    const [left, right] = queries[index];

    ans.push(prefixSum[right] - (prefixSum[left - 1] ?? 0) < limit)
  }

  return ans;
}
