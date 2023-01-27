import { Database } from "./Database"

export enum UserTier {
    Free = "Free",
    Personal = "Personal",
    Professional = "Professional",
    Admin = "Admin"
}

export class User {
    private id: string
    private name: string
    private userTier: UserTier = UserTier.Free
    private databases: Database[] = []

    constructor(id: string, name: string) {
        this.id = id
        this.name = name
    }

    // Getters

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getUserTier() {
        return this.userTier
    }

    getDatabases() {
        return this.databases
    }

    // Setters

    setId(id: string) {
        this.id = id
    }

    setName(name: string) {
        this.name = name
    }

    setUserTier(userTier: UserTier) {
        this.userTier = userTier
    }

    addDatabase(database: Database) {
        this.databases.push(database)
    }

    removeDatabase(database: Database) {
        this.databases = this.databases.filter((db) => db !== database)
    }

    removeDatabaseById(databaseId: string) {
        this.databases = this.databases.filter(
            (db) => db.getId() !== databaseId
        )
    }
}
