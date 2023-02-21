import Database from "./Database"

export default class AtlasClientState {
    constructor(reactComponent: React.Component) {
        this.reactComponent = reactComponent
    }

    // React Component
    // The component in which this state resides in. Will be used induce to re-render on state change.

    private reactComponent: React.Component

    // prettier-ignore
    getReactComponent() { return this.reactComponent }

    setReactComponent(reactComponent: React.Component) {
        this.reactComponent = reactComponent
        this.databases.forEach(db => {
            db.setReactComponent(reactComponent)
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

    // Databases
    // All databases within this state are stored here.
    private databases: Database[] = []

    // prettier-ignore
    getDatabases() { return this.databases }

    // Contingency getter in case two or more databases with same id exist.
    // prettier-ignore
    getDatabasesById(id: string) { return this.getDatabases().filter(db => db.getId() === id) }

    // Conventional getter, returns first database matching id.
    // prettier-ignore
    getDatabaseById(id: string) { return this.getDatabasesById(id)[0] }

    // Destructive action, avoid if possible.
    setDatabases(databases: Database[]) {
        this.databases = databases
        this.refresh()
    }

    // Adds database to state.
    addDatabase(database: Database) {
        const databases = this.getDatabases()
        databases.push(database)

        this.setDatabases(databases)
        return database
    }

    // Removes all instances of given database or databases.
    // prettier-ignore
    removeDatabase(database: Database) { this.setDatabases(this.databases.filter(db => db !== database)) }
    // prettier-ignore
    removeDatabases(databases: Database[]) { databases.forEach(db => this.removeDatabase(db)) }
    // prettier-ignore
    removeDatabaseById(id: string) { this.removeDatabases(this.getDatabasesById(id)) }

    //
    //
    //
}
