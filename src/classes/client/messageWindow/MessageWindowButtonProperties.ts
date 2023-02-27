export default class MessageWindowButtonProperties {
    constructor(
        reactComponent: React.Component,
        text: string = "",
        callback: () => void = () => {},
        type: MessageWindowButtonType = MessageWindowButtonType.Primary
    ) {
        this.reactComponent = reactComponent
        this.text = text
        this.callback = callback
        this.type = type
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

    private text: string

    // prettier-ignore
    getText() { return this.text }
    setText(text: string) {
        this.text = text
        this.refresh()
    }

    private callback: () => void

    // prettier-ignore
    getCallback() { return this.callback }
    setCallback(callback: () => void) {
        this.callback = callback
        this.refresh()
    }

    private type: MessageWindowButtonType

    // prettier-ignore
    getType() { return this.type }
    setType(type: MessageWindowButtonType) {
        this.type = type
        this.refresh()
    }
}

export enum MessageWindowButtonType {
    Primary,
    Secondary,
    Positive,
    Warning,
    Error
}
