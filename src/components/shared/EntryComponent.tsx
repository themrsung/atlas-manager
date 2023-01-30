import styled from "styled-components"
import { Entry } from "../../classes/Entry"

export default function EntryComponent(props: { entry: Entry }) {
    const entry = props.entry

    return (
        <EntryComponentWrap>
            <EntryProperty propertyKey="id" value={entry.getId()} />
            <EntryProperty propertyKey="name" value={entry.getName()} />
            <EntryProperty
                propertyKey="quantity"
                value={`${entry.getQuantity()}`}
            />
            <EntryProperty
                propertyKey="valuePerItem"
                value={`${entry.getValuePerItem()}`}
            />
            <EntryProperty
                propertyKey="totalValue"
                value={`${entry.getTotalValue()}`}
            />
            {entry.getCustomProperties().map((cp) => {
                return (
                    <EntryProperty
                        key={cp.key}
                        propertyKey={cp.key}
                        value={cp.value}
                    />
                )
            })}
        </EntryComponentWrap>
    )
}

const EntryComponentWrap = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
`

function EntryProperty(props: { propertyKey: string; value: string }) {
    const key = props.propertyKey
    const value = props.value

    return <EntryPropertyWrap>{value + ", "}</EntryPropertyWrap>
}

const EntryPropertyWrap = styled.p``
