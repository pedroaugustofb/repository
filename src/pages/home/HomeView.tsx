import React from 'react'

//React-icons
import { AiFillInstagram, AiFillLinkedin, AiOutlineGithub, AiOutlineWhatsApp } from "react-icons/ai"

//Home Styles
import { Container, LinkedIcon } from '../../components/BasicComponents';
import { DefaultButton } from '../../components/Buttons';
import { getText } from '../../services/Texts';
import { 
    LandingSection,
    OverlayBackground,
    TextContainer, 
    IconsContainer, 
    ImageContainer, 
    WelcomeContainer, 
    TitleArea, 
    WelcomeTitle, 
    WelcomeText, 
    TextArea, 
    WelcomeButtonsContainer, 
    AboutTitle,
    AboutContainer,
    LookDown,
    TitleLine
} from './style'


type Props = {
    language: string | null ,
}

const HomeView = ({language}: Props) => {
  return (
    <div>
            {/* Section 1: Landing */}
            <LandingSection flex center width='100%' height='calc(100vh - 6.5rem)' background='#f8f5f4' margin='0 2rem 0 0' overflow="visible">
            <OverlayBackground />
            <TextContainer flex width='40%' height='80%' center>
                <IconsContainer width='20%' height='100%' flex center>
                    <LinkedIcon href='https://github.com/pedroaugustofb' font='1.8rem'>
                        <AiOutlineGithub style={{color: '#14261C'}}/>
                    </LinkedIcon>
                    <LinkedIcon href='https://www.linkedin.com/in/pedrofoltram/' font='1.8rem'>
                        <AiFillLinkedin style={{color: '#14261C'}} />
                    </LinkedIcon>
                    <LinkedIcon href='https://www.instagram.com/pedrofoltram/' font='1.8rem'>
                        <AiFillInstagram style={{color: '#14261C'}} />
                    </LinkedIcon>
                    <LinkedIcon href='https://wa.me/5583986251686' font='1.8rem'>
                        <AiOutlineWhatsApp style={{color: '#14261C'}} />
                    </LinkedIcon>
                </IconsContainer>
                <WelcomeContainer width='80%' height='100%' flex center column>
                    <TitleArea>
                        <WelcomeTitle>
                            {language === 'PT-BR' ? getText("Welcome Title(PT-BR)") : getText("Welcome Title(ENG)") }
                        </WelcomeTitle>
                    </TitleArea>
                    <TextArea>
                        <WelcomeText>
                            {language === 'PT-BR' ? getText("Welcome Text(PT-BR)") : getText("Welcome Text(ENG)") }
                        </WelcomeText>
                    </TextArea>
                    <WelcomeButtonsContainer width='100%' height='100px'>
                        <DefaultButton medium ghost margin='1rem 1rem 1rem 0'>{language === "PT-BR" ? "Saiba mais":"Learn more" }</DefaultButton>

                        <DefaultButton medium margin='1rem' onClick={() => window.open("https://drive.google.com/file/d/1xaWvCGtUdSBY9mEIh42KlGZAie7WFlKH/view?usp=share_link")}>{language === "PT-BR" ? "Baixar Currículo":"Download Cv" }</DefaultButton>
                    </WelcomeButtonsContainer>
                </WelcomeContainer>
            </TextContainer>
            
            <ImageContainer  width='30%' height='80%' />

            <LookDown language={language}/>            
        </LandingSection>

        {/* Section 2: About Me */}
        <AboutContainer flex center width='100%' height='90vh' background='rgba(144, 238, 144, 0.1)' padding='4.5rem 2rem' overflow="visible">
            <Container flex center width='60%'>
                <Container flex center column>
                    <AboutTitle color="#14261C"  fontWeight="800" fontSize='2.4rem' fontFamily="'Karla', sans-serif;">
                        {language === "PT-BR" ? getText("About Title(PT-BR)") : getText("About Title(ENG)")}
                    </AboutTitle>
                    <TitleLine />
                </Container>
            </Container>
        </AboutContainer>
    </div>
  )
}

export default HomeView