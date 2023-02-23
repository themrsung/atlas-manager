export default class EntryProperty {
    constructor(reactComponent: React.Component, key: string, value: any) {
        this.reactComponent = reactComponent
        this.key = key
        this.value = value
    }

    // React Component
    // The component in which this state resides in. Will be used induce to re-render on state change.
    private reactComponent: React.Component

    // prettier-ignore
    getReactComponent() { return this.reactComponent }

    // DO NOT CALL DIRECTLY. CALL AtlasClientState.setReactComponent() INSTEAD.
    // prettier-ignore
    setReactComponent(reactComponent: React.Component) { this.reactComponent = reactComponent }

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

    // Key
    private key: string

    // prettier-ignore
    getKey() { return this.key }

    setKey(key: string) {
        this.key = key
        this.refresh()
    }

    // Value
    private value: any

    // prettier-ignore
    getValue() { return this.value }

    setValue(value: any) {
        this.value = value
        this.refresh()
    }
}
