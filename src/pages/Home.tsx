import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Auth } from "../classes/Auth"
import { State } from "../classes/State"

export default function Home() {
    const navigate = useNavigate()

    useEffect(() => {
        Auth.onRestrictedPageLoad(navigate, new State([]))
    }, [])

    return <>Home</>
}
