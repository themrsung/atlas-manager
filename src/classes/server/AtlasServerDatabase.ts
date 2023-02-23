import AtlasClientDatabase from "../client/AtlasClientDatabase"
import Entry from "../entry/Entry"

// Use constructor to convert client to server, use toClientDatabase() to convert server to client
export default class AtlasServerDatabase {
    constructor(clientDatabase: AtlasClientDatabase) {
        this.id = clientDatabase.getId()
        this.entries = clientDatabase.getEntries()
    }

    id: string = ""
    entries: Entry[] = []

    toClientDatabase(reactComponent: React.Component) {
        const clientDatabase = new AtlasClientDatabase(reactComponent)

        clientDatabase.setId(this.id)
        clientDatabase.setEntries(this.entries)

        return clientDatabase
    }
}
