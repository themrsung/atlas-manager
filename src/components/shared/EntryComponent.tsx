import { isEditable } from "@testing-library/user-event/dist/utils"
import React, { useState } from "react"
import styled from "styled-components"
import { CustomEntryProperty, Entry } from "../../classes/Entry"

export default function EntryComponent(props: { entry: Entry }) {
    const entry = props.entry

    return (
        <EntryComponentWrap>
            <EntryProperty
                propertyKey="id"
                value={entry.getId()}
                entry={entry}
                isEditable={false}
            />
            <EntryProperty
                propertyKey="name"
                value={entry.getName()}
                entry={entry}
                isEditable
            />
            <EntryProperty
                propertyKey="quantity"
                value={`${entry.getQuantity()}`}
                entry={entry}
                isEditable
            />
            <EntryProperty
                propertyKey="valuePerItem"
                value={`${entry.getValuePerItem()}`}
                entry={entry}
                isEditable
            />
            <EntryProperty
                propertyKey="totalValue"
                value={`${entry.getTotalValue()}`}
                entry={entry}
                isEditable={false}
            />
            {entry.getCustomProperties().map((cp) => {
                return (
                    <EntryProperty
                        key={cp.key}
                        propertyKey={cp.key}
                        value={cp.value}
                        entry={entry}
                        isEditable
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

function EntryProperty(props: {
    propertyKey: string
    value: string
    entry: Entry
    isEditable: boolean
}) {
    const key = props.propertyKey
    const value = props.value
    const entry = props.entry
    const isEditable = props.isEditable
    const setter = (newValue: string) => {
        switch (key) {
            case "name":
                entry.setName(newValue)
                break
            case "quantity":
                entry.setQuantity(Number(newValue))
                break
            case "valuePerItem":
                entry.setValuePerItem(Number(newValue))
                break
            default:
                entry.setCustomProperty({ key: key, value: newValue })
                break
        }
    }

    const [isEditButtonVisible, setIsEditButtonVisible] =
        useState<boolean>(false)
    const [isEditingProperty, setIsEditingProperty] = useState<boolean>(false)

    const [newPropertyValue, setNewPropertyValue] = useState<string>("")

    const onEditButtonClicked = () => {
        if (isEditingProperty) {
            setter(newPropertyValue)
        } else {
            setNewPropertyValue(value)
        }

        setIsEditingProperty(!isEditingProperty)
    }

    return (
        <EntryPropertyWrap
            onMouseEnter={() => {
                setIsEditButtonVisible(true && isEditable)
            }}
            onMouseLeave={() => {
                setIsEditButtonVisible(false)
            }}
        >
            {!isEditingProperty ? (
                <EntryPropertyP>{value}</EntryPropertyP>
            ) : (
                <EntryPropertyInput
                    value={newPropertyValue}
                    onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        setNewPropertyValue(e.currentTarget.value)
                    }}
                />
            )}
            {isEditButtonVisible && (
                <EntryPropertyEditButton onClick={onEditButtonClicked}>
                    E
                </EntryPropertyEditButton>
            )}
        </EntryPropertyWrap>
    )
}

const EntryPropertyWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;

    width: 110px;

    margin-right: 1%;
`

const EntryPropertyP = styled.p`
    width: 100px;
`

const EntryPropertyInput = styled.input`
    width: 100px;
`
const EntryPropertyEditButton = styled.button`
    width: 10px;
`
