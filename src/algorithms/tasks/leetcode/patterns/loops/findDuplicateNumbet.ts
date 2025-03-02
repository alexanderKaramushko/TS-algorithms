/**
 * @see {@link https://leetcode.com/problems/find-the-duplicate-number/description/}
 *
 *
 * @description Решение через алгоритм Флойда (tortoise and hare).
 * 
 * Проверка на цикл:
 * 
 * 1. Два указателя slow и fast
 * 2. slow двигается на шаг вперед, а fast – на два шага вперед
 * 3. Если slow === fast, то значит fast "догнал" slow и есть цикл
 * 
 * Найти стартовую точку цикла:
 * 
 * 1. Передвигаем slow в начальный узел
 * 2. Двигаем slow и fast на шаг вперед
 * 3. Возвращаем ответ slow, если slow === fast
 * 
 * Как работает?
 * 
 * пусть slowDist = a + xL + b, x >= 0
 * пусть fastDist = a + yL + b, x >= 0
 * 
 * a – кол-во шагов до цикла
 * x, y – целое число
 * L – длина цикла
 * b – расстояние от стартовой точки цикла и где встретились два указателя slow и fast
 * 
 * А значит:
 * 
 * fastDist = 2 * slowDist или
 * a + yL + b = 2 * (a + xL + b)
 * 
 * Решим уравнение:
 * 
 * a + yL + b − 2a − 2xL − 2b = 0
 * −a + yL − 2xL − b = 0 или
 * −a + (y − 2x)L − b = 0
 * 
 * Выразим a:
 * 
 * −a = −(y − 2x)L − b
 * 
 * и умножим на -1:
 * 
 * a = (y − 2x)L - b, где y − 2x = целое число
 * 
 * Итог:
 * 
 * То есть кол-во шагов до цикла то же самое что и сделать несколько
 * проходов по циклу и вернуться на b-шагов назад
 * 
 * Так как fast уже прошел определенное расстояние, то ему остается пройти еще a, чтобы
 * достичь стартового узла цикла.
 * То же самое и для slow. От начального узла остается пройти a-шагов,
 * чтобы достичь стартового узла цикла.
 */
export function findDuplicateNumber(nums: number[]) {
  let slow = nums[0];
  let fast = nums[0];

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow === fast) {
      break;
    }
  }

  slow = nums[0];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}
