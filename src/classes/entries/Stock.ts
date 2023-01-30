import { Entry } from "../Entry"

export class Stock extends Entry {
    private stockCode: string

    constructor(
        id: string,
        name: string,
        valuePerItem: number = 5000,
        quantity: number = 1000,
        stockCode: string = "000000"
    ) {
        super(id, name, valuePerItem, quantity)
        this.stockCode = stockCode
    }

    // Getters
    getStockCode() {
        return this.stockCode
    }

    // Setters
    setStockCode(code: string) {
        this.stockCode = code
    }

    // API
    async syncStockData() {
        // fetch stock info
    }
}
