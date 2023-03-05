/**
 * This file has all the styles used to do the footer component
 * 13/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import styled from "styled-components";
import { BasicSection, Container } from "../../components/BasicComponents";

interface FooterContainerProps{
    backgroundColor?: string | null,
}
export const FooterContainer = styled(BasicSection)<FooterContainerProps>`
width: 100vw;
position: relative;
z-index: 4;
background: ${props => props.backgroundColor};
background: #66CDAA;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ContactMeContainer = styled(Container)`
height: 150px;
width: 100%;
border-radius: 10px;
display: flex;
flex-direction: row;
justify-content: space-between;
background: #387560;
@media(min-width: 1126px){
    transform: translateY(-75px);
    width: 58.7%;
}

@media(max-width: 1126px){
    padding: 1rem;
}
`

export const FooterTitleContainer = styled(Container)`
height: 100%;
display: flex;
justify-content: center;
align-items: space-around;
flex-direction: column;
padding: 2rem;
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
padding: 0 20.65%;
background: transparent;
display: flex;
justify-content: start;
align-items: center;
`

export const ContentContainer = styled(Container)`
width: 58.7%;
height: fit-content;
min-height: 233px;
display: grid;
grid-template-columns: repeat(auto-fill, 19%);
grid-template-rows: 100%;
@media(min-width: 1126px){
    transform: translateY(-18.75px) scaleY(1.2);
}

@media(max-width: 1126px){
    width: 100%;
    padding: 1rem 2rem;
    grid-template-columns: repeat(auto-fill, max-content);

    div{
        padding-left: 20px;
    }

    div:first-child{
        padding-left: 10px;
    }

}

div{
   //border-right: 2px solid #d7d7d7; 
   margin-right: 1%;
   
}



div:last-child{
    border-right: none;
}

`

export const ContentItem = styled.div`
padding-left: 10px;
margin-top: 1rem;
@media(max-width: 1126px){
    margin-top: 0;

}
h6{
    font-size: 17px;
    color: rgba(20, 38, 28, 0.7);
    border-bottom: 1px solid #387560;

    width: fit-content;
    padding: 0 0 3px 0;
    font-family: 'Karla', sans-serif;
    font-weight: bolder;
    margin-bottom: 0.5rem;
}


`

export const LinkList = styled(Container)`
padding: 1.5rem .2rem !important;
display: grid;
grid-template-rows: repeat(auto-fill, 1fr);
gap: 1.2rem 0;
width: auto;
`

const Linklabel = styled.label`
font-family: Rubik, sans-serif;
font-size: 16px;
color: rgba(20, 38, 28, 0.9);
:hover{
    cursor: pointer;
}
text-decoration: none !important;  
`

const LinkDiv = styled.div`
transition: .3s;
padding: 0 !important;
:hover{
    transform: scale(1.1); 
 }

 display: flex;
 flex-direction: column;
`

interface FooterLinkProps {
    children: any

}
export const FooterLink = ({ children }: FooterLinkProps) => {
    return (
        <LinkDiv>
            <Linklabel>
                {children}
            </Linklabel>
        </LinkDiv>
    )
}