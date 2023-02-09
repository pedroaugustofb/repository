/**
 * This file has all the styles used to do the navbar component
 * 07/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import styled from "styled-components";
import { Link } from "react-router-dom";


/* Desktop */
interface NavBackGround {
    backgroundColor?: string,
}
export const NavbarContainer = styled.nav<NavBackGround>`
display: flex;
justify-content: space-around;
align-items: center;
background: ${props => props.backgroundColor};
height: 6.5rem;
padding: 0 10rem;
@media(max-width: 1126px){
    padding: 0 2rem;
    justify-content: space-between;
}
`

export const NavList = styled.ul`
list-style: none;
display: flex;
li{
    margin: 1rem;
    @media(max-width: 1126px){
        display:none;
    }
}
button{
    margin: 0.5rem;
}

@media(min-width: 1126px){
    li{
        min-width: 80px;
        display: flex;
        justify-content: center;
    }
}
`
export const NavLi = styled.li`
letter-spacing: 2px;

`

export const NavLink = styled(Link)`
text-decoration: none;
font-size: 1.1825rem;
font-family: 'Rubik', sans-serif;
color: #14261C;
:hover{
    cursor:pointer;
    color: #32CD32;
}


`

type ItemProps = {
    text?: string | null,
    to: string,
    home?: boolean,
    setPath: (value: string) => void
};
export const NavItem = ({text, to, home, setPath }: ItemProps) => {
    
    return(
        <NavLi>
            <NavLink to={to} onClick={() => setPath(to)}>
                {text}
                {home && <i className="pi pi-home" style={{fontSize: '1rem'}}/>}
            </NavLink>
        </NavLi>
    )
};


interface LanguageTextProps {
    active: boolean
}
export const LanguageButton = styled.button<LanguageTextProps>`
letter-spacing: 1px;
font: 0.8rem;
@media(max-width: 1126px){
    font-size: 0.6rem;
}
border:none;
background: transparent;
opacity: 0.7;
color: #14261C;
position: sticky;
:hover{
    opacity: 1;
    cursor:pointer;
    color: #32CD32;
}
${props => props.active &&   
    'color: #32CD32;'
}
`
export const Bar = styled.div`
border-right: 1px solid #d7d7d7;
margin-top: 7.5px;
height: 1rem;
`
/*Mobile */

const MobileContainer = styled.div<MobileModalProps>`
height: 100%;
@media(min-width: 1126px){
    display:none;
}
cursor: pointer;
${props => props.active &&
    `
        transform: rotate(-180deg);
        
        `
}

transition: 0.3s;

div{
    opacity:0.7;
    width: 32px;
    height: 2px;
    background: #14261C;
    margin: 4px;
    transition: 0.3s;

}
`
const DivToMargin = styled.div`
@media(min-width: 1126px){
    width: 101px;
}
`
interface MobileModalProps {
    active: boolean,
    backgroundColor?: string,
}
export const MobileModal = styled.div<MobileModalProps>`
@media(min-width: 1126px){
    display:none;
}
@media(max-width: 1126px){
    position: absolute;
    transition: 0.3s ;
    ${props => props.active &&
        `
        display: grid;
        left: 0;
        top: 6rem;
        width: 100vw;
        height: 2.5rem;
        background: ${props.backgroundColor};
        z-index: 4;
    `  
    
    }

}
`

export const MobileButton = styled.button`
border: none;
background: transparent;
`

interface MobileStructProps {
    active: boolean
}
export const MobileStruct = ({active}: MobileStructProps) => {
    
    return (
        <DivToMargin>
            <MobileContainer active={active}>
                <i className="pi pi-angle-double-down" style={{fontSize: '1.2rem', color: '#14261C'}} />
            </MobileContainer>
        </DivToMargin>
    )
}

export const MobileList = styled.ul<MobileStructProps>`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
list-style: none;
overflow: hidden;
transition: 0.3s ;
z-index: 0;
li{
    color: red;
    padding: 0.5rem;
    margin: 0 0.5rem;
    
}
${props => !props.active &&
    `
    display: none;
    `}
`
