import { RouterPathName } from "../components/Router"
import { State } from "./State"

export enum HashPasswordVersion {
    V1 = "v1"
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
        version: HashPasswordVersion = HashPasswordVersion.V1
    ) {
        switch (version) {
            case HashPasswordVersion.V1:
                return HashPassword.v1(input)
            default:
                return HashPassword.v1(input)
        }
    }

    static async onRestrictedPageLoad(
        navigate: (path: string) => void,
        state: State
    ) {
        const user = state.getCurrentUser()
        console.log(user)
        if (Object.keys(user).length < 1) {
            // User is not logged in, redirect to landing page
            navigate(RouterPathName.Landing)
        }
    }
}
