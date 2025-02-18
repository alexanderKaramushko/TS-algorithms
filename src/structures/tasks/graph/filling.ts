/**
 * @description
 * Дано изображение, каждый пиксель раскрашен каким-то цветом,
 * обозначенным натуральным числом.
 * 
 * Необходимо посчитать, сколько заливок (как в Paint) придется сделать,
 * чтобы полностью раскрасить картинку в новый цвет.
 * 
 * 1. Идти циклом m x n по всем элементам
 * 2. На каждой итерации запустить dfs
 * 3. dfs запоминает текущий цвет и рекурсивно идет в цикле от текущей вершины по directions
 * 4. Если произошел выход за границы матрицы или в текущей вершине новый цвет, то выйти
 * 5. После завершения цикла по направлениям сделать инкремент кол-во заливок
 */
export function filling(items: number[][]) {
  const rowsLength = items.length;
  const colsLength = items[0].length;
  const seen: Array<boolean[]> = [];

  let fills = 0;

  for (let index = 0; index < rowsLength; index++) {
    seen.push(new Array(colsLength).fill(false));
  }

  for (let rowIndex = 0; rowIndex < rowsLength; rowIndex++) {
    for (let colIndex = 0; colIndex < colsLength; colIndex++) {
      if (!seen[rowIndex][colIndex]) {
        fills++;
        seen[rowIndex][colIndex] = true;
        dfs(rowIndex, colIndex);
      }
    }    
  }

  function isValid(row: number, col: number, currentColor: number) {
    return row >= 0 && row < rowsLength && col >= 0 && col < colsLength && items[row][col] === currentColor;
  }

  function dfs(row: number, col: number) {
    const directions = [[0, -1], [0, 1], [1, 0], [-1, 0]];

    for (const [y, x] of directions) {
      const nextRow = row + y;
      const nextCol = col + x;

      if (isValid(nextRow, nextCol, items[row][col]) && !seen[nextRow][nextCol]) {
        seen[nextRow][nextCol] = true;
        dfs(nextRow, nextCol)
      }
    }
  }

  return fills;
}
