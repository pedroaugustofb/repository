/**
 * This file has all the styles used to do the home component
 * 07/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import styled from "styled-components";
import { BasicSection, Container } from "../../components/BasicComponents";

export const LandingSection = styled(BasicSection)`
@media(max-width: 920px){
    flex-direction: column;
}
`
export const TextContainer = styled(Container)`
@media(max-width: 920px){
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 100%;
}
`


export const IconsContainer = styled(Container)`
justify-content: flex-start;
a{
    margin: 16px 0px;
}
align-items: end;
flex-direction: column;
padding-right: 15px;
@media(max-width: 920px){
    width: 80%;
    height: 30%;
    flex-direction: row;
    justify-content: center;
    padding: 0;
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
`

export const TitleArea = styled(Container)`
padding: 2rem 0;
line-height: 4rem;
display:flex;
justify-content:flex-start;
align-items: center;
width: 100%;
letter-spacing: -1px;
@media(max-width: 920px){
    text-align: center;
    justify-content:center;
    align-items: center;
}
@media(max-width: 1400px){
    font-size: 1.84rem;
}
`

export const TextArea = styled(Container)`

`

export const WelcomeTitle = styled.h1`
font-family: Rubik, sans-serif;
font-size: 3.815rem;
font: bold;
color: #002D5B;
@media(max-width: 1400px){
    font-size: 1.84rem;
}

`

export const WelcomeText = styled.p`

`






export const ImageContainer = styled(Container)`
background: url("https://cdn.discordapp.com/attachments/730086912391643227/1072671292483965078/programmer.png") no-repeat center center;
background-size: cover;
overflow: visible;
@media(max-width: 920px){
    width: 35%;
    height: 70%;
}
@media(max-width: 500px){
    width: 70%;
}
`