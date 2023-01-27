import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Auth } from "../classes/Auth"

export default function Home() {
    const navigate = useNavigate()

    useEffect(() => {
        Auth.onRestrictedPageLoad(navigate)
    })

    return <>Home</>
}
