/**
 * Footer component file
 * 13/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import React from 'react'
import { useGlobalContext } from '../../services/GlobalContext'

//Footer Styles
import { DefaultButton } from '../Buttons'
import {
    FooterContainer,
    ContactMeContainer,
    AllRightsReservedContainer,
    ContentContainer,
    ContentItem,
    FooterTitleContainer,
    FooterButtonsArea,
} from './style'


const Footer = () => {

    const { language, backgroundColor } = useGlobalContext();

  return (
    <FooterContainer backgroundColor={backgroundColor}>
        <ContactMeContainer>
            <FooterTitleContainer>  
                <h2>Pedro Foltram</h2>
                <h5>Web Developer</h5>
            </FooterTitleContainer>
            <FooterButtonsArea>
                <DefaultButton small ghost onClick={() => window.open("https://drive.google.com/file/d/1xaWvCGtUdSBY9mEIh42KlGZAie7WFlKH/view?usp=share_link")}  style={{ color: '#fff'}}>
                    {language === "PT-BR" ? "Baixar Currículo": "Download CV"}
                    <i style={{color: '#fff', marginLeft: '10px', fontSize: '14px'}} className='pi pi-download'/>
                </DefaultButton>
            </FooterButtonsArea>
        </ContactMeContainer>
        <ContentContainer>
            <ContentItem>
                <h6>{language === 'PT-BR' ? "Navegação" : "Navigation"}</h6>
            </ContentItem>
            <ContentItem>
                <h6>{language === 'PT-BR' ? "Redes Sociais" : "Social"}</h6>
            </ContentItem>
            <ContentItem>
                <h6>{language === 'PT-BR' ? " Contato" : "Contact"}</h6>
            </ContentItem>
        </ContentContainer>
        <AllRightsReservedContainer>
            @2023 Pedro Foltram | All Rights Reserved
        </AllRightsReservedContainer>
    </FooterContainer>
  )
}

export default Footer