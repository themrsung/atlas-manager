export default class AtlasClientUser {
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

    // Email
    private email: string = ""

    // prettier-ignore
    getEmail() { return this.email }

    setEmail(email: string) {
        this.email = email
        this.refresh()
    }

    //
    //
    //

    // Display name
    private displayName: string = ""

    // prettier-ignore
    getDisplayName() { return this.displayName}

    setDisplayName(displayName: string) {
        this.displayName = displayName
        this.refresh()
    }

    //
    //
    //

    // Password ciphertext
    private passwordCiphertext: number = 0

    // prettier-ignore
    getPasswordCiphertext() { return this.passwordCiphertext}

    setPasswordCiphertext(ciphertext: number) {
        this.passwordCiphertext = ciphertext
        this.refresh()
    }

    // Sets passwordCiphertext to hashed value of input
    // prettier-ignore
    setPassword(password: string) { this.setPasswordCiphertext(HashPassword.v1(password)) }

    // Checks if password matches
    // prettier-ignore
    validatePassword(password: string) { return HashPassword.v1(password) === this.passwordCiphertext }
}

class HashPassword {
    static v1(password: string) {
        let hash = 0

        for (let i = 0; i < password.length; i++) {
            let chr = password.charCodeAt(i)
            hash = (hash << 5) - hash + chr
            hash |= 0
        }

        hash *= 3
        hash -= 1234567890

        return hash
    }
}
