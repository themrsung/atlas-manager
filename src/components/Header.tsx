import { useNavigate } from "react-router-dom"
import AtlasClientState from "../classes/client/AtlasClientState"
import S from "../style/components/HeaderStyles"
import StyleConventions from "../style/StyleConventions"
import { RouteNames } from "./router/RouteNames"
import darkLogoOnly from "../assets/logos/darkLogoOnly.svg"
import MessageWindowProperties from "../classes/client/messageWindow/MessageWindowProperties"
import MessageWindowButtonProperties from "../classes/client/messageWindow/MessageWindowButtonProperties"
import { MessageWindowButtonType } from "../classes/client/messageWindow/MessageWindowButtonProperties"

export default function Header(props: { state: AtlasClientState }) {
    const state = props.state
    const navigate = useNavigate()

    return (
        <S.Wrap>
            <S.Left
                onClick={() => {
                    navigate(RouteNames.Home)
                }}
            >
                <S.Logo src={darkLogoOnly} alt="Atlas Logo" />
                <S.Title>Atlas Manager</S.Title>
            </S.Left>
            <S.Right>
                <StyleConventions.LargePositiveButton
                    onClick={() => {
                        state.setMessageWindowProperties(
                            new MessageWindowProperties(
                                state.getReactComponent(),
                                true,
                                "TESTTETSETSET",
                                [
                                    new MessageWindowButtonProperties(
                                        state.getReactComponent(),
                                        "button 1",
                                        () => {
                                            alert("1")
                                        },
                                        MessageWindowButtonType.Primary
                                    ),
                                    new MessageWindowButtonProperties(
                                        state.getReactComponent(),
                                        "button 2",
                                        () => {
                                            alert("2")
                                        },
                                        MessageWindowButtonType.Error
                                    )
                                ]
                            )
                        )
                    }}
                >
                    TEST
                </StyleConventions.LargePositiveButton>
                <StyleConventions.MediumSecondaryButton
                    onClick={() => {
                        navigate(RouteNames.Home)
                    }}
                >
                    Home
                </StyleConventions.MediumSecondaryButton>
                <StyleConventions.MediumSecondaryButton
                    onClick={() => {
                        navigate(RouteNames.Console)
                    }}
                >
                    Console
                </StyleConventions.MediumSecondaryButton>

                {!state.getCurrentUser() ? (
                    <>
                        <StyleConventions.MediumSecondaryButton
                            onClick={() => {
                                navigate(RouteNames.Login)
                            }}
                        >
                            Login
                        </StyleConventions.MediumSecondaryButton>
                        <StyleConventions.MediumSecondaryButton
                            onClick={() => {
                                navigate(RouteNames.Register)
                            }}
                        >
                            Register
                        </StyleConventions.MediumSecondaryButton>
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
