import styled from "styled-components";
import { Link } from "react-router-dom";

/* Desktop */
export const NavbarContainer = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
background: #f3f6f3;
height: 6.5rem;
padding: 0 10rem;
@media(max-width: 920px){
    padding: 0 2rem;
    justify-content: space-between;
}
`

export const NavList = styled.ul`
list-style: none;
display: flex;
li{
    margin: 1rem;
    @media(max-width: 920px){
        display:none;
    }
}
button{
    margin: 0.5rem;
}


`
export const NavLi = styled.li`
letter-spacing: 2px;

`

export const NavLink = styled(Link)`
text-decoration: none;
font: 1.0625rem;
color: #14261C;
:hover{
    cursor:pointer;
    color: #DC143C;
}
`
type ItemProps = {
    text?: string | null,
    to: string,
    home?: boolean
};
export const NavItem = ({text, to, home}: ItemProps) => {
    return(
        <NavLi>
            <NavLink to={to}>
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
@media(max-width: 920px){
    font-size: 0.6rem;
}
border:none;
background: transparent;
opacity: 0.7;
color: #14261C;
:hover{
    opacity: 1;
    cursor:pointer;
    color: #DC143C;
}
${props => props.active &&   
    'color: #DC143C;'
}
`
/*Mobile */

const MobileContainer = styled.div<MobileModalProps>`
height: 100%;
@media(min-width: 920px){
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
@media(min-width: 920px){
    width: 101px;
}
`
interface MobileModalProps {
    active: boolean,
}
export const MobileModal = styled.div<MobileModalProps>`
@media(min-width: 920px){
    display:none;
}
@media(max-width: 920px){
    z-index: -99;
    position: absolute;
    transition: 0.3s ;
    ${props => props.active &&
        `
        display: grid;
        left: 0;
        top: 6rem;
        width: 100vw;
        height: 3.5rem;
        background: #f3f6f3;
        
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

export const MobileList = styled.ul`
width: 100%;
height: 100%;
display: flex;
padding: 0 0 1rem 0;
justify-content: center;
list-style: none;
overflow: hidden;
transition: 0.3s ;
li{
    color: red;
    padding: 0.5rem;
    margin: 0 0.5rem;
}
`
