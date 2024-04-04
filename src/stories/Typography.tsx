import styled from 'styled-components'
import { typeScale, primaryFont } from '../styles'

const HeaderOne = styled.h1`
    font-size: ${typeScale.header1};
    font-family: ${primaryFont};
`
const HeaderTwo = styled.h2`
    font-size: ${typeScale.header2};
    font-family: ${primaryFont};
`
const HeaderThree = styled.h3`
    font-size: ${typeScale.header3};
    font-family: ${primaryFont};
`
const HeaderFour = styled.h4`
    font-size: ${typeScale.header4};
    font-family: ${primaryFont};
`
const HeaderFive = styled.h5`
    font-size: ${typeScale.header5};
    font-family: ${primaryFont};
`
const HeaderSix = styled.h6`
    font-size: ${typeScale.header6};
    font-family: ${primaryFont};
`
const Paragraph = styled.p`
    font-size: ${typeScale.paragraph};
    font-family: ${primaryFont};
`

const HelperText = styled.p`
    font-size: ${typeScale.helperText};
    font-family: ${primaryFont};
`
const CopyRight = styled.p`
    font-size: ${typeScale.copyrightText};
    font-family: ${primaryFont};
`
interface TypographyProps {
    text?: string
}


export const Typography = ({
    text,
    ...props
}: TypographyProps) => {
    return (
        <>
        <HeaderOne>
           { text }
        </HeaderOne>
        <HeaderTwo>
            { text }
        </HeaderTwo>
        <HeaderThree>
            { text }
        </HeaderThree>
        <HeaderFour>
            { text }
        </HeaderFour>
        <HeaderFive>
            {text}
        </HeaderFive>
        <HeaderSix>
            {text}
        </HeaderSix>
        <Paragraph>
            {text}
        </Paragraph>
        <HelperText>
            {text}
        </HelperText>
        <CopyRight>
            {text}
        </CopyRight>
        </>
    )
}