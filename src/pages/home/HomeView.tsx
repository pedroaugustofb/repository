/**
 * This file is the view part of the home group of components
 * 07/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContext';

//React-icons
import { AiFillInstagram, AiFillLinkedin, AiOutlineGithub, AiOutlineWhatsApp } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { FaReact, FaNodeJs } from "react-icons/fa"
 
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
import * as Style from './style'
import TextJson from '../../data/Texts.json'

const HomeView = () => {

    const { language } = useGlobalContext();

  return (
    <>
            <Style.OverlayBackground />
            <Style.OverlayBackground2 />

            {/* Section 1: Landing */}
            <Style.LandingSection flex center width='100%'  background='#f8f5f4' margin='0 2rem 0 0' overflow="visible">
            <Style.TextContainer flex width='40%' height='80%' center>
                <Style.IconsContainer width='20%' height='100%' flex center>
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
                    <LinkedIcon href='mailto:pedroaugustofolb@gmail.com' font='1.8rem'>
                        <MdEmail style={{color: '#14261C'}} />
                    </LinkedIcon>
                </Style.IconsContainer>
                <Style.WelcomeContainer width='80%' height='100%' flex center column>
                    <Style.TitleArea>
                        <Style.WelcomeTitle>
                            {language === 'PT-BR' ? TextJson['Welcome Title(PT-BR)'] : TextJson["Welcome Title(ENG)"] }
                        </Style.WelcomeTitle>
                    </Style.TitleArea>
                    <Style.TextArea margin='0 0  2rem 0'>
                        <Style.WelcomeText>
                            {language === 'PT-BR' ? TextJson["Welcome Text(PT-BR)"] : TextJson["Welcome Text(ENG)"] }
                        </Style.WelcomeText>
                    </Style.TextArea>
                    <Style.WelcomeButtonsContainer width='100%' height='100px'>
                        <DefaultButton medium ghost margin='1rem' onClick={() => document.getElementById("section2")!.scrollIntoView({behavior: "smooth"}) }>{language === "PT-BR" ? "Saiba mais":"Learn more" }</DefaultButton>
 
                        <DefaultButton medium margin='1rem' onClick={() => window.open("https://drive.google.com/file/d/1xaWvCGtUdSBY9mEIh42KlGZAie7WFlKH/view?usp=share_link")}>{language === "PT-BR" ? "Baixar Currículo":"Download Cv" }</DefaultButton>
                    </Style.WelcomeButtonsContainer>
                </Style.WelcomeContainer>
            </Style.TextContainer>
            
            <Style.ImageContainer  width='30%' height='80%' />

            <Style.LookDown language={language}/>            
        </Style.LandingSection>

        {/* Section 2: About Me */}
        <Style.AboutSection id="section2" flex center column width='100%'  background='rgba(144, 238, 144, 0.1)' padding='4.5rem 2rem' overflow="visible">
            <Container flex center width='60%'>
                <Style.TitleAboutContainer flex center column>
                    <Style.AboutTitle color="#14261C"  fontWeight="800" fontSize='2.4rem' fontFamily="'Rubik', sans-serif;">
                        {language === "PT-BR" ? TextJson["About Title(PT-BR)"] : TextJson["About Title(ENG)"]}
                    </Style.AboutTitle>
                    <Style.TitleLine />
                    <Style.TitleLineAnimation id="aboutAnimation"/>
                </Style.TitleAboutContainer>
            </Container>
            
            <Style.AboutMeContentContainer>
                <Style.AboutMeImageContainer>
                    <Style.BackgroundImage>
                        <Style.Image />
                    </Style.BackgroundImage>
                </Style.AboutMeImageContainer>
                <Style.AboutMeTextsContainer>
                    <Container flex  width='100%' style={{ textAlign: 'left', maxWidth: '461px' }} >
                        <Title color="#14261C" fontSize='25px' fontWeight='800' fontFamily="'Rubik', sans-serif" mobile='18px' >{language === "PT-BR" ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " }</Title>
                    </Container>
                    <Style.TextArea padding='2rem 0' width="70%" style={{minWidth:'395px'}}>
                        <Style.WelcomeText>{language === "PT-BR" ? TextJson["About me Text(PT-BR)"] : TextJson["About me Text(ENG)"]}</Style.WelcomeText>
                    </Style.TextArea>
                    <Container flex  width='100%' style={{ textAlign: 'left', maxWidth: '461px', }} >
                        <Title color="#14261C" fontSize='25px' fontWeight='800' fontFamily="'Rubik', sans-serif" mobile='18px' >{language === "PT-BR" ? "Experiência em Tecnologias." : "Experience in Technologies." }</Title>
                    </Container>
                    <Container width='100%' grid column={false} padding="2rem 1rem" style={{gap: '25px', gridTemplateColumns: 'repeat(auto-fill, 32px)', maxWidth: '406px' }}>
                        <Style.IconDiv><SiJavascript /></Style.IconDiv>
                        <Style.IconDiv><SiTypescript /></Style.IconDiv>
                        <Style.IconDiv><FaReact /></Style.IconDiv>
                        <Style.IconDiv><FaNodeJs /></Style.IconDiv>
                        <Style.IconDiv><SiExpress /></Style.IconDiv>
                        <Style.IconDiv><SiMongodb /></Style.IconDiv>
                        <Style.IconDiv><SiHtml5 /></Style.IconDiv>
                        <Style.IconDiv><SiCss3 /></Style.IconDiv>
                        <Style.IconDiv><SiC /></Style.IconDiv>
                        <Style.IconDiv><SiCplusplus /></Style.IconDiv>
                        <Style.IconDiv><SiJava /></Style.IconDiv>
                        <Style.IconDiv><SiSpringboot /></Style.IconDiv>
                        <Style.IconDiv><SiMysql /></Style.IconDiv>
                    </Container>
                    <Style.WelcomeButtonsContainer>
                        <DefaultButton medium ghost borderColor='#14261C' margin='1rem'>
                            <Link to="/portfolio" style={{color:"#14261C",textDecoration:"none"}}>
                                {language === "PT-BR" ? "Ver Portfolio" : "Show Portfolio"}
                            </Link>
                        </DefaultButton>
                    </Style.WelcomeButtonsContainer>
                </Style.AboutMeTextsContainer>
            </Style.AboutMeContentContainer>
        </Style.AboutSection>
    </>
  )
}

export default HomeView