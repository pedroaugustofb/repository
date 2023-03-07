/**
 * Navbar component file
 * 07/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import { useState, lazy, Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContext';

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

//components
const Fallback = lazy( () => import("../../components/Fallback").then(module => { return { default: module.default }}))

const Navbar = () => {
    const [Modal, setModal] = useState<boolean>(false);

    const { language, setLanguage, backgroundColor } = useGlobalContext();

    const { setBackgroundColor } = useGlobalContext();
    let location = useLocation();

    useEffect( () => {
        switch (location.pathname){
        case '/': 
            return setBackgroundColor("#f8f5f4")
        case '/portfolio':
            return setBackgroundColor("#a825f4")
        case '/cv':
            return setBackgroundColor("#c8f544")
        default:
            return setBackgroundColor('transparent')
    }
    }, [location])

    return (
        <>
        <NavbarContainer backgroundColor={backgroundColor}>
            {/*Mobile*/}
            <MobileButton onClick={() => setModal(prev => !prev)}>
                <MobileStruct active={Modal}/>
                <MobileModal active={Modal} backgroundColor={backgroundColor}>
                    <MobileList active={Modal}>
                        <NavItem to="/" home/>
                        <NavItem text={language === 'PT-BR' ? 'Portfólio' : 'Portfolio' } to="/portfolio"  />
                        <NavItem text={language === 'PT-BR' ? 'Currículo' : 'Curriculum' } to="/cv"  />
                    </MobileList>
                </MobileModal>
            </MobileButton>


            {/*Desktop*/}
            <NavList>
                <NavItem text={language === 'PT-BR' ? 'Início' : 'Home' } to="/" />
                <NavItem text={language === 'PT-BR' ? 'Portfólio' : 'Portfolio' } to="/portfolio" />
                <NavItem text={language === 'PT-BR' ? 'Currículo' : 'Curriculum' } to="/cv"  />

            </NavList>  
            <NavList>
                <LanguageButton active={language === 'ENG'} onClick={() => setLanguage('ENG')} >ENG</LanguageButton>
                <Bar />
                <LanguageButton active={language === 'PT-BR'} onClick={() => setLanguage('PT-BR')} >PT-BR</LanguageButton>
            </NavList>
        </NavbarContainer>
        <Suspense fallback={ <Fallback />}>
            <Outlet/>
        </Suspense>
        </>
    )
  
}

export default Navbar
