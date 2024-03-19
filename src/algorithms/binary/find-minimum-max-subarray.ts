function findSplitsForMaxSumAllowed(nums: number[], maxSumAllowed: number) {
  let sum = 0;
  let splits = 0;

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    if (sum + element <= maxSumAllowed) {
      sum += element;
    } else {
      sum = element;
      splits += 1;
    }
  }

  return splits + 1;
}

/**
 * @see {@link https://leetcode.com/problems/split-array-largest-sum/description}
 */
export function findMinimumMaxSubarray(nums: number[], k: number) {
  let sum = nums.reduce((acc, num) => acc + num, 0);
  let maxElement = Math.max(...nums);

  let left = maxElement;
  let right = sum;

  let minimumLargestSplitSum = 0;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (findSplitsForMaxSumAllowed(nums, mid) <= k) {
      right = mid - 1;
      minimumLargestSplitSum = mid;
    } else {
      left = mid + 1;
    }
  }

  return minimumLargestSplitSum;
}
