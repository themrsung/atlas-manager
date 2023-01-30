import React from "react"
import "./App.css"
import { State } from "./classes/State"
import { User } from "./classes/User"
import Router from "./components/Router"

export enum RouterPathName {
    Home = "/",
    Landing = "/landing",
    Login = "/login",
    Register = "/register",
    Manage = "/manage"
}
class App extends React.Component {
    state: State = new State([], {} as User)

    render() {
        console.log(this.state)
        return <Router state={this.state} />
    }
}

export default App
