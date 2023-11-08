function between(value: number, min: number, max: number) {
  return value >= min && value <= max;
}

/**
 * @see {@link https://ru.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F}
 */
export function caesar(input: string, shift: number) {
  const [minLowercase, maxLowercase] = ['a'.charCodeAt(0), 'z'.charCodeAt(0)];
  const [minUpperCase, maxUppercase] = ['A'.charCodeAt(0), 'Z'.charCodeAt(0)];

  return [...input].reduce((acc, char) => {
    const charCode = char.charCodeAt(0);

    if (between(charCode, minUpperCase, maxUppercase) && char.toUpperCase() === char) {
      acc += String.fromCharCode((charCode + shift) % maxUppercase);
      return acc;
    }

    if (between(charCode, minLowercase, maxLowercase)) {
      acc += String.fromCharCode((charCode + shift) % maxLowercase);
      return acc;
    }

    return acc += char;
  }, '');
}
