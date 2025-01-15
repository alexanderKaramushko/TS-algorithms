import { Deque } from "../../queue/deque";

export class VipQueue {
    q1 = new Deque<string>();
    q2 = new Deque<string>();

    add(id: string, vip: boolean) {
        if (vip) {
            // переносим в начало обычных клиентов
            while (this.q1.size() < this.q2.size()) {
                this.q1.enqueueLast(this.q2.dequeueFirst() as string);
            }

            // ставим за обычными клиентами vip-клиента
            this.q1.enqueueLast(id);
        } else {
            // добавляем обычных клиентов
            this.q2.enqueueLast(id);
        }
    }

    get(): string | null {
        if (this.q1.size() > 0) {
            return this.q1.dequeueFirst() as string;
        }

        if (this.q2.size() > 0) {
            return this.q2.dequeueFirst() as string;
        }

        return null;
    }
}