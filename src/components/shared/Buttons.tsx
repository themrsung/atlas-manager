import styled from "styled-components"

const sharedButtonProperties = `
    font-size: 16px;
    padding: 5px 10px;
    border: 2px solid;
    border-radius: 3px;
    transition: linear 0.2s;
`

export const NavButton = styled.button`
    ${sharedButtonProperties}

    border-color: red;
    color: red;
    background-color: transparent;

    :hover {
        background-color: red;
        color: black;
    }
`
export const PrimaryButton = styled.button`
    ${sharedButtonProperties}

    border-color: green;
    color: green;
    background-color: transparent;

    :hover {
        background-color: green;
        color: black;
    }
`
export const SecondaryButton = styled.button`
    ${sharedButtonProperties}

    border-color: gold;
    color: gold;
    background-color: transparent;

    :hover {
        background-color: gold;
        color: black;
    }
`
