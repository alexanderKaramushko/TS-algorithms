/**
 * @description Шаблон бинарного поиска
 */
export function binary(arr: number[], target: number) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

/**
 * @description Поиск крайнего левого индекса при дубликатах
 */
export function binaryLeft(arr: number[], target: number) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

/**
 * @description Поиск крайнего правого индекса при дубликатах
 */
export function binaryRight(arr: number[], target: number) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

