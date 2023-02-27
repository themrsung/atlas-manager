import styled from "styled-components"
import StyleConventions from "../../StyleConventions"

export default class MessageWindowStyles {
    static Background = styled.div`
        position: fixed;

        top: 0;
        left: 0;

        width: 100vw;
        height: 100vh;

        background-color: rgba(0, 0, 0, 0.2);

        z-index: 10;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `

    static Wrap = styled.div`
        position: relative;

        border: ${StyleConventions.blackTextColor} 1px solid;
        background-color: ${StyleConventions.whiteTextColor};
        color: ${StyleConventions.blackTextColor};

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        z-index: 11;
    `

    static Message = styled.h1``
}
