/**
 * @see {@link https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU}
 */
export class LRUCache {
    map = new Map<number, [number, number]>();

    constructor(private capacity: number) {}

    put = (key: number, value: number) => {
        if (this.map.size >= this.capacity && !this.map.has(key)) {
            const node = this.map.values().next().value as [number, number];

            this.map.delete(node[0]);
        }

        this.map.delete(key);
        this.map.set(key, [key, value]);
    }

    get = (key: number) => {
        if (!this.map.has(key)) {
            return -1;
        }

        const value = (this.map.get(key) as [number, number])[1] ?? 0;

        this.map.delete(key);
        this.map.set(key, [key, value]);

        return value;
    }
}