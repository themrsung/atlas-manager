import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import AtlasClientState from "../../classes/client/AtlasClientState"
import Console from "../../pages/Console"
import Home from "../../pages/Home"
import Login from "../../pages/Login"
import Register from "../../pages/Register"
import { RouteNames } from "./RouteNames"

export default function Router(props: { state: AtlasClientState }) {
    const state = props.state

    return (
        <BrowserRouter>
            <Routes>
                <Route path={RouteNames.Home} element={<Home />} />
                <Route
                    path={RouteNames.Console}
                    element={<Console state={state} />}
                />
                <Route
                    path={RouteNames.Register}
                    element={<Register state={state} />}
                />
                <Route
                    path={RouteNames.Login}
                    element={<Login state={state} />}
                />
            </Routes>
        </BrowserRouter>
    )
}
