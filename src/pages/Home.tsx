import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Auth } from "../classes/Auth"
import { State } from "../classes/State"

export default function Home(props: { state: State }) {
    const state: State = props.state
    const navigate = useNavigate()

    useEffect(() => {
        Auth.onRestrictedPageLoad(navigate, state)
    }, [])

    return <>Home</>
}
