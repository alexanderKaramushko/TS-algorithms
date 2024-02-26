import { binary } from "./binary";

/**
 * @see {@link https://leetcode.com/problems/search-a-2d-matrix/description}
 */
export function searchMatrix(matrix: number[][], target: number) {
  let left = 0;
  let right = matrix.length * matrix[0].length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let row = Math.floor(mid / matrix[0].length);
    let col = mid % matrix[0].length;
    let num = matrix[row][col];

    if (num == target) {
      return true;
    }

    if (num < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

