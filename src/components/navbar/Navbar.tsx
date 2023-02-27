/**
 * Navbar component file
 * 07/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import React, { useState} from 'react'

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
    MobileList,
    Bar
} from './style'

type NavbarProps = {
    language: string | null,
    background?: string,
    setPath: (value:string) => void,
}
const Navbar = ({language, background, setPath}: NavbarProps) => {
    const [Modal, setModal] = useState<boolean>(false);

    return (
        <>
        <NavbarContainer backgroundColor={background}>
            {/*Mobile*/}
            <MobileButton onClick={() => setModal(!Modal)}>
                <MobileStruct active={Modal}/>
                <MobileModal active={Modal} backgroundColor={background}>
                    <MobileList active={Modal}>
                        <NavItem to="/" home setPath={setPath}/>
                        <NavItem text={language === 'PT-BR' ? 'Portfólio' : 'Portfolio' } to="/portfolio" setPath={setPath}/>
                        <NavItem text={language === 'PT-BR' ? 'Currículo' : 'Curriculum' } to="/cv" setPath={setPath}/>
                    </MobileList>
                </MobileModal>
            </MobileButton>
            {/*Desktop*/}
            <NavList>
                <NavItem text={language === 'PT-BR' ? 'Início' : 'Home' } to="/" setPath={setPath}/>
                <NavItem text={language === 'PT-BR' ? 'Portfólio' : 'Portfolio' } to="/portfolio"  setPath={setPath}/>
                <NavItem text={language === 'PT-BR' ? 'Currículo' : 'Curriculum' } to="/cv"  setPath={setPath}/>

            </NavList>  
            <NavList>
                <LanguageButton active={language === 'ENG'} onClick={() => setLanguage('ENG')} >ENG</LanguageButton>
                <Bar />
                <LanguageButton active={language === 'PT-BR'} onClick={() => setLanguage('PT-BR')} >PT-BR</LanguageButton>
            </NavList>
        </NavbarContainer>
        </>
    )
  
}

export default Navbar