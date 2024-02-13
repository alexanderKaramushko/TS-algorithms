/**
 * @see {@link https://leetcode.com/problems/number-of-provinces/description}
 * 
 * Формат входных данных: матрица смежности,
 * то есть matrix[i][j] = matrix[j][i] = 1
 * 
 * Каждый узел имеет значение i.
 */
export function graphDfs(matrix: number[][]) {
  let n = matrix.length;
  let graph: Record<number, number[]> = {};

  // Создание хэш-таблицы типа ключ: массив соседей
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  // Наполнение хэш-таблицы путем добавления в массив соседей пересекаемых узлов
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (matrix[i][j]) {
        graph[i].push(j);
        graph[j].push(i);
      }
    }
  }

  let seen = new Array(n).fill(false);
  let ans = 0;

  // Подсчет количества связных(досягаемых) узлов
  // путем рекурсивного обхода соседей и установки seen, для избежания повторения
  // и зацикленности
  for (let i = 0; i < n; i++) {
    if (!seen[i]) {
      ans++;
      seen[i] = true;
      dfs(i);
    }
  }

  function dfs(node: number) {
    for (const neighbor of graph[node]) {
      if (!seen[neighbor]) {
        seen[neighbor] = true;
        dfs(neighbor);
      }
    }
  }

  return ans;
}
