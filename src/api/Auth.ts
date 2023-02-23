import axios from "axios"
import AtlasClientUser from "../classes/AtlasClientUser"

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
}
