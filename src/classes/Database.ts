import { Entry } from "./Entry"

export class Database {
    private id: string
    private name: string
    private entries: Entry[]

    constructor(id: string, name: string, entries: Entry[] = []) {
        this.id = id
        this.name = name
        this.entries = entries
    }

    // Getters

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getEntries() {
        return this.entries
    }

    getTotalValue() {
        let value = 0

        this.entries.forEach((e) => {
            value += e.getTotalValue()
        })

        return value
    }

    // Setters

    setId(id: string) {
        this.id = id
    }

    setName(name: string) {
        this.name = name
    }

    addEntry(entry: Entry) {
        this.entries.push(entry)
    }

    removeEntry(entry: Entry) {
        this.entries = this.entries.filter((e) => e !== entry)
    }

    removeEntryById(entryId: string) {
        this.entries = this.entries.filter((e) => e.getId() !== entryId)
    }
}
