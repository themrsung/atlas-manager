import AtlasClientUser from "../classes/client/AtlasClientUser"
import AtlasClientDatabase from "../classes/client/AtlasClientDatabase"
import axios from "axios"
import AtlasServerDatabase from "../classes/server/AtlasServerDatabase"

export default class Databases {
    static DATABASES_SERVER_URL = "http://localhost:5000/databases"

    static async getDatabasesOfUser(
        reactComponent: React.Component,
        user: AtlasClientUser
    ) {
        const databases: AtlasClientDatabase[] = []

        const res = await axios.get(
            Databases.DATABASES_SERVER_URL + "/" + user.getId()
        )
        if (!res.data) return []

        // Converts server database data to client database data
        for (let i = 0; i < res.data.length; i++) {
            const serverDatabase = res.data[i] as AtlasServerDatabase

            databases.push(serverDatabase.toClientDatabase(reactComponent))
        }

        return databases
    }

    static async setDatabasesOfUser(
        databases: AtlasClientDatabase[],
        user: AtlasClientUser
    ) {
        const databasesToSendToServer: AtlasServerDatabase[] = []

        for (let i = 0; i < databases.length; i++) {
            databasesToSendToServer.push(new AtlasServerDatabase(databases[i]))
        }

        const res = await axios.put(
            Databases.DATABASES_SERVER_URL + "/" + user.getId(),
            databasesToSendToServer
        )

        return res
    }
}
