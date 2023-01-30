import { Entry } from "../Entry"

export class Alcohol extends Entry {
    private leftover: number

    constructor(
        id: string,
        name: string,
        valuePerItem: number = 500000,
        quantity: number = 1,
        leftover: number = 1
    ) {
        super(id, name, valuePerItem, quantity)
        this.leftover = leftover
    }

    // Getters
    getLeftover() {
        return this.leftover
    }

    // Dynamic Getters

    getTotalValue(): number {
        return this.getValuePerItem() * this.getLeftover() * this.getQuantity()
    }

    getValuePerItem(): number {
        return this.getValuePerItem() * this.getLeftover()
    }

    // Setters
    setLeftover(leftover: number) {
        this.leftover = leftover
    }
}
