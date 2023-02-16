import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Auth } from "../classes/Auth"
import { State } from "../classes/State"
import { RouterPathName } from "../components/Router"

export default function Home(props: { state: State }) {
    const state: State = props.state
    const navigate = useNavigate()

    useEffect(() => {
        Auth.onRestrictedPageLoad(navigate, state)
    }, [])

    return Object.keys(state.getCurrentUser()).length > 0 ? (
        <HomeWrap>
            <HomeHeader>
                <h3>Current User: {state.getCurrentUser().getId()}</h3>
            </HomeHeader>
            <HomeBody>
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
                        navigate(RouterPathName.Manage)
                    }}
                >
                    Manage Databases
                </button>
            </HomeBody>
        </HomeWrap>
    ) : (
        <>Not logged in</>
    )
}

const HomeWrap = styled.div``

const HomeHeader = styled.div`
    width: 100%;
    height: 10vh;

    background-color: red;
    color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const HomeBody = styled.div`
    margin: auto;

    width: 70%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;

    & > * {
        margin-right: auto;
    }
`
