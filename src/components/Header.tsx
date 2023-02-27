import { useNavigate } from "react-router-dom"
import AtlasClientState from "../classes/client/AtlasClientState"
import S from "../style/components/HeaderStyles"
import StyleConventions from "../style/StyleConventions"
import { RouteNames } from "./router/RouteNames"

export default function Header(props: { state: AtlasClientState }) {
   const state = props.state
   const navigate = useNavigate()

   return (
      <S.Wrap>
         <S.Left></S.Left>
         <S.Right>
            <StyleConventions.MediumPrimaryButton
               onClick={() => {
                  navigate(RouteNames.Home)
               }}
            >
               Home
            </StyleConventions.MediumPrimaryButton>
            <StyleConventions.MediumPrimaryButton
               onClick={() => {
                  navigate(RouteNames.Console)
               }}
            >
               Console
            </StyleConventions.MediumPrimaryButton>

            {!state.getCurrentUser() ? (
               <>
                  <StyleConventions.MediumPrimaryButton
                     onClick={() => {
                        navigate(RouteNames.Login)
                     }}
                  >
                     Login
                  </StyleConventions.MediumPrimaryButton>
                  <StyleConventions.MediumPrimaryButton
                     onClick={() => {
                        navigate(RouteNames.Register)
                     }}
                  >
                     Register
                  </StyleConventions.MediumPrimaryButton>
               </>
            ) : (
               <StyleConventions.MediumWarningButton
                  onClick={() => {
                     state.logout()
                     navigate(RouteNames.Home)
                  }}
               >
                  Logout
               </StyleConventions.MediumWarningButton>
            )}
         </S.Right>
      </S.Wrap>
   )
}
