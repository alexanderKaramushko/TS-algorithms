/**
 * @see {@link https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes}
 */
export function reachableVertices(amount: number, connections: number[][]) {
  const graph: Record<number, number[]> = {};
  const seen: Record<number, boolean> = {};

  for (let rowIndex = 0; rowIndex < amount; rowIndex++) {
    graph[rowIndex] = [];
  }

  for (const [x, y] of connections) {
    graph[y].push(x);
  }

  return Object.entries(graph)
    .reduce<number[]>((smallest, [key, neighbors]) => {
      if (!neighbors.length) {
        smallest.push(+key);
      }

      return smallest;
    }, []);
}
