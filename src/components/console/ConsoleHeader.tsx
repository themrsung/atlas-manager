import AtlasClientState from "../../classes/client/AtlasClientState"
import S from "../../style/components/console/ConsoleHeaderStyles"
import StyleConventions from "../../style/StyleConventions"
import { useState } from "react"
import AtlasClientDatabase from "../../classes/client/AtlasClientDatabase"

export default function ConsoleHeader(props: { state: AtlasClientState }) {
    const state = props.state

    const [newDatabaseId, setNewDatabaseId] = useState<string>("")

    const onNewDatabaseFormSubmitted = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault()

        if (newDatabaseId === "") return
        for (let i = 0; i < state.getDatabases().length; i++) {
            if (
                state.getDatabases()[i].getId().toLowerCase() ===
                newDatabaseId.toLowerCase()
            )
                return
        }

        const database = state.addDatabase(
            new AtlasClientDatabase(state.getReactComponent())
        )
        database.setId(newDatabaseId)
    }

    return (
        <S.Wrap>
            {!state.getCurrentUser() && (
                <StyleConventions.LargeErrorButton>
                    YOU ARE NOT LOGGED IN. THIS DATA WILL NOT BE SAVED.
                </StyleConventions.LargeErrorButton>
            )}
            <StyleConventions.LargePositiveButton
                onClick={() => {
                    state.pushDatabasesToServer()
                }}
            >
                Save
            </StyleConventions.LargePositiveButton>

            <S.NewDatabaseForm onSubmit={onNewDatabaseFormSubmitted}>
                <S.NewDatabaseInput
                    value={newDatabaseId}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setNewDatabaseId(e.currentTarget.value)
                    }}
                />

                <StyleConventions.LargeSecondaryButton type="submit">
                    New Database
                </StyleConventions.LargeSecondaryButton>
            </S.NewDatabaseForm>
        </S.Wrap>
    )
}
