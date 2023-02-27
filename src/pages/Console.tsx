import AtlasClientState from "../classes/client/AtlasClientState"
import ConsoleHeader from "../components/console/ConsoleHeader"
import DatabaseManager from "../components/console/DatabaseManager"
import S from "../style/pages/ConsoleStyles"

export default function Console(props: { state: AtlasClientState }) {
   const state = props.state

   return (
      <S.Wrap>
         <ConsoleHeader state={state} />
         {/* <ClientStateTree state={state} /> */}
         {state.getDatabases().map(db => {
            return (
               <DatabaseManager key={db.getId()} database={db} state={state} />
            )
         })}
      </S.Wrap>
   )
}
