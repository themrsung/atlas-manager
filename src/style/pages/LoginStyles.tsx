import styled from "styled-components"
import StyleConventions from "../StyleConventions"

export default class LoginStyles {
    static Wrap = styled.div``

    static LoginForm = styled.form`
        display: flex;
        flex-direction: column;
        width: 30%;
    `

    static LoginLabel = styled.label``

    static LoginInput = styled.input``

    static LoginForgotPasswordLink = styled.p`
        font-size: 12px;

        color: ${StyleConventions.primaryColor};
        cursor: pointer;
    `
}
