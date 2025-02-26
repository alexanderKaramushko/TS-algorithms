/**
 * @description Дан массив натуральных чисел. Требуется проверить, 
 * можно ли в нём выбрать четыре различных элемента x, y, z, w так, чтобы x + y = z + w.
 */
export function twoSums(nums: number[]) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j === i) {
        continue;
      }
      
      map.set(nums[i] + nums[j], new Set([...(map.get(nums[i] + nums[j]) ?? []), i, j]));

      if (map.get(nums[i] + nums[j])?.size === 4) {
        return [...map.get(nums[i] + nums[j])];
      }
    }    
  }

  return null;
}
