import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Auth } from "../classes/Auth"
import { State } from "../classes/State"

export default function Home() {
    const navigate = useNavigate()

    const [atlasState, setAtlasState] = useState<State>({} as State)
    const fetchUsers = async () => {
        const res = await axios.get("http://localhost:5000/state")
        setAtlasState(res.data as State)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    useEffect(() => {
        Auth.onRestrictedPageLoad(navigate)
    }, [])

    console.log(atlasState)

    return <>Home</>
}
