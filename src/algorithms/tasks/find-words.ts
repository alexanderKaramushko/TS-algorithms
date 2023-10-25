/**
 * @see {@link https://leetcode.com/problems/keyboard-row/}
 * 
 * ACCEPTED.
 */

function getRowIndex(symbol: string) {
  const row1 = 'qwertyuiop';
  const row2 = 'asdfghjkl';

  if (row1.indexOf(symbol) !== -1) {
    return 1
  }

  if (row2.indexOf(symbol) !== -1) {
    return 2
  }

  return 3
}

export function findWords(words: string[]): string[] {
  return words.filter((word) => {
    const wordsInRows = [...word].map((letter) => getRowIndex(letter.toLowerCase()));

    return new Set(wordsInRows).size === 1;
  });
};
