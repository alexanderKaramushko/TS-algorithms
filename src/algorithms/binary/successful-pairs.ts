/**
 * @see {@link https://leetcode.com/problems/successful-pairs-of-spells-and-potions}
 */
export function successfulPairs(spells: number[], potions: number[], success: number): number[] {
  potions.sort((a, b) => a - b);

  function binary(arr: number[], target: number) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] >= target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }

  const ans = [];

  for (let index = 0; index < spells.length; index++) {
    const spell = spells[index];
    const leastSuccessful = success / spell;
    const insertionPoint = binary(potions, leastSuccessful);

    ans.push(potions.length - insertionPoint);
  }

  return ans;
}
