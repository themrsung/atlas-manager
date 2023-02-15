import React, { useState } from "react"
import styled from "styled-components"
import { Auth, HashPasswordVersion } from "../classes/Auth"
import { State } from "../classes/State"
import { User, UserTier } from "../classes/User"
import {
    Form,
    FormInput,
    FormLabel,
    FormLabeledInputDiv,
    FormTitle
} from "../components/forms/Form"
import { PrimaryButton } from "../components/shared/Buttons"

export default function Register(props: { state: State }) {
    const state = props.state

    const [id, setId] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const onRegisterFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const user = new User(
            id,
            "name",
            Auth.hashPassword(password, HashPasswordVersion.V1),
            UserTier.Free,
            [],
            HashPasswordVersion.V1
        )

        if (!Auth.addUser(state, user)) {
            // Register Failed
            return
        }

        // Register Success
    }

    return (
        <RegisterWrap>
            <Form onSubmit={onRegisterFormSubmit}>
                <FormTitle>Register</FormTitle>

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
                <PrimaryButton type="submit">Register</PrimaryButton>
            </Form>
        </RegisterWrap>
    )
}

const RegisterWrap = styled.div`
    max-width: 100%;
`
