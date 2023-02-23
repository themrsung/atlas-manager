import { useNavigate } from "react-router-dom"
import AtlasClientState from "../classes/client/AtlasClientState"
import S from "../style/pages/LoginStyles"
import { useState } from "react"
import { RouteNames } from "../components/router/RouteNames"
import StyleConventions from "../style/StyleConventions"
import Auth from "../api/Auth"

export default function Login(props: { state: AtlasClientState }) {
    const state = props.state
    const navigate = useNavigate()

    const [id, setId] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const onRegisterFormSubmitted = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault()

        const user = await Auth.findUserWithCredentials(
            state.getReactComponent(),
            id,
            password
        )

        if (!user) {
            // Login failed
            return
        }

        // Login success
        state.setCurrentUser(user)
        state.pullDatabasesFromServer()
        navigate(RouteNames.Home)
    }

    return (
        <S.Wrap>
            <S.LoginForm onSubmit={onRegisterFormSubmitted}>
                <S.LoginLabel htmlFor="id-input">ID</S.LoginLabel>
                <S.LoginInput
                    id="id-input"
                    value={id}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setId(e.currentTarget.value)
                    }}
                />

                <S.LoginLabel htmlFor="pw-input">Password</S.LoginLabel>
                <S.LoginInput
                    id="pw-input"
                    type="password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setPassword(e.currentTarget.value)
                    }}
                />

                <StyleConventions.LargePrimaryButton type="submit">
                    Login
                </StyleConventions.LargePrimaryButton>
            </S.LoginForm>
        </S.Wrap>
    )
}
