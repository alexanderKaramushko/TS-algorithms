/**
 * @see {@link http://ulivt.ru:8082/ru/problem-pid-c518}
 * 
 */
export function matches(input: number | number[], length: number, fixed: number[] = []) {
  const array = typeof input === 'number'
    ? new Array(input).fill(null).map((item, index) => index + 1)
    : input;

  if (fixed.length === length) {
    console.log(fixed.join(' '));
    return;
  }

  let tmpArr = [...array];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (element < fixed[fixed.length - 1]) {
      continue;
    }

    fixed.push(element);
    tmpArr.splice(index, 1);

    matches(tmpArr, length, fixed);

    fixed.pop();
    tmpArr = [...array];
  }
}
