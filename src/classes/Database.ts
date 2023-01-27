export class Database {
    private id: string
    private name: string

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

    // Setters

    setId(id: string) {
        this.id = id
    }

    setName(name: string) {
        this.name = name
    }
}
