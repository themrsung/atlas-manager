import { User } from "./User"

// 이거 클라이언트니까 아마 state는 없애는 게 좋을 듯
// nope 그냥 놔둬

export class State {
    private users: User[]
    private currentUser: User

    constructor(users: User[], currentUser: User = {} as User) {
        this.users = users
        this.currentUser = currentUser
    }

    // Getters

    getUsers() {
        return this.users
    }

    getCurrentUser() {
        return this.currentUser
    }

    // Setters
    setUsers(users: User[]) {
        this.users = users
    }

    setCurrentUser(user: User) {
        this.currentUser = user
    }

    // API

    async pushToServer() {}

    async pullFromServer() {}
}
