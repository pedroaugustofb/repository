/**
 * Footer component file
 * 13/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/GlobalContext'

//Footer Styles
import { DefaultButton } from '../../components/Buttons'
import  * as Style  from './style'

//React Icons
import { RiSuitcaseFill } from 'react-icons/ri'
import { AiFillHome, AiFillInstagram, AiFillLinkedin, AiOutlineGithub, AiOutlineWhatsApp } from 'react-icons/ai'
import { HiClipboardDocumentList } from 'react-icons/hi2'
import { LinkedIcon } from '../../components/BasicComponents'
import { MdEmail } from 'react-icons/md'

const Footer = () => {

    const { language } = useGlobalContext();

  return (
    <Style.FooterContainer>
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
                           <AiFillHome style={{marginRight: '5px'}} />
                           {language === 'PT-BR' ? "Início" : "Home"}
                        </Style.FooterLink>
                    </Link>
                    <Link to='/portfolio' style={{textDecoration: 'none'}}>
                        <Style.FooterLink>
                            <RiSuitcaseFill style={{marginRight: '5px'}} />
                            {language === 'PT-BR' ? "Portfólio" : "Portfolio"}
                        </Style.FooterLink>
                    </Link>
                    <Link to='/cv' style={{textDecoration: 'none'}}>
                        <Style.FooterLink>
                            <HiClipboardDocumentList style={{marginRight: '5px'}}/>
                            {language === 'PT-BR' ? "Currículo" : "Curriculum"}
                        </Style.FooterLink>
                    </Link>
                
                </Style.LinkList>
            
            </Style.ContentItem>
            <Style.ContentItem>
                <h6>{language === 'PT-BR' ? "Redes Sociais" : "Social"}</h6>
            
                <Style.LinkList>
                    <LinkedIcon href='https://github.com/pedroaugustofb'>
                        <Style.FooterLink>
                            <AiOutlineGithub style={{marginRight: '5px'}}/>
                            GitHub
                        </Style.FooterLink>
                    </LinkedIcon>
                    <LinkedIcon href='https://www.linkedin.com/in/pedrofoltram/' >
                        <Style.FooterLink>
                            <AiFillLinkedin style={{marginRight: '5px'}} />
                            Linkedin
                        </Style.FooterLink>
                    </LinkedIcon>
                    <LinkedIcon href='https://www.instagram.com/pedrofoltram/' >
                        <Style.FooterLink>
                            <AiFillInstagram style={{marginRight: '5px'}} />
                            Instagram
                        </Style.FooterLink>
                    </LinkedIcon>
                </Style.LinkList>
            
            </Style.ContentItem>

            <Style.ContentItem>
                <h6>{language === 'PT-BR' ? " Contato" : "Contact"}</h6>
            
                <Style.LinkList>
                
                    <LinkedIcon href='https://wa.me/5583986251686' >
                        <Style.FooterLink>
                            <AiOutlineWhatsApp style={{marginRight: '5px'}} />
                            Whatsapp
                        </Style.FooterLink>
                    </LinkedIcon>
                    <LinkedIcon href='mailto:pedroaugustofolb@gmail.com' >
                        <Style.FooterLink>
                            <MdEmail style={{marginRight: '5px'}} />
                            Email
                        </Style.FooterLink>
                    </LinkedIcon>
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