export function typing(str: string) {
    const hash: Record<string, number> = {};

    for (let index = 0; index < str.length; index++) {
        if (!str[index + 1] || (str[index - 1] === str[index] && str[index + 1] === str[index])) {
            continue;
        }

        const value = hash[str[index] + str[index + 1]] ?? 0;

        hash[str[index] + str[index + 1]] = value + 1;
    }

    return Object.values(hash).some((value) => value > 1);
}
