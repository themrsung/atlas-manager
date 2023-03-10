import AtlasClientState from "../classes/client/AtlasClientState"
import S from "../style/pages/RegisterStyles"
import { useState, useEffect } from "react"
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

    const [isIdValid, setIsIdValid] = useState<boolean>(false)
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false)
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false)
    const [isDisplayNameValid, setIsDisplayNameValid] = useState<boolean>(false)

    const [isIdTaken, setIsIdTaken] = useState<boolean>(false)

    const [hasUserChangedId, setHasUserChangedId] = useState<boolean>(false)
    const [hasUserChangedPassword, setHasUserChangedPassword] =
        useState<boolean>(false)
    const [hasUserChangedEmail, setHasUserChangedEmail] =
        useState<boolean>(false)
    const [hasUserChangedDisplayName, setHasUserChangedDisplayName] =
        useState<boolean>(false)

    // prettier-ignore
    const checkIdValidity = () => { setIsIdValid(Auth.isIdValid(id)) }
    // prettier-ignore
    const checkPasswordValidity = () => { setIsPasswordValid(Auth.isPasswordValid(password)) }
    // prettier-ignore
    const checkEmailValidity = () => { setIsEmailValid(Auth.isEmailValid(email)) }
    // prettier-ignore
    const checkDisplayNameValidity = () => { setIsDisplayNameValid(Auth.isDisplayNameValid(displayName)) }

    const onRegisterFormSubmitted = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault()

        if (
            !isIdValid ||
            !isPasswordValid ||
            !isEmailValid ||
            !isDisplayNameValid
        )
            return

        if (await Auth.isIdTaken(id, state.getReactComponent())) {
            setIsIdTaken(true)
            return
        }

        const user = new AtlasClientUser(state.getReactComponent())

        user.setId(id)
        user.setPassword(password)
        user.setEmail(email)
        user.setDisplayName(displayName)

        await Auth.addUserToServer(user)
        navigate(RouteNames.Home)
    }

    useEffect(checkIdValidity, [id])
    useEffect(checkPasswordValidity, [password])
    useEffect(checkEmailValidity, [email])
    useEffect(checkDisplayNameValidity, [displayName])

    // prettier-ignore
    const onTermsOfServiceClick = () => { navigate(RouteNames.TermsOfService) }
    // prettier-ignore
    const onPrivacyPolicyClick = () => { navigate(RouteNames.PrivacyPolicy) }
    // prettier-ignore
    const onEndUserLicenseAgreementClick = () => { navigate(RouteNames.EndUserLicenseAgreement) }

    return (
        <S.Wrap>
            <S.RegisterForm onSubmit={onRegisterFormSubmitted}>
                <S.RegisterLabel htmlFor="id-input">ID</S.RegisterLabel>
                <S.RegisterInput
                    id="id-input"
                    value={id}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setHasUserChangedId(true)
                        setId(e.currentTarget.value)
                    }}
                />
                {hasUserChangedId &&
                    (isIdValid ? (
                        <S.RegisterInputOKInfoText>
                            ID is valid.
                        </S.RegisterInputOKInfoText>
                    ) : (
                        <S.RegisterInputNotOKInfoText>
                            ID must be longer than 0 characters.
                        </S.RegisterInputNotOKInfoText>
                    ))}
                {isIdTaken && (
                    <S.RegisterInputNotOKInfoText>
                        ID is already taken.
                    </S.RegisterInputNotOKInfoText>
                )}

                <S.RegisterLabel htmlFor="pw-input">Password</S.RegisterLabel>
                <S.RegisterInput
                    id="pw-input"
                    type="password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setHasUserChangedPassword(true)
                        setPassword(e.currentTarget.value)
                    }}
                />
                {hasUserChangedPassword ? (
                    isPasswordValid ? (
                        <S.RegisterInputOKInfoText>
                            Password is valid.
                        </S.RegisterInputOKInfoText>
                    ) : (
                        <S.RegisterInputNotOKInfoText>
                            Please check password.
                        </S.RegisterInputNotOKInfoText>
                    )
                ) : (
                    <S.RegisterInputInitialInfoText>
                        Password must be longer than 7 characters.
                    </S.RegisterInputInitialInfoText>
                )}

                <S.RegisterLabel htmlFor="email-input">Email</S.RegisterLabel>
                <S.RegisterInput
                    id="email-input"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setHasUserChangedEmail(true)
                        setEmail(e.currentTarget.value)
                    }}
                />
                {hasUserChangedEmail &&
                    (isEmailValid ? (
                        <S.RegisterInputOKInfoText>
                            Email is valid.
                        </S.RegisterInputOKInfoText>
                    ) : (
                        <S.RegisterInputNotOKInfoText>
                            Please check your email.
                        </S.RegisterInputNotOKInfoText>
                    ))}

                <S.RegisterLabel htmlFor="name-input">Name</S.RegisterLabel>
                <S.RegisterInput
                    id="name-input"
                    value={displayName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setHasUserChangedDisplayName(true)
                        setDisplayName(e.currentTarget.value)
                    }}
                />
                {hasUserChangedDisplayName &&
                    (isDisplayNameValid ? (
                        <S.RegisterInputOKInfoText>
                            Name is valid.
                        </S.RegisterInputOKInfoText>
                    ) : (
                        <S.RegisterInputNotOKInfoText>
                            Name bust be longer than 3 charcters.
                        </S.RegisterInputNotOKInfoText>
                    ))}

                <S.RegisterUserAgreementText>
                    By proceeding with registration, you are agreeing to our{" "}
                    {
                        <S.RegisterUserAgreementLink
                            onClick={onTermsOfServiceClick}
                        >
                            Terms of Service
                        </S.RegisterUserAgreementLink>
                    }
                    ,{" "}
                    {
                        <S.RegisterUserAgreementLink
                            onClick={onPrivacyPolicyClick}
                        >
                            Privacy Policy
                        </S.RegisterUserAgreementLink>
                    }
                    , and{" "}
                    <S.RegisterUserAgreementLink
                        onClick={onEndUserLicenseAgreementClick}
                    >
                        EULA
                    </S.RegisterUserAgreementLink>
                    .
                </S.RegisterUserAgreementText>
                <StyleConventions.LargePrimaryButton type="submit">
                    Register
                </StyleConventions.LargePrimaryButton>
            </S.RegisterForm>
        </S.Wrap>
    )
}
