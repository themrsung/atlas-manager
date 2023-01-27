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
}
