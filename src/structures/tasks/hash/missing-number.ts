/**
 * @see {@link https://leetcode.com/explore/featured/card/leetcodes-interview-crash-course-data-structures-and-algorithms/705/hashing/4602}
 * 
 * ACCEPTED.
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

/**
 * @see {@link https://leetcode.com/explore/featured/card/leetcodes-interview-crash-course-data-structures-and-algorithms/705/hashing/4602}
 * 
 * Особенности порбитового XOR-оператора.
 * 
 * x ^ x = 0
 * 0 ^ x = x
 * y ^ x = x ^ y
 * 
 * @example
 * 
 * [1, 2, 3] expectedXOR = 1 ^ 2 ^ 3 = 01h ^ 10h ^ 11h = 11h ^ 11h = 00
 * [3, 0, 1] actualXOR = 3 ^ 0 ^ 1 = 11h ^ 00h ^ 01h = 11 ^ 01 = 10
 * actualXOR ^ expectedXOR = 10 ^ 00 = 10h = 2 (2 не найден в expectedXOR)
 */
export function missingNumberXOR(numbers: number[]): number | null {
  let expectedXOR = 0;

  for (let index = 0; index <= numbers.length; index++) {
    expectedXOR = expectedXOR ^ index;
  }

  let actualXOR = 0;

  for (let index = 0; index < numbers.length; index++) {
    actualXOR = actualXOR ^ numbers[index];
  }

  return actualXOR ^ expectedXOR;
}
