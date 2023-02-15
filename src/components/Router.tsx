import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import styled from "styled-components"
import { State } from "../classes/State"
import Home from "../pages/Home"
import Landing from "../pages/Landing"
import Login from "../pages/Login"
import Manage from "../pages/Manage"
import Register from "../pages/Register"
import Footer from "./Footer"
import Header from "./Header"

export enum RouterPathName {
    Home = "/",
    Landing = "/landing",
    Login = "/login",
    Register = "/register",
    Manage = "/manage"
}

export default function Router(props: { state: State }) {
    const state: State = props.state

    return (
        <BrowserRouter>
            <Header />
            <PageBody>
                <Routes>
                    <Route
                        path={RouterPathName.Home}
                        element={<Home state={state} />}
                    />
                    <Route
                        path={RouterPathName.Landing}
                        element={<Landing />}
                    />
                    <Route
                        path={RouterPathName.Login}
                        element={<Login state={state} />}
                    />
                    <Route
                        path={RouterPathName.Register}
                        element={<Register state={state} />}
                    />
                    <Route
                        path={RouterPathName.Manage}
                        element={<Manage state={state} />}
                    />
                </Routes>
            </PageBody>
            <Footer />
        </BrowserRouter>
    )
}

const PageBody = styled.div`
    width: 100%;
`
