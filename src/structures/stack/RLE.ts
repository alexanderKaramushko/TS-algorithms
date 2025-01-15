export function RLE(str: string) {
    const stack: string[] = [];

    for (const char of str.split('').reverse().join('')) {
        if (!Number.isNaN(Number.parseInt(char, 10))) {
            let prev = stack[stack.length - 1];

            if (prev === '(') {
                let tmp = '';
                prev = stack.pop() as string;
    
                for (let index = stack.length - 1; stack[index] !== ')'; index--) {
                    if (stack[index] !== ')') {
                        tmp += stack.pop();
                    }
                }

                stack.pop();

                for (let index = 0; index <= Number.parseInt(char, 10) - 1; index++) {
                    stack.push(tmp);
                }
            } else {
                for (let index = 0; index < Number.parseInt(char, 10) - 1; index++) {
                    stack.push(prev);
                }
            }

            continue;
        }

        stack.push(char);
    }

    return stack.reverse().join('')
}
