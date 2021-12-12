import { randomize } from "../../utils";

export namespace Buys {
    export type Buy = {
        transaction_id: string;
        user_id: string;
        product_id: string;
        product: {
            course_id: string;
            course_label: string;
            _link: string;
        },
        payment_method: string;
        payment_info: string;
        payment_value: number;
        created_at: string;
    }

    export interface LoadBuys {
        load(): Promise<Buy[]>
    }
}

export const buysMock: Buys.Buy[] = [
    {
        transaction_id: randomize(),
        user_id: randomize(),
        product_id: randomize(),
        product: {
            course_id: randomize(),
            course_label: 'Primeiros passos com web',
            _link: 'http://link.to/course?uuid=' + randomize()
        },
        payment_method: 'Credit Card (Elo)',
        payment_info: '1234 **** **** 4321',
        payment_value: randomValue(),
        created_at: randomCreatedAt()
    },
    {
        transaction_id: randomize(),
        user_id: randomize(),
        product_id: randomize(),
        product: {
            course_id: randomize(),
            course_label: 'Fundamentos de programação',
            _link: 'http://link.to/course?uuid=' + randomize()
        },
        payment_method: 'Credit Card (Master card)',
        payment_info: '1234 **** **** 4321',
        payment_value: randomValue(),
        created_at: randomCreatedAt()
    },
    {
        transaction_id: randomize(),
        user_id: randomize(),
        product_id: randomize(),
        product: {
            course_id: randomize(),
            course_label: 'Algoritmos',
            _link: 'http://link.to/course?uuid=' + randomize()
        },
        payment_method: 'Visa platinum',
        payment_info: '1234 **** **** 4321',
        payment_value: randomValue(),
        created_at: randomCreatedAt()
    },
    {
        transaction_id: randomize(),
        user_id: randomize(),
        product_id: randomize(),
        product: {
            course_id: randomize(),
            course_label: 'Desenvolvimento web avançado',
            _link: 'http://link.to/course?uuid=' + randomize()
        },
        payment_method: 'Santander free master card',
        payment_info: '1234 **** **** 4321',
        payment_value: randomValue(),
        created_at: randomCreatedAt()
    },
    {
        transaction_id: randomize(),
        user_id: randomize(),
        product_id: randomize(),
        product: {
            course_id: randomize(),
            course_label: 'DevOps - Operações de infraestrutura',
            _link: 'http://link.to/course?uuid=' + randomize()
        },
        payment_method: 'Boleto',
        payment_info: '12/12/2021 - 2337 ****',
        payment_value: randomValue(),
        created_at: randomCreatedAt()
    },
]

function randomValue(): number {
    return Math.round(Math.random() * 1e6)
}

function randomCreatedAt(): string {
    const backIn = Math.round(Math.random() * 180)
    const backInMs = 1000 * 60 * 60 * 24 * backIn
    const now = new Date().getTime() - backInMs

    const createdAt = new Date(now)

    return createdAt.toISOString()
}