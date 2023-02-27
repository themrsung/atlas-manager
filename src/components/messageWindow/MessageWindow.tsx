import AtlasClientState from "../../classes/client/AtlasClientState"
import { MessageWindowButtonType } from "../../classes/client/messageWindow/MessageWindowButtonProperties"

import S from "../../style/components/messageWindow/MessageWindowStyles"
import StyleConventions from "../../style/StyleConventions"

export default function MessageWindow(props: { state: AtlasClientState }) {
    const state = props.state
    const windowProps = props.state.getMessageWindowProperties()

    console.log(windowProps)

    if (windowProps?.getIsOpen()) {
        return (
            <S.Background>
                <S.Wrap onClick={() => {}}>
                    <S.Message>{windowProps.getMessage()}</S.Message>
                    {windowProps.getButtons().map(button => {
                        const onButtonClick = () => {
                            button.getCallback()()
                            state.setMessageWindowProperties()
                        }
                        switch (button.getType()) {
                            case MessageWindowButtonType.Primary:
                                return (
                                    <StyleConventions.MediumPrimaryButton
                                        onClick={onButtonClick}
                                    >
                                        {button.getText()}
                                    </StyleConventions.MediumPrimaryButton>
                                )

                            case MessageWindowButtonType.Secondary:
                                return (
                                    <StyleConventions.MediumSecondaryButton
                                        onClick={onButtonClick}
                                    >
                                        {button.getText()}
                                    </StyleConventions.MediumSecondaryButton>
                                )

                            case MessageWindowButtonType.Positive:
                                return (
                                    <StyleConventions.MediumPositiveButton
                                        onClick={onButtonClick}
                                    >
                                        {button.getText()}
                                    </StyleConventions.MediumPositiveButton>
                                )

                            case MessageWindowButtonType.Warning:
                                return (
                                    <StyleConventions.MediumWarningButton
                                        onClick={onButtonClick}
                                    >
                                        {button.getText()}
                                    </StyleConventions.MediumWarningButton>
                                )

                            case MessageWindowButtonType.Error:
                                return (
                                    <StyleConventions.MediumErrorButton
                                        onClick={onButtonClick}
                                    >
                                        {button.getText()}
                                    </StyleConventions.MediumErrorButton>
                                )

                            default:
                                return (
                                    <StyleConventions.MediumSecondaryButton
                                        onClick={onButtonClick}
                                    >
                                        {button.getText()}
                                    </StyleConventions.MediumSecondaryButton>
                                )
                        }
                    })}
                </S.Wrap>
            </S.Background>
        )
    }

    return <></>
}
