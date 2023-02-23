import Databases from "../../api/Databases"
import AtlasClientUser from "./AtlasClientUser"
import AtlasClientDatabase from "./AtlasClientDatabase"

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
        if (this.currentUser) this.currentUser.setReactComponent(reactComponent)
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
    private databases: AtlasClientDatabase[] = []

    // prettier-ignore
    getDatabases() { return this.databases }

    // Contingency getter in case two or more databases with same id exist.
    // prettier-ignore
    getDatabasesById(id: string) { return this.getDatabases().filter(db => db.getId() === id) }

    // Conventional getter, returns first database matching id.
    // prettier-ignore
    getDatabaseById(id: string) { return this.getDatabasesById(id)[0] }

    // Destructive action, avoid if possible.
    setDatabases(databases: AtlasClientDatabase[]) {
        this.databases = databases
        this.refresh()
    }

    // Adds database to state.
    addDatabase(database: AtlasClientDatabase) {
        const databases = this.getDatabases()
        databases.push(database)

        this.setDatabases(databases)
        return database
    }

    // Removes all instances of given database or databases.
    // prettier-ignore
    removeDatabase(database: AtlasClientDatabase) { this.setDatabases(this.databases.filter(db => db !== database)) }
    // prettier-ignore
    removeDatabases(databases: AtlasClientDatabase[]) { databases.forEach(db => this.removeDatabase(db)) }
    // prettier-ignore
    removeDatabaseById(id: string) { this.removeDatabases(this.getDatabasesById(id)) }

    // Pulls databases of this.currentUser and sets this.databases accordingly.
    async pullDatabasesFromServer() {
        if (!this.currentUser) return []

        const databases = await Databases.getDatabasesOfUser(
            this.reactComponent,
            this.currentUser
        )

        if (!databases) return []

        this.setDatabases(databases)
    }

    // Pushes databases of client to server
    async pushDatabasesToServer() {
        if (!this.currentUser) return ""

        const res = await Databases.setDatabasesOfUser(
            this.databases,
            this.currentUser
        )

        return res.statusText
    }

    //
    //
    //

    // Current user
    private currentUser: AtlasClientUser | null = null

    getCurrentUser() {
        return this.currentUser
    }

    setCurrentUser(user: AtlasClientUser) {
        this.currentUser = user
        this.refresh()

        return user
    }
}
