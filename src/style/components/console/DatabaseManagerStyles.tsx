import styled from "styled-components"
import StyleConventions from "../../StyleConventions"

export default class DatabaseManagerStyles {
   static Wrap = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 100%;
   `

   static Header = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: stretch;

      width: 100%;
   `

   static HeaderTitle = styled.h1`
      font-size: 20px;
   `

   static Body = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: stretch;

      width: 100%;
      overflow-x: auto;
   `

   static Columns = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: stretch;

      width: 100%;
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

export class DatabaseManagerHeaderTitleStyles {
   static Wrap = styled.div`
      cursor: pointer;
   `

   static EditForm = styled.form``

   static EditInput = styled.input``
}

export class DatabaseManagerPropertyStyles {
   static Wrap = styled.div`
      cursor: pointer;
      border: 1px solid ${StyleConventions.blackTextColor};
   `

   static PropertyValue = styled.p`
      min-width: 150px;
      text-align: center;
   `

   static NoValueText = styled.span`
      color: ${StyleConventions.errorColor};
   `

   static EditForm = styled.form``

   static EditInput = styled.input``
}

export class DatabaseManagerEntryIdStyles {
   static Wrap = styled.div`
      cursor: pointer;
      display: flex;
   `

   static EntryId = styled.p``

   static EditForm = styled.form``

   static EditInput = styled.input``
}

export class DatabaseManagerColumnTitleStyles {
   static Wrap = styled.div`
      cursor: pointer;
   `

   static EditForm = styled.form``

   static EditInput = styled.input``
}
