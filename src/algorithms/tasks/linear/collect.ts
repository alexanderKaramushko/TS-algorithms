import readline from 'readline';

export function collect() {
  const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  read.question('Write arguments: ', args => {
    console.log('Hello: ', args);
  });
}
