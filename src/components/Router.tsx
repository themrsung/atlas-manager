import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import styled from "styled-components"
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

export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            <PageBody>
                <Routes>
                    <Route path={RouterPathName.Home} element={<Home />} />
                    <Route
                        path={RouterPathName.Landing}
                        element={<Landing />}
                    />
                    <Route path={RouterPathName.Login} element={<Login />} />
                    <Route
                        path={RouterPathName.Register}
                        element={<Register />}
                    />
                    <Route path={RouterPathName.Manage} element={<Manage />} />
                </Routes>
            </PageBody>
            <Footer />
        </BrowserRouter>
    )
}

const PageBody = styled.div`
    width: 100%;
`
