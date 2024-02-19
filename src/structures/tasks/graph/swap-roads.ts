/**
 * @see {@link https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/description}
 * 
 * 1. Преобразовать ориентрированный граф в неориентированный, чтобы дойти из 0 до каждого узла
 * 
 */
export function swapRoads(amount: number, connections: number[][]) {
  const seen: Array<boolean> = [];
  const graph: Record<number, number[]> = [];
  const roads = new Set<string>();

  for (let rowIndex = 0; rowIndex < amount; rowIndex++) {
    graph[rowIndex] = [];
  }

  for (const [x, y] of connections) {
    graph[x].push(y);
    graph[y].push(x);
    roads.add(`${x},${y}`);
  }

  seen[0] = true;

  function dfs(node: number): number {
    let swapped = 0;

    for (const neighbor of graph[node]) {
      if (!seen[neighbor]) {
        if (roads.has(`${node},${neighbor}`)) {
          swapped++;
        }

        seen[neighbor] = true;
        swapped += dfs(neighbor);
      }
    }

    return 0;
  }

  return dfs(0);
}
