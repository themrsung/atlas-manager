import AtlasClientDatabase from "./AtlasClientDatabase"
import Entry from "./Entry"

export default class AtlasServerDatabase {
    constructor(clientDatabase: AtlasClientDatabase) {
        this.id = clientDatabase.getId()
        this.entries = clientDatabase.getEntries()
    }

    id: string = ""
    entries: Entry[] = []
}
