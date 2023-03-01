/**
 * Footer component file
 * 13/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../services/GlobalContext'

//Footer Styles
import { DefaultButton } from '../Buttons'
import  * as Style  from './style'

const Footer = () => {

    const { language, backgroundColor } = useGlobalContext();

  return (
    <Style.FooterContainer backgroundColor={backgroundColor}>
        <Style.ContactMeContainer>
            <Style.FooterTitleContainer>  
                <h2>Pedro Foltram</h2>
                <h5>Web Developer</h5>
            </Style.FooterTitleContainer>
            <Style.FooterButtonsArea>
                <DefaultButton small ghost onClick={() => window.open("https://drive.google.com/file/d/1xaWvCGtUdSBY9mEIh42KlGZAie7WFlKH/view?usp=share_link")}  style={{ color: '#fff'}}>
                    {language === "PT-BR" ? "Baixar Currículo": "Download CV"}
                    <i style={{color: '#fff', marginLeft: '10px', fontSize: '14px'}} className='pi pi-download'/>
                </DefaultButton>
            </Style.FooterButtonsArea>
        </Style.ContactMeContainer>
        <Style.ContentContainer>
            <Style.ContentItem>
                <h6>{language === 'PT-BR' ? "Navegação" : "Navigation"}</h6>
                
                <Style.LinkList>
                    <Link to='/'  style={{textDecoration: 'none'}} >
                        <Style.FooterLink>
                            {language === 'PT-BR' ? "Início": "Home"}
                        </Style.FooterLink>
                    </Link>
                    <Link to='/portfolio' style={{textDecoration: 'none'}}>
                        <Style.FooterLink>
                            {language === 'PT-BR' ? "Portifólio": "Portfolio"}
                        </Style.FooterLink>
                    </Link>
                    <Link to='/cv' style={{textDecoration: 'none'}}>
                        <Style.FooterLink>
                            {language === 'PT-BR' ? "Currículo": "Curriculum"}
                        </Style.FooterLink>
                    </Link>
                
                </Style.LinkList>
            
            </Style.ContentItem>
            <Style.ContentItem>
                <h6>{language === 'PT-BR' ? "Redes Sociais" : "Social"}</h6>
            
                <Style.LinkList>

                </Style.LinkList>
            
            </Style.ContentItem>
            <Style.ContentItem>
                <h6>{language === 'PT-BR' ? " Contato" : "Contact"}</h6>
            
                <Style.LinkList>
                
                </Style.LinkList>
            
            </Style.ContentItem>
        </Style.ContentContainer>
        <Style.AllRightsReservedContainer>
            @2023 Pedro Foltram | All Rights Reserved
        </Style.AllRightsReservedContainer>
    </Style.FooterContainer>
  )
}

export default Footer