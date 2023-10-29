import { read } from '../../../utils/read';

/**
 * @see {@link https://acmp.ru/?main=task&id_task=496}
 */
export function collect() {
  read((arg: string) => {
    let max = -Infinity;
    const [, ...berries] = arg.split(' ');

    for (let index = 0; index < berries.length; index++) {
      const leftBerry = berries[index - 1] ?? 0;
      const currentBerry = berries[index];
      const rightBerry = berries[index + 1] ?? 0;

      const sum = +leftBerry + +currentBerry + +rightBerry;

      if (sum > max) {
        max = sum;
      }
    }

    return max;
  });
}
