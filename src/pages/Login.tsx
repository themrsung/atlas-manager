import React from "react"
import styled from "styled-components"
import {
    Form,
    FormInput,
    FormLabel,
    FormLabeledInputDiv,
    FormTitle
} from "../components/forms/Form"
import { PrimaryButton } from "../components/shared/Buttons"

export default function Login() {
    const onLoginFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <LoginWrap>
            <Form onSubmit={onLoginFormSubmit}>
                <FormTitle>Login</FormTitle>

                <FormLabeledInputDiv>
                    <FormLabel>ID</FormLabel>
                    <FormInput />
                </FormLabeledInputDiv>

                <FormLabeledInputDiv>
                    <FormLabel>Password</FormLabel>
                    <FormInput />
                </FormLabeledInputDiv>
                <PrimaryButton type="submit">Login</PrimaryButton>
            </Form>
        </LoginWrap>
    )
}

const LoginWrap = styled.div`
    max-width: 100%;
`
