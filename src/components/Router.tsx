import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Footer from "./Footer"
import Header from "./Header"

export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
