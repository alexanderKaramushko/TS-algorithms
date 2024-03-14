/**
 * @see {@link https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold}
 */
export function smallestDivisor(nums: number[], threshold: number) {
  let left = 0;
  let right = 10 ** 6;
  let ans = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sum = 0;

    for (const num of nums) {
      sum += Math.ceil(num / mid);
    }

    // Если сумма меньше чем threshold, то тогда нет
    // смысла смотреть делители больше, так как при увеличении делителя она будет еще меньше
    // обрезаем right
    if (sum <= threshold) {
      ans = mid
      right = mid - 1;
    } else {
      // Если сумма больше чем threshold, то тогда нет
      // смысла смотреть делители меньше, так как при уменьшении делителя она будет еще больше
      // обрезаем left
      left = mid + 1;
    }
  }

  return ans;
}
