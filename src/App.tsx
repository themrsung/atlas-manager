import React from "react"
import "./App.css"
import AtlasClientState from "./classes/client/AtlasClientState"
import MessageWindow from "./components/messageWindow/MessageWindow"
import Router from "./components/router/Router"
import StyleConventions from "./style/StyleConventions"

class App extends React.Component {
    state: AtlasClientState = new AtlasClientState(this)

    render() {
        return (
            <StyleConventions.GlobalStyleWrap>
                <MessageWindow state={this.state} />
                <Router state={this.state} />
            </StyleConventions.GlobalStyleWrap>
        )
    }
}

export default App
