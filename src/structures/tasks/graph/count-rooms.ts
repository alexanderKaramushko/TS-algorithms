/**
 * @see {@link https://leetcode.com/problems/keys-and-rooms/description}
 */
export function countRooms(rooms: number[][]) {
  const seen: Record<number, boolean> = {
    0: true
  };

  let count = 1;

  function dfs(node: number) {
    for (const neighbor of rooms[node]) {
      if (!seen[neighbor]) {
        seen[neighbor] = true;
        count++;
        dfs(neighbor);
      }
    }
  }

  dfs(0);

  return rooms.length === count;
}
