import readline from 'readline';

/**
 * @description Утилита для передачи input из CLI
 */
export function read(callback: (...args: any[]) => any) {
  const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  read.question('Write arguments: ', args => {
    callback(args);
  });
}
