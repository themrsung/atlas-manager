import styled from "styled-components"
import { NavButton } from "./shared/Buttons"

export default function Header() {
    return (
        <HeaderWrap>
            <HeaderLeftComponent />
            <HeaderRightComponent />
        </HeaderWrap>
    )
}

function HeaderLeftComponent() {
    return <HeaderLeft>Left</HeaderLeft>
}

function HeaderRightComponent() {
    return (
        <HeaderRight>
            <HeaderRightNav>
                <HeaderRightNavUl>
                    <HeaderRightNavLi>
                        <NavButton>1</NavButton>
                    </HeaderRightNavLi>
                    <HeaderRightNavLi>
                        <NavButton>2</NavButton>
                    </HeaderRightNavLi>
                    <HeaderRightNavLi>
                        <NavButton>3</NavButton>
                    </HeaderRightNavLi>
                </HeaderRightNavUl>
            </HeaderRightNav>
        </HeaderRight>
    )
}

const HeaderWrap = styled.div`
    width: 100%;

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
