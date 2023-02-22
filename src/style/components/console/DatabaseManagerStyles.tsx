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
        flex-direction: column;
        align-items: center;
        justify-content: stretch;
    `

    static Columns = styled.div`
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

    static NewColumnForm = styled.form``

    static NewColumnInput = styled.input`
        font-size: 13px;
    `

    static NewRowForm = styled.form``

    static NewRowBar = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
    `

    static NewRowInput = styled.input`
        font-size: 15px;
    `
}
