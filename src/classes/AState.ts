import { User } from "./User"

// AState for Atlas State
export class AState {
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
