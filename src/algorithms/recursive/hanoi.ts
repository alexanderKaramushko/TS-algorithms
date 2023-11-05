/**
 * @description
 * 
 * Асимптотика
 * 
 * T(n) = 2^n - 1, где 2^n перекладывание колец с середины и на 3-й стержень,
 * а -1 – перекладывание самого большого кольца на 3-й стержень
 */
export function hanoi(n: number, start: number, finish: number) {
  if (n === 1) {
    console.log(`Move disk ${n} from ${start} to ${finish}`);
    return;
  }

  const tmp = 6 - start - finish;

  // перекладывает кольца в середину
  hanoi(n - 1, start, tmp);

  // перекладывает самое большое кольцо на 3-й стержень
  console.log(`Move disk ${n} from ${start} to ${finish}`);

  // кольца с середины на 3-й стержень
  hanoi(n - 1, tmp, finish);
}