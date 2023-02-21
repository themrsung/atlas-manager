import styled from "styled-components"

export default class DatabaseManagerStyles {
    static Wrap = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `

    static Header = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: stretch;
    `

    static HeaderTitle = styled.h1`
        font-size: 20px;
    `

    static Body = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: stretch;
    `

    static Column = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `

    static ColumnTitle = styled.h3`
        font-size: 13px;
    `
}
