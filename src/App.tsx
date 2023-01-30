import React from "react"
import "./App.css"
import { Database } from "./classes/Database"
import { Entry } from "./classes/Entry"
import { State } from "./classes/State"
import { User, UserTier } from "./classes/User"
import Router from "./components/Router"
class App extends React.Component {
    // state: State = new State([], {} as User)
    state: State = new State(
        [],
        new User("admin", "test", "password", UserTier.Admin, [
            new Database("one", "One", [
                new Entry("entry1", "Foo", 123, 1010, [
                    { key: "year", value: "2020" },
                    { key: "quality", value: "good" }
                ]),
                new Entry("entry2", "Bar", 2030, 2020, [
                    { key: "year", value: "2023" },
                    { key: "quality", value: "not good" }
                ])
            ]),
            new Database("two", "Two")
        ])
    )

    render() {
        return <Router state={this.state} />
    }
}

export default App
