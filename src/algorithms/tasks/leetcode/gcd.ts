/**
 * @see {@link https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D0%B8%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B8%D0%B9_%D0%BE%D0%B1%D1%89%D0%B8%D0%B9_%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8C}
 * 
 * Перебираем все числа, которые не больше наименьшего аргумента
 * и проверяем делимость аргументов на них
 */
export function slowGCD(dividend1: number, dividend2: number) {
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

/**
 * fasterGCD(a - b, b) = fasterGCD(a, b) при a > b
 * 
 * Асимптотическая сложность: Средняя O(log n), худшая O(n)
 * 
 * Доказательство:
 * 
 * fasterGCD(a - b, b) = x
 * x > gcd(a, b)
 * (a - b + b) делится на x, а значит и a делится на x
 * gcd(a, b) >= x
 * 
 * x > gcd(a, b) >= x
 * x > x, fasterGCD(a - b, b) не может быть больше gcd(a, b)
 */
export function fasterGCD(dividend1: number, dividend2: number): number {
  if (dividend1 === 0 || dividend2 === 0) {
    return Math.max(dividend1, dividend2);
  }

  let a = dividend1;
  let b = dividend2;

  if (a > b) {
    a -= b
  } else {
    b -= a;
  }

  return fasterGCD(a, b);
}

/**
 * euclideanGCD(10^9, 7)
 * euclideanGCD(10^9, 10^9 mod 7)
 * euclideanGCD(10^9, 1)
 */
export function euclideanGCD(dividend1: number, dividend2: number): number {
  if (dividend1 === 0 || dividend2 === 0) {
    return Math.max(dividend1, dividend2);
  }

  let a = dividend1;
  let b = dividend2;

  if (a > b) {
    a = a % b
  } else {
    b = b % a;
  }

  return euclideanGCD(a, b);
}
