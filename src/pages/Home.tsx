import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Auth } from "../classes/Auth"
import { State } from "../classes/State"

export default function Home(props: { state: State }) {
    const state: State = props.state
    const navigate = useNavigate()

    useEffect(() => {
        Auth.onRestrictedPageLoad(navigate, state)
    }, [])

    return (
        <HomeWrap>
            <div>
                <p>current user: {state.getCurrentUser().getId()}</p>
                <p>databases:</p>
                {state
                    .getCurrentUser()
                    .getDatabases()
                    .map((db) => {
                        return (
                            <p key={db.getId()}>
                                {db.getId()} - {db.getName()} (
                                {db.getEntries().length} entries)
                            </p>
                        )
                    })}
                <button
                    onClick={() => {
                        navigate("manage")
                    }}
                >
                    Manage Databases
                </button>
            </div>
        </HomeWrap>
    )
}

const HomeWrap = styled.div``
