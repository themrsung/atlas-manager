import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Auth, HashPasswordVersion } from "../classes/Auth"
import { Database } from "../classes/Database"
import { Entry } from "../classes/Entry"
import { State } from "../classes/State"
import { User, UserTier } from "../classes/User"

export default function Home() {
    const navigate = useNavigate()

    useEffect(() => {
        Auth.onRestrictedPageLoad(navigate, new State([]))
    }, [])

    return <>Home</>
}
