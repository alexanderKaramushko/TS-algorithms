export function maxUsers(users: number[][]) {
  const in_out: number[][] = [];

  for (let index = 0; index < users.length; index++) {
    in_out.push([users[index][0], 1]);
    in_out.push([users[index][1], -1]);
  }

  in_out.sort(([a], [b]) => a - b);

  let max = 0;
  let tmp = 0;

  for (const [, out] of in_out) {
    tmp += out;
    max = Math.max(max, tmp);
  }

  return max;
}
