import React from "react"
import "./App.css"
import AtlasClientState from "./classes/client/AtlasClientState"
import AtlasClientUser from "./classes/client/AtlasClientUser"
import AtlasClientDatabase from "./classes/client/AtlasClientDatabase"
import AtlasClientEntry from "./classes/client/AtlasClientEntry"
import AtlasClientEntryProperty from "./classes/client/AtlasClientEntryProperty"
import Router from "./components/router/Router"
import StyleConventions from "./style/StyleConventions"
import Auth from "./api/Auth"

class App extends React.Component {
    state: AtlasClientState = new AtlasClientState(this)

    render() {
        return (
            <StyleConventions.GlobalStyleWrap>
                <Router state={this.state} />
            </StyleConventions.GlobalStyleWrap>
        )
    }
}

export default App
