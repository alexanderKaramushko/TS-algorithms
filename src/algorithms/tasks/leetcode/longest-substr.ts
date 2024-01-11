/**
 * @see {@link https://leetcode.com/problems/longest-substring-without-repeating-characters/}
 * 
 * Асимптотическая сложность: Лучшая O(n), худшая O(n).
 * 
 * Алгоритм "скользящее окно".
 * 
 * Создать хэш-таблицу, чтобы определить самую длинную подстроку без повторений.
 * Объявить end и start указатели.
 * Сдвигать end пока нет повторений, увеличивая count.
 * Если появилось повторение, то создать цикл по хэш-таблице, убирая повторения с уменьшением count.
 * Если start достиг end , то выйти из цикла по хэш-таблице.
 * Присвоить count в max, если count > max.
 * 
 * ACCEPTED.
 */
export function longestSubstr(s: string) {
  let start = 0;
  let count = 0;
  let max = 0;

  const sequence: Record<string, number> = {};

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    sequence[char] = (sequence[char] ?? 0) + 1;
    count++;

    while ((sequence[char] ?? 0) > 1 && start < end) {
      count--;

      sequence[s[start]] = (sequence[s[start]] ?? 0) - 1;

      start++;
    }

    if (count > max) {
      max = count;
    }
  }

  return max;
}

// abacqcdabcbb
