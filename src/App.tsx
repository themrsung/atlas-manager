import React from "react"
import "./App.css"
import AtlasClientState from "./classes/AtlasClientState"
import Database from "./classes/Database"
import Entry from "./classes/Entry"
import EntryProperty from "./classes/EntryProperty"
import Router from "./components/Router"
import StyleConventions from "./style/StyleConventions"

class App extends React.Component {
    state: AtlasClientState = new AtlasClientState(this)

    render() {
        return (
            <StyleConventions.GlobalStyleWrap>
                버튼 왼쪽부터 오른쪽으로 하나씩 눌러보세요!
                <button
                    onClick={() => {
                        this.state.addDatabase(new Database(this)).setId("Cars")
                    }}
                >
                    add database
                </button>
                <button
                    onClick={() => {
                        this.state
                            .getDatabases()[0]
                            .addEntry(new Entry(this))
                            .setId("Maserati")
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
                                new EntryProperty(this, "Brand", "Maserati")
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
                            .setId("Mercedes")
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
                                new EntryProperty(this, "Country", "Germany")
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
                            .setId("Volkswagen")
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
                                new EntryProperty(this, "사기꾼", "yes")
                            )
                    }}
                >
                    add property3
                </button>
                표에 있는 값을 누르면 수정됩니다
                <Router state={this.state} />
            </StyleConventions.GlobalStyleWrap>
        )
    }
}

export default App
