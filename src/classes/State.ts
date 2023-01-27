import { Database } from "./Database"
import { User } from "./User"

export class State {
    private users: User[]

    constructor(users: User[]) {
        this.users = users
    }

    // Getters

    getUsers() {
        return this.users
    }

    // Setters
    setUsers(users: User[]) {
        this.users = users
    }
}
