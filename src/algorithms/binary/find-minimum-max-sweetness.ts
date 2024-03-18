function canCut(sweetness: number[], min: number, k: number) {
  let kLeft = k;
  let sum = 0;

  for (let index = 0; index < sweetness.length; index++) {
    if (sum >= min) {
      kLeft -= 1;
      sum = 0;
    }

    sum += sweetness[index];
  }

  if (sum >= min) {
    kLeft -= 1;
  }

  return kLeft <= 0;
}

/**
 * @see {@link https://leetcode.com/problems/divide-chocolate/description}
 * 
 * left является минимальным возможным значением, по которому можно разбить порции каждому.
 * right является максимальным возможным значением, по которому можно разбить порции каждому.
 * 
 * Следовательно цель алгоритма заключается в проверке возможности разделения порций через
 * left.
 * 
 * Если порцию можно разделить через left, то можно попробовать разделить порцию через right,
 * чтобы найти более большое минимальное значение.
 */
export function findMinimumMaxSweetness(sweetness: number[], k: number): number {
  const totalPeople = k + 1;

  let left = Math.min(...sweetness);
  let right = sweetness.reduce((acc, num) => acc += num, 0) / totalPeople;

  while (left < right) {
    let mid = Math.floor((left + right + 1) / 2);

    if (canCut(sweetness, mid, totalPeople)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return left;
}