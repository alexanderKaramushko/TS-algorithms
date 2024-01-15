/**
 * @see {@link https://leetcode.com/explore/featured/card/leetcodes-interview-crash-course-data-structures-and-algorithms/705/hashing/4661}
 * 
 * Временная сложность: O(n)
 * Пространственная сложность: O(n)
 * 
 * ACCEPTED.
 */
export function countElements(numbers: number[]): number {
  const set = new Set(numbers);
  let count = 0;

  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];

    if (set.has(number + 1)) {
      count++;
    }
  }

  return count;
}
