import React, { useState } from "react"
import AtlasClientState from "../../classes/client/AtlasClientState"
import AtlasClientDatabase from "../../classes/client/AtlasClientDatabase"
import AtlasClientEntry from "../../classes/client/AtlasClientEntry"
import AtlasClientEntryProperty from "../../classes/client/AtlasClientEntryProperty"
import S from "../../style/components/console/DatabaseManagerStyles"
import StyleConventions from "../../style/StyleConventions"
import {
   DatabaseManagerHeaderTitleStyles as HTS,
   DatabaseManagerPropertyStyles as PS,
   DatabaseManagerEntryIdStyles as EIS,
   DatabaseManagerColumnTitleStyles as CTS
} from "../../style/components/console/DatabaseManagerStyles"

export default function DatabaseManager(props: {
   database: AtlasClientDatabase
   state: AtlasClientState
}) {
   const database: AtlasClientDatabase = props.database
   const state: AtlasClientState = props.state

   const keys: string[] = []

   //
   //
   //

   // Finds all keys in database and fills blank properties in entries so that every entry has the same set of properties.
   const onDatabaseManagerLoad = () => {
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
            const property = new AtlasClientEntryProperty(
               database.getReactComponent(),
               missingProperties[j],
               ""
            )

            // Add property to entry
            entry.addProperty(property)
         }
      }
   }

   // Do not use useEffect(). We are using a proprietary state management system.
   onDatabaseManagerLoad()

   //
   //
   //

   const [newColumnTitle, setNewColumnTitle] = useState<string>("")
   const addNewColumn = () => {
      if (newColumnTitle === "") return

      if (database.getEntries().length === 0) {
         const entry = database.addEntry(
            new AtlasClientEntry(database.getReactComponent())
         )

         entry.setId("newRow")
      }

      for (let i = 0; i < keys.length; i++) {
         if (keys[i].toLowerCase() === newColumnTitle.toLowerCase()) return
      }

      for (let i = 0; i < database.getEntries().length; i++) {
         database
            .getEntries()
            [i].addProperty(
               new AtlasClientEntryProperty(
                  database.getReactComponent(),
                  newColumnTitle,
                  ""
               )
            )
      }

      setNewColumnTitle("")
   }

   //
   //
   //

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
         .addEntry(new AtlasClientEntry(database.getReactComponent()))
         .setId(newRowTitle)

      setNewRowTitle("")
   }

   //
   //
   //

   return (
      <S.Wrap>
         <S.Header>
            <DatabaseManagerHeaderTitle database={database} state={state} />
         </S.Header>
         <S.Body>
            <S.Columns>
               <S.Column>
                  <S.ColumnTitle>ID</S.ColumnTitle>
                  {database.getEntries().map(entry => {
                     return (
                        <DatabaseManagerEntryId
                           key={entry.getId()}
                           entry={entry}
                           database={database}
                        />
                     )
                  })}
               </S.Column>
               {keys.map(key => {
                  return (
                     <S.Column key={key}>
                        <DatabaseManagerColumnTitle
                           key={key}
                           keyName={key}
                           keys={keys}
                           database={database}
                        />
                        {database.getEntries().map(entry => {
                           return (
                              <DatabaseManagerProperty
                                 key={entry.getId()}
                                 property={entry.getPropertyByKey(key)}
                              />
                           )
                        })}
                     </S.Column>
                  )
               })}
               <S.Column
                  style={{
                     marginBottom: "auto"
                  }}
               >
                  <S.NewColumnForm
                     onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault()
                        addNewColumn()
                     }}
                  >
                     <S.NewColumnInput
                        value={newColumnTitle}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                           setNewColumnTitle(e.currentTarget.value)
                        }}
                        placeholder="New column..."
                     />
                     <StyleConventions.SmallPositiveButton type="submit">
                        +
                     </StyleConventions.SmallPositiveButton>
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
                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setNewRowTitle(e.currentTarget.value)
                     }}
                     placeholder="New row..."
                  />
                  <StyleConventions.SmallPositiveButton type="submit">
                     +
                  </StyleConventions.SmallPositiveButton>
               </S.NewRowForm>
            </S.NewRowBar>
         </S.Body>
      </S.Wrap>
   )
}

//
//
//

function DatabaseManagerHeaderTitle(props: {
   database: AtlasClientDatabase
   state: AtlasClientState
}) {
   const database = props.database
   const state = props.state
   const databases = props.state.getDatabases()

   const [isEditing, setIsEditing] = useState<boolean>(false)
   const [newInput, setNewInput] = useState<string>(database.getId())

   const startEditing = () => {
      setIsEditing(true)
      setNewInput(database.getId())
   }

   const stopEditing = () => {
      setIsEditing(false)
      setNewInput("")
   }

   const onEditFormSubmitted = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (newInput === "") return

      for (let i = 0; i < databases.length; i++) {
         if (databases[i] !== database) {
            if (databases[i].getId().toLowerCase() === newInput.toLowerCase())
               return
         }
      }

      database.setId(newInput)

      stopEditing()
   }

   const onInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewInput(e.currentTarget.value)
   }

   const onDatabaseDeleteClicked = () => {
      if (
         window.confirm(
            "Do you really want to delete database " + database.getId()
         )
      ) {
         state.removeDatabase(database)
      }
   }

   return (
      <HTS.Wrap onClick={startEditing} onBlur={stopEditing}>
         {!isEditing ? (
            <>
               <S.HeaderTitle>{database.getId()}</S.HeaderTitle>
               <StyleConventions.SmallErrorButton
                  onClick={onDatabaseDeleteClicked}
               >
                  X
               </StyleConventions.SmallErrorButton>
            </>
         ) : (
            <HTS.EditForm onSubmit={onEditFormSubmitted}>
               <HTS.EditInput value={newInput} onChange={onInputChanged} />
            </HTS.EditForm>
         )}
      </HTS.Wrap>
   )
}

//
//
//

function DatabaseManagerProperty(props: {
   property: AtlasClientEntryProperty
}) {
   const property = props.property

   const [isEditing, setIsEditing] = useState<boolean>(false)
   const [newInput, setNewInput] = useState<string>(String(property.getValue()))

   const startEditing = () => {
      setIsEditing(true)
      setNewInput(String(property.getValue()))
   }

   const stopEditing = () => {
      setIsEditing(false)
      setNewInput("")
   }

   const onEditFormSubmitted = (e: React.FormEvent<HTMLFormElement>) => {
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

      stopEditing()
   }

   const onInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      setNewInput(e.currentTarget.value)
   }

   return (
      <PS.Wrap onClick={startEditing} onBlur={stopEditing}>
         {!isEditing ? (
            <PS.PropertyValue>
               {property.getValue() !== "" ? (
                  String(property.getValue())
               ) : (
                  <PS.NoValueText>no value</PS.NoValueText>
               )}
            </PS.PropertyValue>
         ) : (
            <PS.EditForm onSubmit={onEditFormSubmitted}>
               <PS.EditInput value={newInput} onChange={onInputChanged} />
            </PS.EditForm>
         )}
      </PS.Wrap>
   )
}

//
//
//

function DatabaseManagerEntryId(props: {
   entry: AtlasClientEntry
   database: AtlasClientDatabase
}) {
   const entry = props.entry
   const database = props.database

   const [isEditing, setIsEditing] = useState<boolean>(false)
   const [newInput, setNewInput] = useState<string>(entry.getId())

   const startEditing = () => {
      setIsEditing(true)
      setNewInput(entry.getId())
   }

   const stopEditing = () => {
      setIsEditing(false)
      setNewInput("")
   }

   const onEditFormSubmitted = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (newInput === "") return

      for (let i = 0; i < database.getEntries().length; i++) {
         if (entry !== database.getEntries()[i]) {
            if (
               newInput.toLowerCase() ===
               database.getEntries()[i].getId().toLowerCase()
            )
               return
         }
      }

      entry.setId(newInput)

      stopEditing()
   }

   const onInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewInput(e.currentTarget.value)
   }

   const onDeleteRow = () => {
      if (
         window.confirm(
            "Do you really want to delete row " + entry.getId() + "?"
         )
      ) {
         database.removeEntry(entry)
      }
   }

   return (
      <EIS.Wrap onClick={startEditing} onBlur={stopEditing}>
         {!isEditing ? (
            <EIS.EntryId>{entry.getId()}</EIS.EntryId>
         ) : (
            <EIS.EditForm onSubmit={onEditFormSubmitted}>
               <EIS.EditInput value={newInput} onChange={onInputChanged} />
            </EIS.EditForm>
         )}
         <StyleConventions.SmallErrorButton onClick={onDeleteRow}>
            X
         </StyleConventions.SmallErrorButton>
      </EIS.Wrap>
   )
}

//
//
//

function DatabaseManagerColumnTitle(props: {
   keyName: string
   keys: string[]
   database: AtlasClientDatabase
}) {
   const key = props.keyName
   const keys = props.keys
   const database = props.database

   const [isEditing, setIsEditing] = useState<boolean>(false)
   const [newInput, setNewInput] = useState<string>(key)

   const startEditing = () => {
      setIsEditing(true)
      setNewInput(key)
   }

   const stopEditing = () => {
      setIsEditing(false)
      setNewInput("")
   }

   const onEditFormSubmitted = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (newInput === "") return

      for (let i = 0; i < keys.length; i++) {
         if (keys[i] !== key) {
            if (keys[i].toLowerCase() === newInput.toLowerCase()) return
         }
      }

      const entries = database.getEntries()
      for (let i = 0; i < entries.length; i++) {
         entries[i].getPropertyByKey(key).setKey(newInput)
      }

      setIsEditing(false)
   }

   const onInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewInput(e.currentTarget.value)
   }

   const onDeleteColumn = () => {
      if (window.confirm("Do you really want to delete column " + key + "?")) {
         database.getEntries().forEach(entry => {
            entry.removePropertyByKey(key)
         })
      }
   }

   return (
      <CTS.Wrap
         style={{ cursor: "pointer" }}
         onClick={startEditing}
         onBlur={stopEditing}
      >
         {!isEditing ? (
            <S.ColumnTitle>{key}</S.ColumnTitle>
         ) : (
            <CTS.EditForm onSubmit={onEditFormSubmitted}>
               <CTS.EditInput value={newInput} onChange={onInputChanged} />
            </CTS.EditForm>
         )}
         <StyleConventions.SmallErrorButton onClick={onDeleteColumn}>
            X
         </StyleConventions.SmallErrorButton>
      </CTS.Wrap>
   )
}
