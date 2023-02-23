import axios from "axios"
import AtlasClientUser from "../classes/client/AtlasClientUser"
import AtlasServerUser from "../classes/server/AtlasServerUser"

export default class Auth {
    static AUTH_SERVER_URL = "http://localhost:5000/users"

    static async getUsers(reactComponent: React.Component) {
        const users: AtlasClientUser[] = []

        const res = await axios.get(Auth.AUTH_SERVER_URL)
        if (!res.data) return []

        // Converts server user data to client user data
        for (let i = 0; i < res.data.length; i++) {
            const clientUser = new AtlasClientUser(reactComponent)
            const serverUser = res.data[i]

            clientUser.setId(serverUser.id)
            clientUser.setEmail(serverUser.email)
            clientUser.setDisplayName(serverUser.displayName)
            clientUser.setPasswordCiphertext(serverUser.passwordCiphertext)

            users.push(clientUser)
        }

        return users
    }

    static async addUserToServer(user: AtlasClientUser) {
        const serverUser = new AtlasServerUser(user)

        const res = await axios.post(Auth.AUTH_SERVER_URL, serverUser)
        return res.statusText
    }

    static async login(
        reactComponent: React.Component,
        id: string,
        password: string
    ) {
        const res = await Auth.getUsers(reactComponent)

        for (let i = 0; i < res.length; i++) {
            const user = res[i]
            if (user.getId() === id) {
                if (user.validatePassword(password)) {
                    // Login success, do something

                    return true
                }
            }
        }

        return false
    }
}
