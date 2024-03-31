export function trampoline(fn: (...params: any[]) => any) {
  return function trampolined(...args: any[]) {
    var result = fn(...args);

    while (typeof result == "function") {
      result = result();
    }

    return result;
  };
}

/**
 * @example
 */

// var sum = trampoline(
//   function sum(num1, num2, ...nums: number[]) {
//     num1 = num1 + num2;
//     if (nums.length == 0) return num1;

//     return () => sum(num1, ...nums);
//   }
// );

// var xs = [];
// for (let i = 0; i < 20000; i++) {
//   xs.push(i);
// }

// sum(...xs);