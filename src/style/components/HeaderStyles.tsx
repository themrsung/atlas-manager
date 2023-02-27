import styled from "styled-components"
import StyleConventions from "../StyleConventions"

export default class HeaderStyles {
    static Wrap = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        background-color: ${StyleConventions.primaryColor};
    `

    static Left = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        margin-right: auto;
        margin-left: 1%;

        cursor: pointer;
    `

    static Logo = styled.img`
        max-height: 100px;
    `

    static Title = styled.h1`
        color: ${StyleConventions.blackTextColor};
        font-size: 30px;
        font-weight: bold;
    `

    static Right = styled.nav`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        margin-left: auto;
        margin-right: 1%;

        & > button {
            margin-left: 2%;
        }
    `
}
