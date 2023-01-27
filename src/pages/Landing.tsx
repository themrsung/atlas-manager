import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { RoutePathName } from "../components/Router"
import { SecondaryButton } from "../components/shared/Buttons"

export default function Landing() {
    const navigate = useNavigate()

    const onSignUpClick = () => {
        navigate(RoutePathName.register)
    }

    const onLoginClick = () => {
        navigate(RoutePathName.login)
    }

    return (
        <LandingBackground>
            <LandingBackgroundBlurFilter>
                <LandingWrap>
                    <LandingLeft>
                        <LandingLeftTitle>
                            A better way to sort your inventory.
                        </LandingLeftTitle>
                    </LandingLeft>
                    <LandingRight>
                        <LandingRightTitle>Try out Atlas!</LandingRightTitle>
                        <LandingRightButtonBox>
                            <SecondaryButton onClick={onSignUpClick}>
                                Sign Up
                            </SecondaryButton>
                            <SecondaryButton onClick={onLoginClick}>
                                Login
                            </SecondaryButton>
                        </LandingRightButtonBox>
                    </LandingRight>
                </LandingWrap>
            </LandingBackgroundBlurFilter>
        </LandingBackground>
    )
}

const LandingBackground = styled.div`
    width: 100%;
    height: 100%;

    background-image: url("/landing/atlas-landing.png");
    background-size: cover;
    background-position: center;
`

const LandingBackgroundBlurFilter = styled.div`
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.55);
`

const LandingWrap = styled.div`
    min-width: 70%;
    max-width: 1000px;
    min-height: 90vh;

    margin: auto;

    color: white;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
`
const LandingLeft = styled.div`
    margin-right: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: right;

    & > * {
        margin-right: auto;
    }
`

const LandingLeftTitle = styled.h1`
    font-size: 50px;
`

const LandingRight = styled.div`
    margin-left: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: right;

    & > * {
        margin-left: auto;
    }
`
const LandingRightTitle = styled.h3`
    font-size: 30px;
`

const LandingRightButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
`
