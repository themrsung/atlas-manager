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
            <StyleConventions.LargePrimaryButton
                onClick={() => {
                    navigate(RouteNames.Home)
                }}
            >
                Home
            </StyleConventions.LargePrimaryButton>
            <StyleConventions.LargePrimaryButton
                onClick={() => {
                    navigate(RouteNames.Console)
                }}
            >
                Console
            </StyleConventions.LargePrimaryButton>

            {!state.getCurrentUser() ? (
                <>
                    <StyleConventions.LargePrimaryButton
                        onClick={() => {
                            navigate(RouteNames.Login)
                        }}
                    >
                        Login
                    </StyleConventions.LargePrimaryButton>
                    <StyleConventions.LargePrimaryButton
                        onClick={() => {
                            navigate(RouteNames.Register)
                        }}
                    >
                        Register
                    </StyleConventions.LargePrimaryButton>
                </>
            ) : (
                <StyleConventions.LargeWarningButton
                    onClick={() => {
                        state.logout()
                        navigate(RouteNames.Home)
                    }}
                >
                    Logout
                </StyleConventions.LargeWarningButton>
            )}
        </S.Wrap>
    )
}
