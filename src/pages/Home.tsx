import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Auth } from "../classes/Auth"
import { User } from "../classes/User"

export default function Home() {
    const navigate = useNavigate()

    const [users, setUsers] = useState<User[]>([])
    const fetchUsers = async () => {
        const res = await axios.get("http://localhost:5000/users")
        setUsers(res.data as User[])
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    useEffect(() => {
        Auth.onRestrictedPageLoad(navigate)
    }, [])

    console.log(users)

    return <>Home</>
}
