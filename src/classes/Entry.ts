import EntryProperty from "./EntryProperty"

export default class Entry {
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
        this.properties.forEach(property => {
            property.setReactComponent(reactComponent)
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
    // Unique identifier of this entry.

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

    // Properties
    // All properties of this entry are stored here.
    private properties: EntryProperty[] = []

    // prettier-ignore
    getProperties() { return this.properties }

    // Contingency getter in case two or more properties with same key exist.
    // prettier-ignore
    getPropertiesByKey(key: string) { return this.getProperties().filter(property => property.getKey() === key) }

    // Conventional getter, returns first property matching key.
    // prettier-ignore
    getPropertyByKey(key: string) { return this.getPropertiesByKey(key)[0] }

    // Returns all properties with given value.
    // prettier-ignore
    getPropertiesByValue(value: any) { return this.getProperties().filter(property => property.getValue() === value) }

    // Destructive action, avoid if possible.
    setProperties(properties: EntryProperty[]) {
        this.properties = properties
        this.refresh()
    }

    // Adds property to entry.
    addProperty(property: EntryProperty) {
        const properties = this.getProperties()
        properties.push(property)

        this.setProperties(properties)
        return property
    }

    // Removes all instances of given property or properties
    // prettier-ignore
    removeProperty(property: EntryProperty) { this.setProperties(this.getProperties().filter(p => p !== property)) }
    // prettier-ignore
    removeProperties(properties: EntryProperty[]) { properties.forEach(property => this.removeProperty(property)) }
    // prettier-ignore
    removePropertyByKey(key: string) { this.removeProperties(this.getPropertiesByKey(key)) }

    //
    //
    //
}
