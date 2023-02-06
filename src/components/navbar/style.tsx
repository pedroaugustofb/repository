import styled from "styled-components";
import { Link } from "react-router-dom";



/* Desktop */
export const NavbarContainer = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
background: #E6E6FA;
height: 10vh;
`

export const NavList = styled.ul`
list-style: none;
display: flex;

`
export const NavLi = styled.li`
letter-spacing: 3px;
margin-left: 32px;
@media(max-width: 768px){
    display:none;
}
`

export const NavLink = styled(Link)`
text-decoration: none;
font: 1.2rem bold small-caps;
color: #808080;
:hover{
    color: #DC143C;
    opacity: 0.7;
    cursor:pointer;
}
`




type ItemProps = {
    text?: string | null,
    to: string,
};
export const NavItem = ({text, to}: ItemProps) => {
    return(
        <NavLi>
            <NavLink to={to}>
                {text}
            </NavLink>
        </NavLi>
    )
};


