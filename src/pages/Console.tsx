import AtlasClientState from "../classes/AtlasClientState"
import ClientStateTree from "../components/console/ClientStateTree"

export default function Console(props: { state: AtlasClientState }) {
    const state = props.state

    return (
        <>
            <ClientStateTree state={state} />
        </>
    )
}
