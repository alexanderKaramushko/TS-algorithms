/**
 * @see {@link https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D0%B8%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B8%D0%B9_%D0%BE%D0%B1%D1%89%D0%B8%D0%B9_%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8C}
 */
export function gcd(dividend1: number, dividend2: number) {
  if (dividend1 < 0 || dividend2 < 0) {
    throw new TypeError('Введите положительные целые числа!')
  }

  if (dividend1 === 0 || dividend2 === 0) {
    return Math.max(dividend1, dividend2)
  }

  let divider = 1;
  let greatestDivider = 1;

  while (divider <= Math.min(dividend1, dividend2)) {
    if ((dividend1 % divider) === 0 && (dividend2 % divider) === 0) {
      greatestDivider = divider;
    }

    divider++;
  }

  return greatestDivider;
}
