import AtlasClientState from "../classes/client/AtlasClientState"
import S from "../style/pages/RegisterStyles"
import { useState } from "react"
import StyleConventions from "../style/StyleConventions"
import AtlasClientUser from "../classes/client/AtlasClientUser"
import Auth from "../api/Auth"
import { RouteNames } from "../components/router/RouteNames"
import { useNavigate } from "react-router-dom"

export default function Register(props: { state: AtlasClientState }) {
    const state = props.state
    const navigate = useNavigate()

    const [id, setId] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [displayName, setDisplayName] = useState<string>("")

    const onRegisterFormSubmitted = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault()

        const user = new AtlasClientUser(state.getReactComponent())

        user.setId(id)
        user.setPassword(password)
        user.setEmail(email)
        user.setDisplayName(displayName)

        await Auth.addUserToServer(user)
        navigate(RouteNames.Home)
    }

    return (
        <S.Wrap>
            <S.RegisterForm onSubmit={onRegisterFormSubmitted}>
                <S.RegisterLabel htmlFor="id-input">ID</S.RegisterLabel>
                <S.RegisterInput
                    id="id-input"
                    value={id}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setId(e.currentTarget.value)
                    }}
                />

                <S.RegisterLabel htmlFor="pw-input">Password</S.RegisterLabel>
                <S.RegisterInput
                    id="pw-input"
                    type="password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setPassword(e.currentTarget.value)
                    }}
                />

                <S.RegisterLabel htmlFor="email-input">Email</S.RegisterLabel>
                <S.RegisterInput
                    id="email-input"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setEmail(e.currentTarget.value)
                    }}
                />

                <S.RegisterLabel htmlFor="name-input">Name</S.RegisterLabel>
                <S.RegisterInput
                    id="name-input"
                    value={displayName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setDisplayName(e.currentTarget.value)
                    }}
                />

                <StyleConventions.LargePrimaryButton type="submit">
                    Register
                </StyleConventions.LargePrimaryButton>
            </S.RegisterForm>
        </S.Wrap>
    )
}
