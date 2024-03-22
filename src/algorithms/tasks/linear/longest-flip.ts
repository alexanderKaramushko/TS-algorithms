/**
 * @description Sliding window.
 * 
 * Объявить left, flips, position.
 * Начать итерации по str.
 * Если 0, то записать flips++.
 * Если flips > 1, то сдвинуть position до index.
 */
export function longestFlip(str: string) {
  let left = 0;
  let curr = 0;
  let ans = 0;

  for (let right = 0; right < str.length; right++) {
    if (str[right] === '0') {
      curr++;
    }

    while (curr > 1) {
      if (str[left] === '0') {
        curr--;
      }
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}
