import AtlasClientState from "../classes/client/AtlasClientState"
import S from "../style/pages/HomeStyles"

export default function Home(props: { state: AtlasClientState }) {
    const state = props.state

    return (
        <S.Wrap>
            {state.getCurrentUser() ? (
                <p>Welcome, {state.getCurrentUser()?.getDisplayName()}!</p>
            ) : (
                <p>Welcome to Atlas Manager!</p>
            )}
        </S.Wrap>
    )
}
