import { useNavigate } from "react-router-dom"
import {
    useEffect,
    useState,
    Dispatch,
    SetStateAction,
    SyntheticEvent
} from "react"
import { State } from "../classes/State"
import { Auth } from "../classes/Auth"
import styled from "styled-components"
import EntryComponent from "../components/shared/EntryComponent"

export default function Manage(props: { state: State }) {
    const state: State = props.state
    const navigate = useNavigate()

    const [currentDatabaseId, setCurrentDatabaseId] = useState<string>("")

    useEffect(() => {
        Auth.onRestrictedPageLoad(navigate, state)
    }, [])

    useEffect(() => {
        if (state.getCurrentUser().getDatabases().length > 0) {
            setCurrentDatabaseId(
                state.getCurrentUser().getDatabases()[0].getId()
            )
        }
    }, [])

    return (
        <ManageWrap>
            <ManageLeft></ManageLeft>
            <ManageRight>
                <ManageHeader
                    state={state}
                    currentDatabaseId={currentDatabaseId}
                    setCurrentDatabaseId={setCurrentDatabaseId}
                />
                <ManageConsole
                    state={state}
                    currentDatabaseId={currentDatabaseId}
                    setCurrentDatabaseId={setCurrentDatabaseId}
                />
            </ManageRight>
        </ManageWrap>
    )
}

const ManageWrap = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const ManageLeft = styled.div`
    margin-right: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ManageRight = styled.div`
    margin-left: auto;
    min-width: 80%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

function ManageHeader(props: {
    state: State
    currentDatabaseId: string
    setCurrentDatabaseId: Dispatch<SetStateAction<string>>
}) {
    const state = props.state
    const currentDatabaseId = props.currentDatabaseId
    const setCurrentDatabaseId = props.setCurrentDatabaseId

    const onCurrentDatabaseSelect = (e: SyntheticEvent<HTMLSelectElement>) => {
        setCurrentDatabaseId(e.currentTarget.value)
    }

    return (
        <ManageHeaderWrap>
            <ManageHeaderDatabaseSelectWrap>
                <ManageHeaderDatabaseSelectLabel>
                    Current Database
                </ManageHeaderDatabaseSelectLabel>
                <div>
                    {/* @TODO please fix this */}
                    <button
                        onClick={async () => {
                            const dbId = currentDatabaseId
                            setCurrentDatabaseId("")
                            setTimeout(() => {
                                setCurrentDatabaseId(dbId)
                            }, 10)
                        }}
                    >
                        refresh
                    </button>
                </div>
                <ManageHeaderDatabaseSelect
                    name="Database"
                    onChange={onCurrentDatabaseSelect}
                >
                    {state
                        .getCurrentUser()
                        .getDatabases()
                        .map((db) => {
                            return (
                                <option key={db.getId()} value={db.getId()}>
                                    {db.getName()}
                                </option>
                            )
                        })}
                </ManageHeaderDatabaseSelect>
            </ManageHeaderDatabaseSelectWrap>
        </ManageHeaderWrap>
    )
}

const ManageHeaderWrap = styled.div`
    width: 100%;
    min-height: 20vh;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
`

const ManageHeaderDatabaseSelectWrap = styled.div`
    margin-right: auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
`

const ManageHeaderDatabaseSelectLabel = styled.p``

const ManageHeaderDatabaseSelect = styled.select``

function ManageConsole(props: {
    state: State
    currentDatabaseId: string
    setCurrentDatabaseId: Dispatch<SetStateAction<string>>
}) {
    const state = props.state
    const currentDatabaseId = props.currentDatabaseId
    const setCurrentDatabaseId = props.setCurrentDatabaseId

    return currentDatabaseId !== "" ? (
        <ManageConsoleWrap>
            {currentDatabaseId !== "" &&
                state
                    .getCurrentUser()
                    .getDatabaseById(currentDatabaseId)
                    .getEntries()
                    .map((e) => {
                        return <EntryComponent key={e.getId()} entry={e} />
                    })}
        </ManageConsoleWrap>
    ) : (
        <ManageConsoleWrap>not found</ManageConsoleWrap>
    )
}

const ManageConsoleWrap = styled.div`
    width: 100%;
`
