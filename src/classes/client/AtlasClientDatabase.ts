import AtlasClientEntry from "./AtlasClientEntry"

export default class AtlasClientDatabase {
    constructor(reactComponent: React.Component) {
        this.reactComponent = reactComponent
    }

    // React Component
    // The component in which this state resides in. Will be used induce to re-render on state change.
    private reactComponent: React.Component

    // prettier-ignore
    getReactComponent() { return this.reactComponent }

    // DO NOT CALL DIRECTLY. CALL AtlasClientState.setReactComponent() INSTEAD.
    setReactComponent(reactComponent: React.Component) {
        this.reactComponent = reactComponent
        this.entries.forEach(entry => {
            entry.setReactComponent(reactComponent)
        })
    }

    //
    //
    //

    // Refresh
    // Induces re-render by calling this.reactComponent.forceUpdate(). Call after any altering of state variables.
    // prettier-ignore
    refresh() { this.reactComponent.forceUpdate() }

    //
    //
    //

    // ID
    // Unique identifier of this database
    private id: string = ""

    // prettier-ignore
    getId() { return this.id }

    setId(id: string) {
        this.id = id
        this.refresh()
    }

    //
    //
    //

    // Entries
    // All entries within this database are stored here.
    private entries: AtlasClientEntry[] = []

    // prettier-ignore
    getEntries() { return this.entries }

    // Contingency getter in case two or more entries with same id exist.
    // prettier-ignore
    getEntriesById(id: string) { return this.getEntries().filter(db => db.getId() === id) }

    // Conventional getter, returns first entry matching id.
    // prettier-ignore
    getEntryById(id: string) { return this.getEntriesById(id)[0] }

    // Destructive action, avoid if possible.
    setEntries(entries: AtlasClientEntry[]) {
        this.entries = entries
        this.refresh()
    }

    // Adds entry to database.
    addEntry(entry: AtlasClientEntry) {
        const entries = this.getEntries()
        entries.push(entry)

        this.setEntries(entries)
        return entry
    }

    // Removes all instances of given entry or entries.
    // prettier-ignore
    removeEntry(entry: AtlasClientEntry) { this.setEntries(this.getEntries().filter(e => e !== entry)) }
    // prettier-ignore
    removeEntries(entries: AtlasClientEntry[]) { entries.forEach(entry => this.removeEntry(entry)) }
    // prettier-ignore
    removeEntryById(id: string) { this.removeEntries(this.getEntriesById(id)) }

    //
    //
    //
}
