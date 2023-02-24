import axios from "axios"
import AtlasClientUser from "../classes/client/AtlasClientUser"
import AtlasServerDatabase from "../classes/server/AtlasServerDatabase"
import AtlasServerUser from "../classes/server/AtlasServerUser"
import { ApiSettings } from "./ApiSettings"
import Databases from "./Databases"

export default class Auth {
    static AUTH_SERVER_URL = ApiSettings.SERVER_BASE_URL + "/users"

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

    static isIdValid(id: string) {
        if (id === "") return false

        return true
    }

    static async isIdTaken(id: string, reactComponent: React.Component) {
        const users = await Auth.getUsers(reactComponent)
        for (let i = 0; i < users.length; i++) {
            if (users[i].getId() === id) return false
        }

        return true
    }

    static isPasswordValid(password: string) {
        if (password === "") return false
        if (password.length < 7) return false

        return true
    }

    static isEmailValid(email: string) {
        if (email === "") return false
        if (email.length < 5) return false
        if (email.split("@").length !== 2) return false
        if (email.split(".").length !== 2) return false

        return true
    }

    static isDisplayNameValid(displayName: string) {
        if (displayName === "") return false
        if (displayName.length < 3) return false

        return true
    }

    static async addUserToServer(user: AtlasClientUser) {
        const serverUser = new AtlasServerUser(user)

        const startingDatabaseObject = {
            id: "Getting Started",
            entries: [
                {
                    id: "Row 1",
                    properties: [
                        {
                            key: "Column 1",
                            value: "You can type a string, number, or boolean."
                        }
                    ]
                }
            ]
        }

        const defaultDatabase = AtlasServerDatabase.fromObject(
            startingDatabaseObject
        )

        const userRes = await axios.post(Auth.AUTH_SERVER_URL, serverUser)
        const dataRes = await axios.post(Databases.DATABASES_SERVER_URL, {
            id: serverUser.id,
            "0": defaultDatabase
        })

        return (
            "userRes: " +
            userRes.statusText +
            " // dataRes: " +
            dataRes.statusText
        )
    }

    static async findUserWithCredentials(
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

                    return user
                }
            }
        }

        return null
    }
}
