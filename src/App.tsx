import React from "react"
import "./App.css"
import AtlasClientState from "./classes/AtlasClientState"

class App extends React.Component {
    state: AtlasClientState = new AtlasClientState(this)

    render() {
        return <></>
    }
}

export default App
