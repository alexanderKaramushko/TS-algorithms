
/**
 * @param n кол-во каменй в первом наборе
 * @param n кол-во каменй во втором наборе
 * 
 * @description Создать матрицу, например, 10x10
 * L (Lose) или W (Win) каждого хода вычисляется на основании
 * ячеек (x - 1, y), (x - 1, y - 1), (x, y - 1)
 * 
 * Если в каком-либо из следующих ходов имеется L, то значит ход может быть выигрышным.
 * 
 * @returns {string} L или W
 */

type Field = Array<Array<string>>;

export function slowerStones(n: number, m: number): string {
  const matrix: Field = new Array(n + 1).fill(null).map(() => new Array(m + 1).fill(null));

  matrix[0][0] = 'L';

  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    const row = matrix[rowIndex];
    const previousRow = matrix[rowIndex - 1] ?? [];

    for (let cellIndex = rowIndex === 0 ? 1 : 0; cellIndex < row.length; cellIndex++) {
      const previousXCell = row[cellIndex - 1] ?? 'W';
      const previousYCell = previousRow[cellIndex] ?? 'W';
      const previousXYCell = previousRow[cellIndex - 1] ?? 'W';

      if ([previousXCell, previousYCell, previousXYCell].includes('L')) {
        row[cellIndex] = 'W';
      } else {
        row[cellIndex] = 'L';
      }
    }
  }

  return matrix[n][m];
}
