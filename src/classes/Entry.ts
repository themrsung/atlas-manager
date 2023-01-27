export class Entry {
    private id: string
    private name: string
    private valuePerItem: number
    private quantity: number

    constructor(
        id: string,
        name: string,
        valuePerItem: number = 0,
        quantity: number = 1
    ) {
        this.id = id
        this.name = name
        this.valuePerItem = valuePerItem
        this.quantity = quantity
    }

    // Getters

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getQuantity() {
        return this.quantity
    }

    // Dynamic Getters

    getTotalValue() {
        return this.valuePerItem * this.quantity
    }

    getValuePerItem() {
        return this.valuePerItem
    }

    // Setters

    setId(id: string) {
        this.id = id
    }

    setName(name: string) {
        this.name = name
    }

    setValuePerItem(valuePerItem: number) {
        this.valuePerItem = valuePerItem
    }

    setQuantity(quantity: number) {
        this.quantity = quantity
    }
}
