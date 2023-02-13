/**
 * Footer component file
 * 13/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import React from 'react'
import { DefaultButton } from '../Buttons'

//Footer Styles
import {
    FooterContainer,
    ContactMeContainer,
    AllRightsReservedContainer,
    ContentContainer,
    ContentItem,
    FooterTitleContainer,
    FooterButtonsArea,
} from './style'

type Props = {
    language: string | null,
    background?: string,
    setPath: (value:string) => void,
}

const Footer = ({background, language, setPath}: Props) => {
  return (
    <FooterContainer backgroundColor={background}>
        <ContactMeContainer>
            <FooterTitleContainer>  
                <h2>Pedro Foltram</h2>
                <h5>Web Developer</h5>
            </FooterTitleContainer>
            <FooterButtonsArea>
                <DefaultButton small ghost onClick={() => window.open("https://drive.google.com/file/d/1xaWvCGtUdSBY9mEIh42KlGZAie7WFlKH/view?usp=share_link")}>
                    {language === "PT-BR" ? "Baixar Currículo": "Download CV"}
                    <i style={{color: '#fff', marginLeft: '10px', fontSize: '14px'}} className='pi pi-download'/>
                </DefaultButton>
            </FooterButtonsArea>
        </ContactMeContainer>
        <ContentContainer>
            <ContentItem>
                <h6>{language === 'PT-BR' ? "Continue em Contato" : "Stay in Touch"}</h6>
            </ContentItem>
            <ContentItem>
                <h6>{language === 'PT-BR' ? "Continue em Contato" : "Stay in Touch"}</h6>
            </ContentItem>
            <ContentItem>
                <h6>{language === 'PT-BR' ? "Continue em Contato" : "Stay in Touch"}</h6>
            </ContentItem>
        </ContentContainer>
        <AllRightsReservedContainer>
            @2023 Pedro Foltram | All Rights Reserved
        </AllRightsReservedContainer>
    </FooterContainer>
  )
}

export default Footer