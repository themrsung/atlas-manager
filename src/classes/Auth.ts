export enum HashPasswordVersion {
    v1 = "v1"
}

export class Auth {
    static hashPassword(input: string, version: HashPasswordVersion) {
        switch (version) {
            case HashPasswordVersion.v1:
                return Auth.__hashPasswordV1(input)
            default:
                return Auth.__hashPasswordV1(input)
        }
    }

    static __hashPasswordV1(input: string) {
        let hash = 0

        for (let i = 0; i < input.length; i++) {
            const chr = input.charCodeAt(i)
            hash = (hash << 5) - hash + chr
            hash |= 0
        }

        return String(hash)
    }
}
