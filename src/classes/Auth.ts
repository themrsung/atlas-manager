import { RoutePathName } from "../components/Router"
import { User } from "./User"

export enum HashPasswordVersion {
    v1 = "v1"
}

class HashPassword {
    static v1(input: string) {
        let hash = 0

        for (let i = 0; i < input.length; i++) {
            const chr = input.charCodeAt(i)
            hash = (hash << 5) - hash + chr
            hash |= 0
        }

        return String(hash)
    }
}

export class Auth {
    static hashPassword(
        input: string,
        version: HashPasswordVersion = HashPasswordVersion.v1
    ) {
        switch (version) {
            case HashPasswordVersion.v1:
                return HashPassword.v1(input)
            default:
                return HashPassword.v1(input)
        }
    }

    static async onRestrictedPageLoad(navigate: (path: string) => void) {
        const user = await Auth.getCurrentUser()
        if (user === null) {
            // User is not logged in, redirect to landing page
            navigate(RoutePathName.landing)
        }
    }

    static async getCurrentUser() {
        return new User("admin", "admin")
        // return null
    }
}
