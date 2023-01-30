export type CustomEntryProperty = {
    key: string
    value: string
}
export class Entry {
    private id: string
    private name: string
    private valuePerItem: number
    private quantity: number
    private customProperties: CustomEntryProperty[]

    constructor(
        id: string,
        name: string,
        valuePerItem: number = 0,
        quantity: number = 1,
        customProperties: CustomEntryProperty[] = []
    ) {
        this.id = id
        this.name = name
        this.valuePerItem = valuePerItem
        this.quantity = quantity
        this.customProperties = customProperties
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

    getCustomProperties() {
        return this.customProperties
    }

    getCustomProperty(property: CustomEntryProperty) {
        return this.customProperties.filter((cp) => cp === property)[0]
    }

    getCustomPropertyByKey(key: string) {
        return this.customProperties.filter((cp) => cp.key === key)[0]
    }

    getCustomKeys() {
        let keys: string[] = []

        this.customProperties.forEach((cp) => {
            keys.push(cp.key)
        })

        return keys
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

    setCustomProperties(customProperties: CustomEntryProperty[]) {
        this.customProperties = customProperties
    }

    setCustomProperty(property: CustomEntryProperty) {
        if (this.getCustomKeys().includes(property.key)) {
            // Key exists, overwrite value
            this.getCustomPropertyByKey(property.key).value = property.value
        } else {
            this.customProperties.push(property)
        }
    }

    removeCustomProperty(property: CustomEntryProperty) {
        this.customProperties = this.customProperties.filter(
            (cp) => cp !== property
        )
    }

    removeCustomPropertyByKey(key: string) {
        this.customProperties = this.customProperties.filter(
            (cp) => cp.key !== key
        )
    }
}
