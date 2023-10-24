/**
 * @see {@link https://leetcode.com/problems/group-anagrams/}
 */

export function groupAnagrams(strs: string[]): string[][] {
  const words: Record<string, string[]> = {}

  for (const str of strs) {
    const sorted = str.split('').sort().join('');

    if (!words[sorted]) {
      words[sorted] = [];
    }

    words[sorted].push(str);
  }

  return Object.values(words);
};
