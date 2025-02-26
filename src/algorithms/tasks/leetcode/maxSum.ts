/**
 * @description Есть массив из положительных чисел. Найти непрерывный подмассив с максимальной суммой,
 * в котором не более двух различных элементов. Вернуть сумму его элементов.
 */
export function maxSum(nums: number[]) {
  let max = 0;
  let temp = 0;

  let set = new Set();
  let k = -1;

  for (let index = 0; index < nums.length; index++) {
    set.add(nums[index]);

    if (set.size === 3) {
      set.delete(nums[k + 1]);
      temp = temp - (k === -1 ? 0 : nums[k]);
      max = Math.max(max, temp);
      k++;
    }
  
    temp += nums[index];
  }

  max = Math.max(max, temp - (k === -1 ? 0 : nums[k]));

  return max;
}
