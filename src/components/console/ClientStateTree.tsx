import AtlasClientState from "../../classes/client/AtlasClientState"
import S from "../../style/components/console/ClientStateTreeStyles"

export default function ClientStateTree(props: { state: AtlasClientState }) {
    const state = props.state

    return (
        <S.Wrap>
            <h1>State</h1>
            <h2>- Databases</h2>
            {state.getDatabases().map(db => {
                return (
                    <div key={db.getId()}>
                        <h3>-- {db.getId()}</h3>

                        {db.getEntries().map(entry => {
                            return (
                                <div key={entry.getId()}>
                                    <h4>---- {entry.getId()}</h4>

                                    {entry.getProperties().map(property => {
                                        return (
                                            <div key={property.getKey()}>
                                                <h5>
                                                    ------- {property.getKey()}{" "}
                                                    : {property.getValue()}
                                                </h5>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </S.Wrap>
    )
}
