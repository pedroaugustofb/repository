/**
 * Navbar component file
 * 07/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import React, {useState} from 'react'

// service to change language
import { setLanguage } from '../../services/Langague' 

//Navbar Styles
import { 
    NavbarContainer,
    NavList,
    NavItem,
    LanguageButton,
    MobileStruct,
    MobileModal,
    MobileButton,
    MobileList
} from './style'



type NavbarProps = {
    language: string | null,
}
const Navbar = ({language}: NavbarProps) => {
    const [Modal, setModal] = useState<boolean>(false);

    return (
        <>
        <NavbarContainer>
            {/*Mobile*/}
            <MobileButton onClick={() => setModal(!Modal)}>
                <MobileStruct active={Modal}/>
                <MobileModal active={Modal}>
                    <MobileList active={Modal}>
                        <NavItem to="/" home/>
                        <NavItem text={language === 'PT-BR' ? 'Portfólio' : 'Portfolio' } to="/portfolio" />
                        <NavItem text={language === 'PT-BR' ? 'Currículo' : 'Curriculum' } to="/cv" />
                    </MobileList>
                </MobileModal>
            </MobileButton>
            {/*Desktop*/}
            <NavList>
                <NavItem text={language === 'PT-BR' ? 'Início' : 'Home' } to="/" />
                <NavItem text={language === 'PT-BR' ? 'Portfólio' : 'Portfolio' } to="/portfolio" />
                <NavItem text={language === 'PT-BR' ? 'Currículo' : 'Curriculum' } to="/cv" />

            </NavList>  
            <NavList>
                <LanguageButton active={language === 'ENG'} onClick={() => setLanguage('ENG')} >ENG</LanguageButton>
                <LanguageButton active={language === 'PT-BR'} onClick={() => setLanguage('PT-BR')} >PT-BR</LanguageButton>
            </NavList>
        </NavbarContainer>
        </>
    )
  
}

export default Navbar