export function brackets(k: number) {
    const list: string[] = [];

    let left = 0;
    let index = 0;

    function build(left: number, index: number, k: number, list: string[]) {
        // добавить открывающую скобку, если есть место для двух скобок, начиная с текущего индекса
        if (left <= k - index - 2) {
            list[index] = '(';
            build(left + 1, index + 1, k, list)
        }

        // открывающие скобки добавили, теперь можно добавить закрывающие
        if (left > 0) {
            list[index] = ')';
            build(left - 1, index + 1, k, list)
        }

        if (index === k && left === 0) {
            console.log(list);
        }
    }

    build(left, index, k, list);
}
