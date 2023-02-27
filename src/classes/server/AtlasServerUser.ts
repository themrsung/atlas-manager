import AtlasClientUser from "../client/AtlasClientUser"

// Use constructor to convert client to server, use toClientDatabase() to convert server to client
export default class AtlasServerUser {
   constructor(clientUser: AtlasClientUser) {
      this.id = clientUser.getId()
      this.email = clientUser.getEmail()
      this.displayName = clientUser.getDisplayName()
      this.passwordCiphertext = clientUser.getPasswordCiphertext()
   }

   id: string
   email: string
   displayName: string
   passwordCiphertext: number

   toClientUser(reactComponent: React.Component) {
      const clientUser = new AtlasClientUser(reactComponent)

      clientUser.setId(this.id)
      clientUser.setEmail(this.email)
      clientUser.setDisplayName(this.displayName)
      clientUser.setPasswordCiphertext(this.passwordCiphertext)
   }
}
