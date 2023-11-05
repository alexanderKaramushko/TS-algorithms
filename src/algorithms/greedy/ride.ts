type Segment = [number, number];

/**
 * @see {@link http://ulivt.ru:8082/ru/problem-pid-c653}
 */
export function ride(input: Array<Segment>) {
  const sorted = input.sort(([, end1], [, end2]) => (
    end1 - end2
  ));

  const maxSegments: Array<Segment> = [sorted[0]];

  for (let index = 1; index < sorted.length; index++) {
    const segment = sorted[index];
    const lastMaxSegment = maxSegments.at(-1) as Segment;

    if (segment[0] >= lastMaxSegment[0] && segment[0] <= lastMaxSegment[1]) {
      continue;
    }

    maxSegments.push(segment);
  }

  return maxSegments.length;
}
