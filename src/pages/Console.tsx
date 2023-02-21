import AtlasClientState from "../classes/AtlasClientState"
import ClientStateTree from "../components/console/ClientStateTree"
import { StyleConventions } from "../style/StyleConventions"

export default function Console(props: { state: AtlasClientState }) {
    const state = props.state

    return (
        <>
            <ClientStateTree state={state} />
            <StyleConventions.LargeErrorButton>
                Large Error
            </StyleConventions.LargeErrorButton>
            <StyleConventions.MediumErrorButton>
                Medium Error
            </StyleConventions.MediumErrorButton>
            <StyleConventions.SmallErrorButton>
                Small Error
            </StyleConventions.SmallErrorButton>
            <StyleConventions.LargePrimaryButton>
                Large Primary
            </StyleConventions.LargePrimaryButton>
            <StyleConventions.LargeSecondaryButton>
                Large Secondary
            </StyleConventions.LargeSecondaryButton>
        </>
    )
}
