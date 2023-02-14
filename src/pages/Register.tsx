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

export default function Register() {
    const onRegisterFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <RegisterWrap>
            <Form onSubmit={onRegisterFormSubmit}>
                <FormTitle>Register</FormTitle>

                <FormLabeledInputDiv>
                    <FormLabel>ID</FormLabel>
                    <FormInput />
                </FormLabeledInputDiv>

                <FormLabeledInputDiv>
                    <FormLabel>Password</FormLabel>
                    <FormInput />
                </FormLabeledInputDiv>
                <PrimaryButton type="submit">Register</PrimaryButton>
            </Form>
        </RegisterWrap>
    )
}

const RegisterWrap = styled.div`
    max-width: 100%;
`
