import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import AtlasClientState from "../../classes/client/AtlasClientState"
import Console from "../../pages/Console"
import EndUserLicenseAgreement from "../../pages/EndUserLicenseAgreement"
import Home from "../../pages/Home"
import Login from "../../pages/Login"
import PrivacyPolicy from "../../pages/PrivacyPolicy"
import Register from "../../pages/Register"
import TermsOfService from "../../pages/TermsOfService"
import Header from "../Header"
import { RouteNames } from "./RouteNames"

export default function Router(props: { state: AtlasClientState }) {
   const state = props.state

   return (
      <BrowserRouter>
         <Header state={state} />
         <Routes>
            <Route path={RouteNames.Home} element={<Home state={state} />} />
            <Route
               path={RouteNames.Console}
               element={<Console state={state} />}
            />
            <Route
               path={RouteNames.Register}
               element={<Register state={state} />}
            />
            <Route path={RouteNames.Login} element={<Login state={state} />} />
            <Route
               path={RouteNames.TermsOfService}
               element={<TermsOfService />}
            />
            <Route
               path={RouteNames.PrivacyPolicy}
               element={<PrivacyPolicy />}
            />
            <Route
               path={RouteNames.EndUserLicenseAgreement}
               element={<EndUserLicenseAgreement />}
            />
         </Routes>
      </BrowserRouter>
   )
}
