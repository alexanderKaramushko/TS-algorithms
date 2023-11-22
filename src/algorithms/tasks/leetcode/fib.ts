/**
 * @see {@link https://education.yandex.ru/handbook/algorithms/article/zadachi-o-chislah-fibonachchi}
 * 
 * @description
 * Нахождение числа Фибоначчи рекурсивным способом
 * 
 */
export function recursiveFib(n: number): number {
  if (n <= 1) {
    return n;
  }

  return recursiveFib(n - 2) + recursiveFib(n - 1);
};

/**
 * @see {@link https://education.yandex.ru/handbook/algorithms/article/zadachi-o-chislah-fibonachchi}
 * 
 * @description
 * Нахождение числа Фибоначчи итерационным способом
 * 
 */
export function iterationalFib(n: number): number {
  // intermediate может быть массивом, но в таком случае будет выделятся лишняя память
  let intermediate = 0;
  let position = 1;

  let f1 = 1;
  let f2 = 1;

  while (position < n) {
    intermediate = f1 + f2;
    f1 = f2;
    f2 = intermediate;
    position++;
  }

  return f1
};

/**
 * @see {@link https://education.yandex.ru/handbook/algorithms/article/zadachi-o-chislah-fibonachchi}
 * 
 * @description
 * Нахождение числа Фибоначчи рекурсивным способом с мемоизацией
 * 
 */
export function recursiveMemoFib(n: number): number {
  const table: Record<number, number> = {}

  function fib(n: number) {
    if (table[n] === undefined) {
      if (n <= 1) {
        table[n] = n;
      } else {
        table[n] = fib(n - 2) + fib(n - 1);
      }
    }

    return table[n];
  }

  return fib(n);
};