import styled from "styled-components"

export default function Footer() {
    return (
        <FooterWrap>
            <h2>Atlas Management, Inc.</h2>
            <p>Copyright 2023, All Rights Reserved.</p>
        </FooterWrap>
    )
}

const FooterWrap = styled.div`
    width: 100%;
    min-height: 15vh;

    background-color: lightgray;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
