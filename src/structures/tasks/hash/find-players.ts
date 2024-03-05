/**
 * @see {@link https://leetcode.com/problems/find-players-with-zero-or-one-losses/}
 */
export function findPlayers(matches: number[][]): number[][] {
  const hash: Record<number, number[]> = {}

  for (let index = 0; index < matches.length; index++) {
    const [win, lose] = matches[index];

    if (!hash[win]) {
      hash[win] = [0, 0];
    }

    if (!hash[lose]) {
      hash[lose] = [0, 0];
    }

    hash[win][0]++;
    hash[lose][1]++;
  }

  return Object.entries(hash).reduce<number[][]>((ans, [player, [, loses]]) => {
    if (loses === 0) {
      ans[0].push(+player);
    }

    if (loses === 1) {
      ans[1].push(+player);
    }

    return ans;
  }, [[], []])
}
