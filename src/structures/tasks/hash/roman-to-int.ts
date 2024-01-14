/**
 * @see {@link https://leetcode.com/problems/roman-to-integer/description}
 * 
 * ACCEPTED.
 */
export function romanToInt(romans: string): number {
  const romanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  }

  let converted = 0;
  let combined = null;

  for (let index = 0; index < romans.length; index++) {
    const roman = romans[index];
    const next = romans[index + 1];

    if (combined) {
      converted += romanToInt[(combined + roman) as keyof typeof romanToInt];
      combined = null;
      continue;
    }

    if (Reflect.has(romanToInt, roman + next)) {
      combined = roman;
      continue;
    }

    converted += romanToInt[roman as keyof typeof romanToInt];
  }

  return converted;
}
