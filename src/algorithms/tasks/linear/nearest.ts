import { convertFileToArgs } from '../../../utils/getArgsFromFile';

/**
 * @see {@link https://acmp.ru/asp/do/index.asp?main=task&id_course=1&id_section=5&id_topic=113&id_problem=692}
 */
export function nearest() {
  convertFileToArgs(`${__dirname}/NEAREST.txt`, (...args: string[]) => {
    const numbers = args[1].split(' ');
    const compared = +args[2];

    let nearest: number = +numbers[0];

    for (const number of numbers.slice(1)) {
      if (Math.abs(compared - +number) < Math.abs(compared - +nearest)) {
        nearest = +number
      }
    }

    console.log(nearest)
  });
}
