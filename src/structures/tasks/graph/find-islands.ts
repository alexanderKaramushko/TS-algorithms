type Island = "1"
type Water = "0"

/**
 * @see {@link https://leetcode.com/problems/number-of-islands/description}
 * 
 * 1. Создать 2D массив seen для записи посещенных узлов,
 *    например, [[true, true, false], [true, false, true]]
 *
 * 2. Найти всех соседей каждого узла в каждом ряду, занести их в seen
 */
export function findIslands(items: Array<(Island | Water)[]>) {
  const rowsLength = items.length;
  const colsLength = items[0].length;
  const seen: Array<boolean[]> = [];
  let islands = 0;

  for (let index = 0; index < rowsLength; index++) {
    seen.push(new Array(colsLength).fill(false));
  }

  for (let rowIndex = 0; rowIndex < rowsLength; rowIndex++) {
    for (let colIndex = 0; colIndex < colsLength; colIndex++) {
      if (items[rowIndex][colIndex] === "1" && !seen[rowIndex][colIndex]) {
        islands++;
        seen[rowIndex][colIndex] = true;
        dfs(rowIndex, colIndex);
      }
    }
  }

  function isValid(row: number, col: number) {
    return row >= 0 && row < rowsLength && col >= 0 && col < colsLength && items[row][col] === "1";
  }


  function dfs(row: number, col: number) {
    const directions = [[0, -1], [0, 1], [1, 0], [-1, 0]];

    for (const [y, x] of directions) {
      const nextRow = row + y;
      const nextCol = col + x;

      if (isValid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
        seen[nextRow][nextCol] = true;
        dfs(nextRow, nextCol)
      }
    }
  }

  return islands;
}
