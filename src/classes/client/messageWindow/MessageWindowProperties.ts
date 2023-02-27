import MessageWindowButtonProperties from "./MessageWindowButtonProperties"

export default class MessageWindowProperties {
    constructor(
        reactComponent: React.Component,
        isOpen: boolean = false,
        message: string = "",
        buttons: MessageWindowButtonProperties[] = []
    ) {
        this.reactComponent = reactComponent
        this.isOpen = isOpen
        this.message = message
        this.buttons = buttons
    }

    // React Component
    // The component in which this state resides in. Will be used induce to re-render on state change.
    private reactComponent: React.Component

    // prettier-ignore
    getReactComponent() { return this.reactComponent }

    // DO NOT CALL DIRECTLY. CALL AtlasClientState.setReactComponent() INSTEAD.
    setReactComponent(reactComponent: React.Component) {
        this.reactComponent = reactComponent
        this.buttons.forEach(button => {
            button.setReactComponent(reactComponent)
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

    private isOpen: boolean

    // prettier-ignore
    getIsOpen() { return this.isOpen }
    setIsOpen(isOpen: boolean) {
        this.isOpen = isOpen
        this.refresh()
    }

    private message: string

    // prettier-ignore
    getMessage() { return this.message }
    setMessage(message: string) {
        this.message = message
        this.refresh()
    }

    private buttons: MessageWindowButtonProperties[]

    // prettier-ignore
    getButtons() { return this.buttons }
    setButtons(buttons: MessageWindowButtonProperties[]) {
        this.buttons = buttons
        this.refresh()
    }
}
