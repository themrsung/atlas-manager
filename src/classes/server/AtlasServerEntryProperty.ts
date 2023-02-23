import AtlasClientEntryProperty from "../client/AtlasClientEntryProperty"

export default class AtlasServerEntryProperty {
    constructor(clientEntryProperty: AtlasClientEntryProperty | null = null) {
        if (!clientEntryProperty) return

        this.key = clientEntryProperty.getKey()
        this.value = clientEntryProperty.getValue()
    }

    key: string = ""
    value: any

    toClientEntryProperty(reactComponent: React.Component) {
        return new AtlasClientEntryProperty(
            reactComponent,
            this.key,
            this.value
        )
    }
}

export type ServerEntryPropertyObject = {
    key: string
    value: any
}
