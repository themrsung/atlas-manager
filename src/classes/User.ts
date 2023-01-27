import { HashPasswordVersion } from "./Auth"
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
    private passwordCiphertext: string
    private userTier: UserTier
    private databases: Database[]
    private passwordHashVersion: HashPasswordVersion

    constructor(
        id: string,
        name: string,
        passwordCiphertext: string = "1216985755", // password
        userTier: UserTier = UserTier.Free,
        databases: Database[] = [],
        passwordHashVersion: HashPasswordVersion = HashPasswordVersion.v1
    ) {
        this.id = id
        this.name = name
        this.passwordCiphertext = passwordCiphertext
        this.userTier = userTier
        this.databases = databases
        this.passwordHashVersion = passwordHashVersion
    }

    // Getters

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getPasswordCiphertext() {
        return this.passwordCiphertext
    }

    getUserTier() {
        return this.userTier
    }

    getDatabases() {
        return this.databases
    }

    getPasswordHashVersion() {
        return this.passwordHashVersion
    }

    // Setters

    setId(id: string) {
        this.id = id
    }

    setName(name: string) {
        this.name = name
    }

    setPasswordCiphertext(password: string) {
        this.passwordCiphertext = password
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

    setPasswordHashVersion(version: HashPasswordVersion) {
        this.passwordHashVersion = version
    }
}
