import React, { useState } from "react"
import "./App.css"
import { State } from "./classes/State"
import { User } from "./classes/User"
import Router from "./components/Router"

// function App() {
//     const [state, setState] = useState(new State([]))

//     console.log(state)
//     console.log("users", state.getUsers())
//     state.setUsers([new User("test", "test")])
//     console.log(state)

//     return (
//         <>
//             <Router />
//         </>
//     )
// }

class App extends React.Component {
    state = new State([])

    render() {
        this.state.setCurrentUser(new User("name", "nme"))
        console.log(this.state)
        return <Router />
    }
}

export default App
