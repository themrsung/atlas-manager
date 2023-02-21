import React from "react"
import "./App.css"
import AtlasClientState from "./classes/AtlasClientState"
import Database from "./classes/Database"
import Entry from "./classes/Entry"
import EntryProperty from "./classes/EntryProperty"
import Router from "./components/Router"
import { StyleConventions } from "./style/StyleConventions"

class App extends React.Component {
    state: AtlasClientState = new AtlasClientState(this)

    render() {
        return (
            <StyleConventions.GlobalStyleWrap>
                <button
                    onClick={() => {
                        this.state.addDatabase(new Database(this)).setId("one")
                    }}
                >
                    add database
                </button>
                <button
                    onClick={() => {
                        this.state
                            .getDatabases()[0]
                            .addEntry(new Entry(this))
                            .setId("two")
                    }}
                >
                    add entry
                </button>
                <button
                    onClick={() => {
                        this.state
                            .getDatabases()[0]
                            .getEntries()[0]
                            .addProperty(
                                new EntryProperty(this, "test", 202020)
                            )
                    }}
                >
                    add property
                </button>
                <button
                    onClick={() => {
                        this.state
                            .getDatabases()[0]
                            .addEntry(new Entry(this))
                            .setId("three")
                    }}
                >
                    add entry2
                </button>
                <button
                    onClick={() => {
                        this.state
                            .getDatabases()[0]
                            .getEntries()[1]
                            .addProperty(
                                new EntryProperty(
                                    this,
                                    "test2",
                                    "vamos vamos vamos"
                                )
                            )
                    }}
                >
                    add property2
                </button>
                <button
                    onClick={() => {
                        this.state
                            .getDatabases()[0]
                            .addEntry(new Entry(this))
                            .setId("cuatro")
                    }}
                >
                    add entry3
                </button>
                <button
                    onClick={() => {
                        this.state
                            .getDatabases()[0]
                            .getEntries()[2]
                            .addProperty(
                                new EntryProperty(this, "test tres", 202020200)
                            )
                    }}
                >
                    add property3
                </button>
                <Router state={this.state} />
            </StyleConventions.GlobalStyleWrap>
        )
    }
}

export default App
