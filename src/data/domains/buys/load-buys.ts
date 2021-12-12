import { Buys, buysMock } from '../../../domain/buys'

export class LoadBuys implements Buys.LoadBuys {
    async load(): Promise<Buys.Buy[]> {
        return buysMock
    }
}