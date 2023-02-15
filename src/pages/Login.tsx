import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
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
import { RouterPathName } from "../components/Router"
import { PrimaryButton, SecondaryButton } from "../components/shared/Buttons"

export default function Login(props: { state: State }) {
    const state = props.state
    const navigate = useNavigate()

    const [id, setId] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const onLoginFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!Auth.login(state, id, password)) {
            // Login Failed
            console.log("test")
            return
        }

        // Login Success
        navigate(RouterPathName.Home)
    }

    return (
        <LoginWrap>
            <Form onSubmit={onLoginFormSubmit}>
                <FormTitle>Login</FormTitle>

                <FormLabeledInputDiv>
                    <FormLabel>ID</FormLabel>
                    <FormInput
                        value={id}
                        onChange={(e) => {
                            setId(e.currentTarget.value)
                        }}
                    />
                </FormLabeledInputDiv>

                <FormLabeledInputDiv>
                    <FormLabel>Password</FormLabel>
                    <FormInput
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.currentTarget.value)
                        }}
                    />
                </FormLabeledInputDiv>
                <PrimaryButton type="submit">Login</PrimaryButton>
            </Form>
            <SecondaryButton
                onClick={() => {
                    navigate(RouterPathName.Register)
                }}
            >
                Register
            </SecondaryButton>
        </LoginWrap>
    )
}

const LoginWrap = styled.div`
    max-width: 100%;
`
