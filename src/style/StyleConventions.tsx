import styled from "styled-components"

export default class StyleConventions {
    static primaryColor: string = "#a72f09"
    static secondaryColor: string = "#da7140"

    static blackTextColor: string = "#0d0d0d"
    static whiteTextColor: string = "#f2f2f2"

    static warningColor: string = "#ffbd59"
    static errorColor: string = "#ff1100"

    //
    // GLOBAL STYLE
    //

    static GlobalStyleWrap = styled.div`
        color: ${StyleConventions.blackTextColor};
    `

    //
    // BUTTONS
    //

    static __sharedButtonProperties = `
        border-width: 2px;
        border-style: solid;
        border-radius: 4px;
        transition: linear 0.2s;
    `

    static __smallButtonProperties = `
        padding: 5px 10px;
        font-size: 12px;
    `

    static __mediumButtonProperties = `
        padding: 6px 11px;
        font-size: 18px;
    `

    static __largeButtonProperties = `
        padding: 7px 12px;
        font-size: 24px;
    `

    static __primaryButtonProperties = `
        border-color: ${StyleConventions.primaryColor};
        color: ${StyleConventions.primaryColor};
        background-color: transparent;

        &:hover {
            color: ${StyleConventions.whiteTextColor};
            background-color: ${StyleConventions.primaryColor};
        }
    `

    static __secondaryButtonProperties = `
        border-color: ${StyleConventions.secondaryColor};
        color: ${StyleConventions.secondaryColor};
        background-color: transparent;

        &:hover {
            color: ${StyleConventions.whiteTextColor};
            background-color: ${StyleConventions.secondaryColor};
        }
    `

    static __warningButtonProperties = `
        border-color: ${StyleConventions.warningColor};
        color: ${StyleConventions.warningColor};
        background-color: transparent;

        &:hover {
            color: ${StyleConventions.whiteTextColor};
            background-color: ${StyleConventions.warningColor};
    `

    static __errorButtonProperties = `
        border-color: ${StyleConventions.errorColor};
        color: ${StyleConventions.errorColor};
        background-color: transparent;

        font-weight: bold;

        &:hover {
            color: ${StyleConventions.whiteTextColor};
            background-color: ${StyleConventions.errorColor};
        }
    `

    static SmallPrimaryButton = styled.button`
        ${StyleConventions.__sharedButtonProperties}
        ${StyleConventions.__smallButtonProperties}
        ${StyleConventions.__primaryButtonProperties}
    `
    static MediumPrimaryButton = styled.button`
        ${StyleConventions.__sharedButtonProperties}
        ${StyleConventions.__mediumButtonProperties}
        ${StyleConventions.__primaryButtonProperties}
    `
    static LargePrimaryButton = styled.button`
        ${StyleConventions.__sharedButtonProperties}
        ${StyleConventions.__largeButtonProperties}
        ${StyleConventions.__primaryButtonProperties}
    `

    static SmallSecondaryButton = styled.button`
        ${StyleConventions.__sharedButtonProperties}
        ${StyleConventions.__smallButtonProperties}
        ${StyleConventions.__secondaryButtonProperties}
    `
    static MediumSecondaryButton = styled.button`
        ${StyleConventions.__sharedButtonProperties}
        ${StyleConventions.__mediumButtonProperties}
        ${StyleConventions.__secondaryButtonProperties}
    `
    static LargeSecondaryButton = styled.button`
        ${StyleConventions.__sharedButtonProperties}
        ${StyleConventions.__largeButtonProperties}
        ${StyleConventions.__secondaryButtonProperties}
    `

    static SmallWarningButton = styled.button`
        ${StyleConventions.__sharedButtonProperties}
        ${StyleConventions.__smallButtonProperties}
        ${StyleConventions.__warningButtonProperties}
    `
    static MediumWarningButton = styled.button`
        ${StyleConventions.__sharedButtonProperties}
        ${StyleConventions.__mediumButtonProperties}
        ${StyleConventions.__warningButtonProperties}
    `
    static LargeWarningButton = styled.button`
        ${StyleConventions.__sharedButtonProperties}
        ${StyleConventions.__largeButtonProperties}
        ${StyleConventions.__warningButtonProperties}
    `

    static SmallErrorButton = styled.button`
        ${StyleConventions.__sharedButtonProperties}
        ${StyleConventions.__smallButtonProperties}
        ${StyleConventions.__errorButtonProperties}
    `
    static MediumErrorButton = styled.button`
        ${StyleConventions.__sharedButtonProperties}
        ${StyleConventions.__mediumButtonProperties}
        ${StyleConventions.__errorButtonProperties}
    `
    static LargeErrorButton = styled.button`
        ${StyleConventions.__sharedButtonProperties}
        ${StyleConventions.__largeButtonProperties}
        ${StyleConventions.__errorButtonProperties}
    `
}
