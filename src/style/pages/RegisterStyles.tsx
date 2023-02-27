import styled from "styled-components"
import StyleConventions from "../StyleConventions"

export default class RegisterStyles {
   static Wrap = styled.div``

   static RegisterForm = styled.form`
      display: flex;
      flex-direction: column;
      width: 30%;
   `

   static RegisterLabel = styled.label``

   static RegisterInput = styled.input``

   static RegisterInputInitialInfoText = styled.p`
      font-size: 10px;
   `

   static RegisterInputOKInfoText = styled.p`
      font-size: 10px;
      color: ${StyleConventions.positiveColor};
   `

   static RegisterInputNotOKInfoText = styled.p`
      font-size: 10px;
      color: ${StyleConventions.errorColor};
   `

   static RegisterUserAgreementText = styled.p`
      font-size: 12px;
   `

   static RegisterUserAgreementLink = styled.span`
      color: ${StyleConventions.primaryColor};
      cursor: pointer;
   `
}
