import React from "react"
import "./App.css"
import AtlasClientState from "./classes/AtlasClientState"
import AtlasClientUser from "./classes/AtlasClientUser"
import AtlasClientDatabase from "./classes/AtlasClientDatabase"
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
                        this.state
                            .addDatabase(new AtlasClientDatabase(this))
                            .setId("Cars")
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
                <button
                    onClick={() => {
                        console.log(this.state)
                    }}
                >
                    console.log(state)
                </button>
                <button
                    onClick={() => {
                        const user = this.state.setCurrentUser(
                            new AtlasClientUser(this)
                        )
                        user.setId("admin")
                        user.setDisplayName("Administrator")
                        user.setEmail("admin@atlaspartners.kr")
                        user.setPassword("password")
                    }}
                >
                    user 설정
                </button>
                <button
                    onClick={() => {
                        console.log(
                            this.state
                                .getCurrentUser()
                                ?.validatePassword("password")
                        )
                    }}
                >
                    비밀번호 password check
                </button>
                <Router state={this.state} />
            </StyleConventions.GlobalStyleWrap>
        )
    }
}

export default App
