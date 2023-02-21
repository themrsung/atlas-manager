import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import AtlasClientState from "../classes/AtlasClientState"
import Console from "../pages/Console"

export default function Router(props: { state: AtlasClientState }) {
    const state = props.state

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Console state={state} />} />
            </Routes>
        </BrowserRouter>
    )
}
