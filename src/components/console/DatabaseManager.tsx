import React, { useEffect, useState } from "react"
import AtlasClientState from "../../classes/AtlasClientState"
import Database from "../../classes/Database"
import Entry from "../../classes/Entry"
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

    const [newColumnTitle, setNewColumnTitle] = useState<string>("")
    const addNewColumn = () => {
        if (newColumnTitle === "") return
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].toLowerCase() === newColumnTitle.toLowerCase()) return
        }

        for (let i = 0; i < database.getEntries().length; i++) {
            database
                .getEntries()
                [i].addProperty(
                    new EntryProperty(
                        database.getReactComponent(),
                        newColumnTitle,
                        ""
                    )
                )
        }

        setNewColumnTitle("")
    }

    const [newRowTitle, setNewRowTitle] = useState<string>("")
    const addNewRow = () => {
        if (newRowTitle === "") return
        for (let i = 0; i < database.getEntries().length; i++) {
            if (
                database.getEntries()[i].getId().toLowerCase() ===
                newRowTitle.toLowerCase()
            )
                return
        }

        database
            .addEntry(new Entry(database.getReactComponent()))
            .setId(newRowTitle)

        setNewRowTitle("")
    }

    return (
        <S.Wrap>
            <S.Header>
                <S.HeaderTitle>{database.getId()}</S.HeaderTitle>
            </S.Header>
            <S.Body>
                <S.Columns>
                    <S.Column>
                        <S.ColumnTitle>ID</S.ColumnTitle>
                        {database.getEntries().map(entry => {
                            return (
                                <DatabaseManagerEntryId
                                    entry={entry}
                                    database={database}
                                />
                            )
                        })}
                    </S.Column>
                    {keys.map(key => {
                        return (
                            <S.Column>
                                <DatabaseManagerColumnTitle
                                    keyName={key}
                                    keys={keys}
                                    database={database}
                                />
                                {database.getEntries().map(entry => {
                                    return (
                                        <DatabaseManagerProperty
                                            property={entry.getPropertyByKey(
                                                key
                                            )}
                                        />
                                    )
                                })}
                            </S.Column>
                        )
                    })}
                    <S.Column style={{ marginBottom: "auto" }}>
                        <S.NewColumnForm
                            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                                e.preventDefault()
                                addNewColumn()
                            }}
                        >
                            <S.NewColumnInput
                                value={newColumnTitle}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    setNewColumnTitle(e.currentTarget.value)
                                }}
                                placeholder="New column..."
                            />
                            <StyleConventions.SmallPrimaryButton type="submit">
                                +
                            </StyleConventions.SmallPrimaryButton>
                        </S.NewColumnForm>
                    </S.Column>
                </S.Columns>
                <S.NewRowBar>
                    <S.NewRowForm
                        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                            e.preventDefault()
                            addNewRow()
                        }}
                    >
                        <S.NewRowInput
                            value={newRowTitle}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setNewRowTitle(e.currentTarget.value)
                            }}
                            placeholder="New row..."
                        />
                        <StyleConventions.SmallPrimaryButton type="submit">
                            +
                        </StyleConventions.SmallPrimaryButton>
                    </S.NewRowForm>
                </S.NewRowBar>
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
            onBlur={() => {
                setIsEditing(false)
                setNewInput("")
            }}
            style={{ cursor: "pointer" }}
        >
            {!isEditing ? (
                <p>
                    {property.getValue() !== "" ? (
                        String(property.getValue())
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

function DatabaseManagerEntryId(props: { entry: Entry; database: Database }) {
    const entry = props.entry
    const database = props.database

    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [newInput, setNewInput] = useState<string>(entry.getId())

    return (
        <div
            onClick={() => {
                setIsEditing(true)
            }}
            onBlur={() => {
                setIsEditing(false)
                setNewInput("")
            }}
            style={{ cursor: "pointer", display: "flex" }}
        >
            {!isEditing ? (
                <p>{entry.getId()}</p>
            ) : (
                <form
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault()

                        if (newInput === "") return

                        for (let i = 0; i < database.getEntries().length; i++) {
                            if (entry !== database.getEntries()[i]) {
                                if (
                                    newInput.toLowerCase() ===
                                    database
                                        .getEntries()
                                        [i].getId()
                                        .toLowerCase()
                                )
                                    return
                            }
                        }

                        entry.setId(newInput)

                        setIsEditing(false)
                    }}
                >
                    <input
                        value={newInput}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setNewInput(e.currentTarget.value)
                        }}
                    />
                </form>
            )}
            <StyleConventions.SmallErrorButton
                onClick={() => {
                    if (
                        window.confirm(
                            "Do you really want to delete row " +
                                entry.getId() +
                                "?"
                        )
                    ) {
                        database.removeEntry(entry)
                    }
                }}
            >
                X
            </StyleConventions.SmallErrorButton>
        </div>
    )
}

function DatabaseManagerColumnTitle(props: {
    keyName: string
    keys: string[]
    database: Database
}) {
    const key = props.keyName
    const keys = props.keys
    const database = props.database

    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [newInput, setNewInput] = useState<string>(key)

    return (
        <div
            style={{ cursor: "pointer" }}
            onClick={() => {
                setIsEditing(true)
            }}
            onBlur={() => {
                setIsEditing(false)
                setNewInput("")
            }}
        >
            {!isEditing ? (
                <S.ColumnTitle>{key}</S.ColumnTitle>
            ) : (
                <form
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault()

                        if (newInput === "") return

                        for (let i = 0; i < keys.length; i++) {
                            if (keys[i] !== key) {
                                if (
                                    keys[i].toLowerCase() ===
                                    newInput.toLowerCase()
                                )
                                    return
                            }
                        }

                        const entries = database.getEntries()
                        for (let i = 0; i < entries.length; i++) {
                            entries[i].getPropertyByKey(key).setKey(newInput)
                        }

                        setIsEditing(false)
                    }}
                >
                    <input
                        value={newInput}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setNewInput(e.currentTarget.value)
                        }}
                    />
                </form>
            )}
            <StyleConventions.SmallErrorButton
                onClick={() => {
                    if (
                        window.confirm(
                            "Do you really want to delete column " + key + "?"
                        )
                    ) {
                        database.getEntries().forEach(entry => {
                            entry.removePropertyByKey(key)
                        })
                    }
                }}
            >
                X
            </StyleConventions.SmallErrorButton>
        </div>
    )
}
