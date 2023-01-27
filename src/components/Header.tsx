import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { RoutePathName as RouterPathName } from "./Router"
import { NavButton } from "./shared/Buttons"

export default function Header() {
    const navigate = useNavigate()

    return (
        <HeaderWrap>
            <HeaderLeftComponent />
            <HeaderRightComponent navigate={navigate} />
        </HeaderWrap>
    )
}

function HeaderLeftComponent() {
    return <HeaderLeft>Left</HeaderLeft>
}

interface HeaderRightProps {
    navigate: (path: string) => void
}

function HeaderRightComponent({ navigate }: HeaderRightProps) {
    const onHomeClick = () => {
        navigate(RouterPathName.Home)
    }

    const onLoginClick = () => {
        navigate(RouterPathName.Login)
    }

    return (
        <HeaderRight>
            <HeaderRightNav>
                <HeaderRightNavUl>
                    <HeaderRightNavLi>
                        <NavButton onClick={onHomeClick}>Home</NavButton>
                    </HeaderRightNavLi>
                    <HeaderRightNavLi>
                        <NavButton onClick={onLoginClick}>Login</NavButton>
                    </HeaderRightNavLi>
                </HeaderRightNavUl>
            </HeaderRightNav>
        </HeaderRight>
    )
}

const HeaderWrap = styled.div`
    width: 100%;
    min-height: 10vh;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
`

const HeaderLeft = styled.div`
    margin-right: auto;

    display: flex;
`

const HeaderRight = styled.div`
    margin-left: auto;

    display: flex;
`

const HeaderRightNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const HeaderRightNavUl = styled.ul`
    list-style: none;
    margin: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const HeaderRightNavLi = styled.li`
    margin: 0;
`
