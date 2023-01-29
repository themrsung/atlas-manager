import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { State } from "../classes/State"
import { Auth } from "../classes/Auth"

export default function Manage() {
    const navigate = useNavigate()

    useEffect(() => {
        Auth.onRestrictedPageLoad(navigate, new State([]))
    }, [])
    return <>Manage</>
}
