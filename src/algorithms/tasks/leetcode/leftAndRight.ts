/**
 * @description Найти индекс крайнего левого и крайнего правого числа в массиве
 * @example leftAndRight([1, 2, 2, 3, 3, 3, 4, 4, 5], 3) -> [2, 4]
 */
export function leftAndRight(nums: number[], num: number) {
  return [binarySearchLeft(nums, num), binarySearchRight(nums, num)];
}

function binarySearchLeft(nums: number[], num: number) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] >= num) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function binarySearchRight(nums: number[], num: number) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > num) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left - 1;
}
