import { useEffect } from "react"
import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import styled from "styled-components"
import { Auth } from "../classes/Auth"
import Home from "../pages/Home"
import Landing from "../pages/Landing"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Footer from "./Footer"
import Header from "./Header"

export enum RoutePathName {
    Home = "/",
    Landing = "/landing",
    Login = "/login",
    Register = "/register"
}

export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            <PageBody>
                <Routes>
                    <Route path={RoutePathName.Home} element={<Home />} />
                    <Route path={RoutePathName.Landing} element={<Landing />} />
                    <Route path={RoutePathName.Login} element={<Login />} />
                    <Route
                        path={RoutePathName.Register}
                        element={<Register />}
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
