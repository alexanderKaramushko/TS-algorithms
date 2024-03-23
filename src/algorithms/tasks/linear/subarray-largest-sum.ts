/**
 * @description Fixed sliding window.
 * 
 * Создать curr.
 * Записать в curr сумму первых k-элементов.
 * Запустить проход по элементам, начиная с k.
 * Прибавить к curr текущий nums[i] с вычетом nums[i - k], то есть вычесть элемент вне k-окна.
 */
export function subarrayLargestSum(nums: number[], k: number) {
  let curr = 0;

  for (let index = 0; index < k; index++) {
    curr += nums[index];
  }

  let ans = curr;

  for (let index = k; index < nums.length; index++) {
    curr += nums[index] - nums[index - k];

    ans = Math.max(ans, curr);
  }

  return ans;
}
