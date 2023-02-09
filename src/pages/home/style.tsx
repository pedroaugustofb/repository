/**
 * This file has all the styles used to do the home component
 * 07/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import styled, {keyframes} from "styled-components";
import { BasicSection, Container, Title } from "../../components/BasicComponents";

/* Section 1 */
const overlayAnimation = keyframes`
0%{
    transform: translateX(25px);
}
50%{
    transform: translateX(0px);
}
100%{
    transform: translateX(25px);
}
`
export const OverlayBackground = styled.div`
@media(min-width: 1126px){
    width: 95%;
    height: 90%;
    background: #f5f2f2;
    overflow: hidden;
    border-radius: 50%;
    position: absolute;
    top: 10%;
    left: -40%;
    z-index: 0;
    animation: ${overlayAnimation} 5s linear infinite;
}
`

export const LandingSection = styled(BasicSection)`
overflow: hidden;
align-items: flex-start;
@media(max-width: 1126px){
    flex-direction: column;
    align-items: center;
}
`
export const TextContainer = styled(Container)`
z-index:1;
@media(max-width: 1126px){
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 100%;
}
`


export const IconsContainer = styled(Container)`
justify-content: center;
margin-bottom: 3.5rem;
a{
    margin: 16px 0px;
}
align-items: end;
flex-direction: column;
padding-right: 15px;
padding-top: 1.5rem;
@media(max-width: 1126px){
    width: 80%;
    height: 30%;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    margin: 0;
    align-items: center;

    a{
        margin: 4px 16px;
    }
}

@media(max-width: 300px){
    a{
        margin: 4px 8px;
    }
}
`

export const WelcomeContainer = styled(Container)`
padding: 0 1rem;
align-items: flex-start;
@media(max-width: 1126px){
    display: flex;
    flex-direction: column;
    align-items:center;
}
`

export const TitleArea = styled(Container)`
padding: 2rem 0;
line-height: 4rem;
display:flex;
justify-content:flex-start;
align-items: center;
width: 100%;
letter-spacing: -1px;
@media(max-width: 1126px){
    text-align: center;
    justify-content:center;
    align-items: center;
    padding: 0 0 0.5rem 0;
}
@media(max-width: 1400px){
    font-size: 1.84rem;
    line-height: 2.5rem;
}
`


export const WelcomeTitle = styled.h1`
font-family: 'Rubik', sans-serif;
font-weight: 800;
font-size: 3.415rem;
color: #14261C;
opacity: 0.9;
@media(max-width: 1400px){
    font-size: 1.84rem;
}
`

export const TextArea = styled(Container)`
display:flex;
justify-content:flex-start;
align-items: center;
text-align: justify;
margin-bottom: 2rem;
@media(max-width: 1126px){
    text-align: justify;
    justify-content: center;
    max-width: 440px;
    margin: 0;
}
@media(max-width: 1400px){
    font-size: 1.84rem;
}
`
export const WelcomeText = styled.p`
font-family: 'Karla', sans-serif;
font-size: 17px;
color: #4E5652;
opacity: 0.9;
`

export const WelcomeButtonsContainer = styled(Container)`

display: flex;
justify-content: flex-start;
align-items: center;
max-width: 390px;

@media(max-width: 1126px){
    max-width: 440px;
    justify-content: center;
}
`





export const ImageContainer = styled(Container)`
background: url("https://cdn.discordapp.com/attachments/730086912391643227/1072671292483965078/programmer.png") no-repeat center center;
background-size: cover;
overflow: visible;
z-index: 1;
min-width: 400px;
@media(max-width: 1126px){
    width: 35%;
    height: 70%;
    min-width: 0px;
}
@media(max-width: 500px){
    width: 70%;
}
`
const LookDownContainer = styled(Container)`
@media(max-width: 920px){
    display: none;
}

position: absolute;
right: -20px;
top: calc(100vh - 120px);
display: flex;
justify-content: center;
align-items: center;
transform: rotate(90deg);

`
const LookDownText = styled.p`
font-family: 'Rubik', sans-serif;
color: #14261C;
font-size: 14px;
letter-spacing: 5px;
`

interface LookDownProps {
    language: string | null, 
}
export const LookDown = ({language}: LookDownProps) => {
    return (
        <LookDownContainer>
            <LookDownText>{language === 'PT-BR' ? 'Deslize Para Baixo': 'Slide Down'}</LookDownText>
            <i className="pi pi-arrow-right" style={{ color: "#14261C", marginLeft: '10px' }}/>
        </LookDownContainer>
    )
}

/* Section 2 */

export const AboutContainer = styled(Container)`
z-index: 3;
position: relative;
align-items: flex-start;
@media(max-width: 1126px){
    postiion: static;
}
`
export const AboutTitle = styled(Title)`
color: #14261C;
opacity: 0.9;
@media(max-width: 1126px){
    font-size: 1.7rem;
}
`

export const TitleLine = styled.div`
width: 150px;
border-bottom: 3px solid #14261C;
margin: 1rem;
@media(max-width: 1126px){
    border-bottom: 2px solid #14261C;
    width: 100px;
}
`