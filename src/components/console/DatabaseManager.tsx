import React, { useEffect, useState } from "react"
import AtlasClientState from "../../classes/AtlasClientState"
import Database from "../../classes/Database"
import EntryProperty from "../../classes/EntryProperty"
import S from "../../style/components/console/DatabaseManagerStyles"
import StyleConventions from "../../style/StyleConventions"

export default function DatabaseManager(props: { database: Database }) {
    const database: Database = props.database

    const keys: string[] = []

    // Loop through all entries
    for (let i = 0; i < database.getEntries().length; i++) {
        const entry = database.getEntries()[i]

        // Loop through all properties
        for (let j = 0; j < entry.getProperties().length; j++) {
            const property = entry.getProperties()[j]

            // Add key to list if not already found
            if (!keys.includes(property.getKey())) {
                keys.push(property.getKey())
            }
        }
    }

    // Add properties with blank values for missing keys
    // Loop through all entries
    for (let i = 0; i < database.getEntries().length; i++) {
        const entry = database.getEntries()[i]

        // Find missing properties
        let missingProperties: string[] = keys
        // Loop through existing properties
        for (let j = 0; j < entry.getProperties().length; j++) {
            const property = entry.getProperties()[j]
            // Remove key from missingProperties if property exists
            missingProperties = missingProperties.filter(
                mp => mp !== property.getKey()
            )
        }

        // Loop through missing properties
        for (let j = 0; j < missingProperties.length; j++) {
            // Create property with blank value
            const property = new EntryProperty(
                database.getReactComponent(),
                missingProperties[j],
                ""
            )

            // Add property to entry
            entry.addProperty(property)
        }
    }

    return (
        <S.Wrap>
            <S.Header>
                <S.HeaderTitle>{database.getId()}</S.HeaderTitle>
            </S.Header>
            <S.Body>
                <S.Column>
                    <S.ColumnTitle>ID</S.ColumnTitle>
                    {database.getEntries().map(entry => {
                        return <p key={entry.getId()}>{entry.getId()}</p>
                    })}
                </S.Column>
                {keys.map(key => {
                    return (
                        <S.Column>
                            <S.ColumnTitle>{key}</S.ColumnTitle>
                            {database.getEntries().map(entry => {
                                return (
                                    <DatabaseManagerProperty
                                        property={entry.getPropertyByKey(key)}
                                    />
                                )
                            })}
                        </S.Column>
                    )
                })}
            </S.Body>
        </S.Wrap>
    )
}

function DatabaseManagerProperty(props: { property: EntryProperty }) {
    const property = props.property

    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [newInput, setNewInput] = useState<string>(
        String(property.getValue())
    )

    return (
        <div
            onClick={() => {
                setIsEditing(true)
            }}
            style={{ cursor: "pointer" }}
        >
            {!isEditing ? (
                <p>
                    {property.getValue() !== "" ? (
                        property.getValue()
                    ) : (
                        <span style={{ color: StyleConventions.errorColor }}>
                            no value
                        </span>
                    )}{" "}
                    <span
                        style={{
                            fontSize: "8px",
                            color: StyleConventions.secondaryColor
                        }}
                    >
                        {typeof property.getValue()}
                    </span>
                </p>
            ) : (
                <form
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault()

                        if (Number(newInput)) {
                            property.setValue(Number(newInput))
                        } else if (newInput === "true") {
                            property.setValue(true)
                        } else if (newInput === "false") {
                            property.setValue(false)
                        } else {
                            property.setValue(newInput)
                        }

                        setIsEditing(false)
                    }}
                >
                    <input
                        value={newInput}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            e.preventDefault()
                            setNewInput(e.currentTarget.value)
                        }}
                    />
                </form>
            )}
        </div>
    )
}
