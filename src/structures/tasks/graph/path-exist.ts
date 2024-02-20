/**
 * @see {@link https://leetcode.com/problems/find-if-path-exists-in-graph}
 */
export function pathExist(amount: number, edges: number[][], source: number, destination: number) {
  if (edges.length === 0) {
    return true
  }

  const graph: Record<number, number[]> = [];
  const seen: boolean[] = [];

  for (let index = 0; index < amount; index++) {
    graph[index] = [];
  }

  for (const [x, y] of edges) {
    graph[x].push(y);
    graph[y].push(x);
  }

  function dfs(node: number) {
    if (node === destination) {
      return true;
    }

    for (const neighbor of graph[node]) {
      if (!seen[neighbor]) {
        seen[neighbor] = true;

        if (dfs(neighbor)) {
          return true;
        }
      }
    }

    return false;
  }

  // seen[source] = true;
  return dfs(source);
}
