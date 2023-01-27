export class Entry {
    private id: string
    private name: string
    private valuePerItem: number = 0
    private quantity: number = 1

    constructor(id: string, name: string) {
        this.id = id
        this.name = name
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
