/**
 * This file has all the styles used to do the footer component
 * 13/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import styled from "styled-components";
import { BasicSection, Container } from "../BasicComponents";

interface FooterContainerProps{
    backgroundColor?: string | null,
}
export const FooterContainer = styled(BasicSection)<FooterContainerProps>`
width: 100vw;
position: relative;
z-index: 4;
background: ${props => props.backgroundColor};
background: blue;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ContactMeContainer = styled(Container)`
transform: translateY(-75px);
height: 150px;
width: 70%;
background: red;
border-radius: 10px;
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const FooterTitleContainer = styled(Container)`
height: 100%;
display: flex;
justify-content: center;
align-items: space-around;
flex-direction: column;
padding: 2rem;
background: yellow;
h2{
    font-size: 38px;
    color: #d7d7d7;
    font-family: Rubik, sans-serif;
    transition: .3s;
    @media(max-width: 800px){
        font-size: 24px;
    }
}

h5{
    font-size: 14px;
    color: rgba(144, 238, 144, 0.7);
    font-family: 'Karla', sans-serif;
    @media(max-width: 600px){
        font-size: 12px;
    }
}
`

export const FooterButtonsArea = styled(Container)`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
background: green;
padding: 2rem;

button{
    margin: 0 1rem  ;
    @media(max-width: 800px){
        margin: 0;
    }
}
`

export const AllRightsReservedContainer = styled(Container)`
border-top: 1px solid rgba(144, 238, 144, 0.7);
margin: 2rem 0 0 0 ;
height: 50px;
width: 100%;
padding: 0 15%;
background: green;
display: flex;
justify-content: start;
align-items: center;
`

export const ContentContainer = styled(Container)`
width: 70%;
height: 282px;
display: grid;
grid-template-columns: repeat(auto-fill, 19%);
grid-template-rows: 100%;
background: pink;
transform: translateY(-18.75px) scaleY(1.2);

div{
   border-right: 2px solid #d7d7d7; 
   margin-right: 1%;
}

div:last-child{
    border-right: none;
}

`

export const ContentItem = styled.div`
padding-left: 10px;
h6{
    letter-spacing: 3px;
    font-size: 14px;
    color: #14261C;
}


`