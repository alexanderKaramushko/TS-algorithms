/**
 * @see {@link https://leetcode.com/explore/featured/card/leetcodes-interview-crash-course-data-structures-and-algorithms/705/hashing/4602}
 * 
 * 
 */
export function missingNumber(numbers: number[]): number | null {
  const set = new Set(numbers);
  let missing = null;

  for (let index = 0; index <= numbers.length; index++) {
    if (!set.has(index)) {
      missing = index;
      break;
    }
  }

  return missing;
}