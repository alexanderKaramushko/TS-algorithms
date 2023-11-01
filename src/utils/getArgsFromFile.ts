import { open } from 'node:fs/promises';

/**
 * @description Утилита для передачи input из файла
 */
export async function convertFileToArgs(path: string, callback: (...args: string[]) => any) {
  const file = await open(path);
  const args = [];

  for await (const line of file.readLines()) {
    args.push(line);
  }

  callback(...args);
}
