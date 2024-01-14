/**
 * @description
 * Панграмма – тект, который содержит все или почти все буквы алфавита.
 * 
 * @see {@link https://leetcode.com/explore/featured/card/leetcodes-interview-crash-course-data-structures-and-algorithms/705/hashing/4601}
 * 
 * ACCEPTED.
 */
export function isPangram(sentence: string): boolean {
  const chars: Record<string, number> = {};

  for (let index = 97; index <= 122; index++) {
    chars[String.fromCharCode(index)] = 0;
  }

  for (const char of sentence) {
    chars[char] += 1;
  }

  return Object.values(chars).every((char) => char > 0);
}
