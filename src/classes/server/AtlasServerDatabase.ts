import AtlasClientDatabase from "../client/AtlasClientDatabase"
import AtlasClientEntry from "../client/AtlasClientEntry"
import AtlasServerEntry, { ServerEntryObject } from "./AtlasServerEntry"
import AtlasServerEntryProperty from "./AtlasServerEntryProperty"

// Use constructor to convert client to server, use toClientDatabase() to convert server to client
export default class AtlasServerDatabase {
    constructor(clientDatabase: AtlasClientDatabase | null = null) {
        if (!clientDatabase) return

        this.id = clientDatabase.getId()

        const entries: AtlasServerEntry[] = []

        for (let i = 0; i < clientDatabase.getEntries().length; i++) {
            entries.push(new AtlasServerEntry(clientDatabase.getEntries()[i]))
        }

        this.entries = entries
    }

    id: string = ""
    entries: AtlasServerEntry[] = []

    toClientDatabase(reactComponent: React.Component) {
        const clientDatabase = new AtlasClientDatabase(reactComponent)

        clientDatabase.setId(this.id)

        const entries: AtlasClientEntry[] = []

        for (let i = 0; i < this.entries.length; i++) {
            entries.push(this.entries[i].toClientEntry(reactComponent))
        }

        clientDatabase.setEntries(entries)

        return clientDatabase
    }

    static fromObject(obj: Object) {
        const serverDatabase = new AtlasServerDatabase()
        const validatedObject = obj as ServerDatabaseObject

        if (!validatedObject) return null

        serverDatabase.id = validatedObject.id

        for (let i = 0; i < validatedObject.entries.length; i++) {
            const entry = new AtlasServerEntry()

            entry.id = validatedObject.entries[i].id

            for (
                let j = 0;
                j < validatedObject.entries[i].properties.length;
                j++
            ) {
                const property = new AtlasServerEntryProperty()
                property.key = validatedObject.entries[i].properties[j].key
                property.value = validatedObject.entries[i].properties[j].value

                entry.properties.push(property)
            }

            serverDatabase.entries.push(entry)
        }

        return serverDatabase
    }
}

type ServerDatabaseObject = {
    id: string
    entries: ServerEntryObject[]
}
