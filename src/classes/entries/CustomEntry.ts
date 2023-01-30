import { Entry } from "../Entry"

export type CustomEntryProperty = {
    key: string
    value: string
}

export class CustomEntry extends Entry {
    private customProperties: CustomEntryProperty[]

    constructor(
        id: string,
        name: string,
        valuePerItem: number = 0,
        quantity: number = 1,
        customProperties: CustomEntryProperty[] = []
    ) {
        super(id, name, valuePerItem, quantity)
        this.customProperties = customProperties
    }

    // Getters
    getCustomProperties() {
        return this.customProperties
    }

    getCustomProperty(property: CustomEntryProperty) {
        return this.customProperties.filter((cp) => cp === property)[0]
    }

    getCustomPropertyByKey(key: string) {
        return this.customProperties.filter((cp) => cp.key === key)[0]
    }

    getKeys() {
        let keys: string[] = []

        this.customProperties.forEach((cp) => {
            keys.push(cp.key)
        })

        return keys
    }

    // Setters
    setCustomProperties(customProperties: CustomEntryProperty[]) {
        this.customProperties = customProperties
    }

    setCustomProperty(property: CustomEntryProperty) {
        if (this.getKeys().includes(property.key)) {
            // Key exists, overwrite value
            this.getCustomPropertyByKey(property.key).value = property.value
        } else {
            this.customProperties.push(property)
        }
    }
}
