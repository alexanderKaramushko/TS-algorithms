export function operations(arr: number[], max: number) {
    let a = 0;
    let b = 0;
    let c = 0;

    for (let i = 2; i < arr.length; i++) {
        if (arr[i - 1] !== undefined && arr[i - 2] !== undefined) {
            let tmp = Math.min(
                c + Math.max(0, max - arr[i]),
                b + Math.max(0, max - arr[i - 1]),
                a + Math.max(0, max - arr[i - 2]),
            );
        
            a = b;
            b = c;
            c = tmp;
        }
    }

    return c;
}
