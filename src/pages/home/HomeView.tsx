/**
 * This file is the view part of the home group of components
 * 07/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */


import React from 'react'

//React-icons
import { 
    AiFillInstagram,
    AiFillLinkedin, 
    AiOutlineGithub, 
    AiOutlineWhatsApp,
 } from "react-icons/ai"

import {
FaReact,
FaNodeJs
} from "react-icons/fa"
 
import {
    SiJavascript,
    SiTypescript,
    SiMongodb,
    SiC,
    SiCss3,
    SiHtml5,
    SiCplusplus,
    SiExpress,
    SiMysql,
    SiJava,
    SiSpringboot
} from "react-icons/si"

//Home Styles
import { Container, LinkedIcon, Title } from '../../components/BasicComponents';
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
    AboutSection,
    LookDown,
    TitleLine,
    AboutMeContentContainer,
    AboutMeTextsContainer,
    AboutMeImageContainer,
    BackgroundImage,
    Image,
    IconDiv,
    TitleAboutContainer,
    TitleLineAnimation,
} from './style'


type Props = {
    language: string | null ,
}

const HomeView = ({language}: Props) => {
  return (
    <>
            {/* Section 1: Landing */}
            <LandingSection flex center width='100%'  background='#f8f5f4' margin='0 2rem 0 0' overflow="visible">
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
                        {/*@ts-ignore */}
                        <DefaultButton medium ghost margin='1rem' onClick={() => document.getElementById("section2").scrollIntoView({behavior: "smooth"}) }>{language === "PT-BR" ? "Saiba mais":"Learn more" }</DefaultButton>
 
                        <DefaultButton medium margin='1rem' onClick={() => window.open("https://drive.google.com/file/d/1xaWvCGtUdSBY9mEIh42KlGZAie7WFlKH/view?usp=share_link")}>{language === "PT-BR" ? "Baixar Currículo":"Download Cv" }</DefaultButton>
                    </WelcomeButtonsContainer>
                </WelcomeContainer>
            </TextContainer>
            
            <ImageContainer  width='30%' height='80%' />

            <LookDown language={language}/>            
        </LandingSection>

        {/* Section 2: About Me */}
        <AboutSection id="section2" flex center column width='100%'  background='rgba(144, 238, 144, 0.1)' padding='4.5rem 2rem' overflow="visible">
            <Container flex center width='60%'>
                <TitleAboutContainer flex center column>
                    <AboutTitle color="#14261C"  fontWeight="800" fontSize='2.4rem' fontFamily="'Rubik', sans-serif;">
                        {language === "PT-BR" ? getText("About Title(PT-BR)") : getText("About Title(ENG)")}
                    </AboutTitle>
                    <TitleLine />
                    <TitleLineAnimation id="aboutAnimation"/>
                </TitleAboutContainer>
            </Container>
            
            <AboutMeContentContainer>
                <AboutMeImageContainer>
                    <BackgroundImage>
                        <Image />
                    </BackgroundImage>
                </AboutMeImageContainer>
                <AboutMeTextsContainer>
                    <Container flex  width='100%' style={{ textAlign: 'left', maxWidth: '461px' }} >
                        <Title color="#14261C" fontSize='25px' fontWeight='800' fontFamily="'Rubik', sans-serif" mobile='18px' >{language === "PT-BR" ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " }</Title>
                    </Container>
                    <TextArea padding='2rem 0' width="70%" style={{minWidth:'395px'}}>
                        <WelcomeText>{language === "PT-BR" ? getText("About me Text(PT-BR)") : getText("About me Text(ENG)")}</WelcomeText>
                    </TextArea>
                    <Container flex  width='100%' style={{ textAlign: 'left', maxWidth: '461px', }} >
                        <Title color="#14261C" fontSize='25px' fontWeight='800' fontFamily="'Rubik', sans-serif" mobile='18px' >{language === "PT-BR" ? "Experiência em Tecnologias." : "Experience in Technologies." }</Title>
                    </Container>
                    <Container width='70%' grid column={false} padding="1rem" style={{gap: '25px', gridTemplateColumns: 'repeat(auto-fill, 2rem)' }}>
                        <IconDiv><SiJavascript /></IconDiv>
                        <IconDiv><SiTypescript /></IconDiv>
                        <IconDiv><FaReact /></IconDiv>
                        <IconDiv><FaNodeJs /></IconDiv>
                        <IconDiv><SiExpress /></IconDiv>
                        <IconDiv><SiMongodb /></IconDiv>
                        <IconDiv><SiHtml5 /></IconDiv>
                        <IconDiv><SiCss3 /></IconDiv>
                        <IconDiv><SiC /></IconDiv>
                        <IconDiv><SiCplusplus /></IconDiv>
                        <IconDiv><SiJava /></IconDiv>
                        <IconDiv><SiSpringboot /></IconDiv>
                        <IconDiv><SiMysql /></IconDiv>
                    </Container>
                </AboutMeTextsContainer>
            </AboutMeContentContainer>
        </AboutSection>
    </>
  )
}

export default HomeView