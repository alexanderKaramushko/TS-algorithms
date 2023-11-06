/**
 * @see {@link http://ulivt.ru:8082/ru/problem-pid-c51a}
 * 
 * Найти комбинации для 1
 * 1 2 3 4
 * Найти комибанции для 2
 * 1 3 2 4
 * 1 3 4 2
 * Найти комбинации для 3
 * 1 2 4 3
 * Найти комбинации для 4
 * 1 2 4 3
 * 1 4 2 3
 * 
 * ACCEPTED.
 */
export function combinations(input: number | number[], fixed: number[] = []) {
  const array = typeof input === 'number'
    ? new Array(input).fill(null).map((item, index) => index + 1)
    : input;

  if (array.length === 1) {
    console.log(`${fixed.join(' ')} ${input}`);
    fixed.pop();
    return;
  }

  let tmpArr = [...array];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    fixed.push(element);
    tmpArr.splice(index, 1);

    combinations(tmpArr, fixed);

    tmpArr = [...array];
  }

  fixed.pop();
}
