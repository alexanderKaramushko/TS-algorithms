/**
 * @description Разбиение по Ламуто
 * 
 * Каждый считываемый элемент сравнивается с опорным: если он больше,
 * то он пропускается (индекс чтения переходит на шаг вперёд).
 * В противном случае значение под индексом чтения меняется местами со значением под индексом записи,
 * и оба индекса передвигаются на шаг вперёд.
 */
export function lamuto(input: number[]) {
  const pivot = input[0];

  let readIndex = 0;
  let writeIndex = 0;

  while (readIndex < input.length - 1) {
    if (input[readIndex] > pivot) {
      readIndex++;
      continue;
    }

    const lesser = input[readIndex];
    const greater = input[writeIndex];

    input[writeIndex] = lesser;
    input[readIndex] = greater;

    readIndex++;
    writeIndex++;
  }

  input[0] = input[writeIndex - 1];
  input[writeIndex - 1] = pivot;

  return input;
}
