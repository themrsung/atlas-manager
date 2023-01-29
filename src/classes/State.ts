import axios from "axios"
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

    getStrippedDownStateOfSingleUser(user: User) {
        const jsonifiedThis = JSON.stringify(this)
        const parsedCloneOfThis = JSON.parse(jsonifiedThis) as State
        console.log(parsedCloneOfThis)

        parsedCloneOfThis.setUsers(
            parsedCloneOfThis.getUsers().filter((u: User) => u === user)
        )
        return parsedCloneOfThis
    }

    async pushStrippedDownStateOfSingleUserToServer(user: User) {
        return await State.pushToServer(
            this.getStrippedDownStateOfSingleUser(user)
        )
    }

    static async pushToServer(state: State) {
        const res = await axios.patch("http://localhost:5000/state", state)
        return res.data
    }

    static async pullFromServer() {
        const res = await axios.get("http://localhost:5000/state")
        return res.data as State
    }
}
