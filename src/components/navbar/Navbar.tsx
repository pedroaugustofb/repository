import React from 'react'

// service to change language
import { getLanguage } from '../../services/Langague' 

//Navbar Styles
import { 
    NavbarContainer,
    NavList,
    NavItem,
} from './style'



type NavbarProps = {

}
const Navbar = (Props: NavbarProps) => {
    const language: string | null = getLanguage()


    return (
        <>
        <NavbarContainer>
        <NavList>
            {/*Desktop*/}
            <NavItem text={language === 'PT-BR' ? 'Início' : 'Home' } to="/home" />
            <NavItem text={language === 'PT-BR' ? 'Portfólio' : 'Portfolio' } to="/home" />
            <NavItem text={language === 'PT-BR' ? 'Currículo' : 'Curriculum' } to="/home" />

        </NavList>
        </NavbarContainer>
        </>
    )
  
}

export default Navbar