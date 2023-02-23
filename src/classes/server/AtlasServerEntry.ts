import AtlasClientEntry from "../client/AtlasClientEntry"
import AtlasClientEntryProperty from "../client/AtlasClientEntryProperty"
import AtlasServerEntryProperty, {
    ServerEntryPropertyObject
} from "./AtlasServerEntryProperty"

export default class AtlasServerEntry {
    constructor(clientEntry: AtlasClientEntry | null = null) {
        if (!clientEntry) return

        this.id = clientEntry.getId()

        const properties: AtlasServerEntryProperty[] = []
        for (let i = 0; i < clientEntry.getProperties().length; i++) {
            properties.push(
                new AtlasServerEntryProperty(clientEntry.getProperties()[i])
            )
        }

        this.properties = properties
    }

    id: string = ""
    properties: AtlasServerEntryProperty[] = []

    toClientEntry(reactComponent: React.Component) {
        const entry = new AtlasClientEntry(reactComponent)

        entry.setId(this.id)

        const properties: AtlasClientEntryProperty[] = []

        for (let i = 0; i < this.properties.length; i++) {
            properties.push(
                this.properties[i].toClientEntryProperty(reactComponent)
            )
        }

        entry.setProperties(properties)

        return entry
    }
}

export type ServerEntryObject = {
    id: string
    properties: ServerEntryPropertyObject[]
}
