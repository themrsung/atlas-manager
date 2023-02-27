import styled from "styled-components"
import StyleConventions from "../../StyleConventions"

export default class ConsoleHeaderStyles {
   static Wrap = styled.div`
      width: 100%;
   `

   static NotLoggedInNoSaveWarningText = styled.p`
      font-size: 30px;
      font-weight: bold;
      color: ${StyleConventions.errorColor};
   `

   static NoSaveDataLossWarningText = styled.p`
      font-size: 18px;
      font-weight: bold;
      color: ${StyleConventions.errorColor};
   `

   static NewDatabaseForm = styled.form``

   static NewDatabaseInput = styled.input``
}
