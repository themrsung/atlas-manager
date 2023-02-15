import React, { useState } from "react"
import styled from "styled-components"
import { Auth } from "../classes/Auth"
import { State } from "../classes/State"
import {
    Form,
    FormInput,
    FormLabel,
    FormLabeledInputDiv,
    FormTitle
} from "../components/forms/Form"
import { PrimaryButton } from "../components/shared/Buttons"

export default function Login(props: { state: State }) {
    const state = props.state

    const [id, setId] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const onLoginFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!Auth.login(state, id, password)) {
            // Login Failed
            return
        }

        // Login Success
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
