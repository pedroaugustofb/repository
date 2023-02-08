/**
 * Home Component File
 * 07/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import React, { Component } from 'react'
//React-icons
import { AiFillInstagram, AiFillLinkedin, AiOutlineGithub, AiOutlineWhatsApp } from "react-icons/ai"

//Home Styles
import { LinkedIcon } from '../../components/BasicComponents';
import { getText } from '../../services/Texts';
import { LandingSection, TextContainer, IconsContainer, ImageContainer, WelcomeContainer, TitleArea, WelcomeTitle, WelcomeText, TextArea } from './style'


type Props = {
    language: string | null,
}

type State = {}

export default class Home extends Component<Props, State> {
  state = {}

  render() {
    const { language } = this.props;
    return (
      <LandingSection flex center width='100%' height='70vh' background='#f8f5f4' margin='0 2rem 0 0' overflow="visible">
        <TextContainer flex width='40%' height='80%' center>
            <IconsContainer width='20%' height='100%' flex center>
                <LinkedIcon href='https://github.com/pedroaugustofb' font='1.8rem'>
                    <AiOutlineGithub style={{color: '#14261C'}}/>
                </LinkedIcon>
                <LinkedIcon href='https://www.instagram.com/pedrofoltram/' font='1.8rem'>
                    <AiFillInstagram style={{color: '#14261C'}}/>
                </LinkedIcon>
                <LinkedIcon href='https://www.linkedin.com/in/pedrofoltram/' font='1.8rem'>
                    <AiFillLinkedin style={{color: '#14261C'}}/>
                </LinkedIcon>
                <LinkedIcon href='https://wa.me/5583986251686' font='1.8rem'>
                    <AiOutlineWhatsApp style={{color: '#14261C'}}/>
                </LinkedIcon>
            </IconsContainer>
            <WelcomeContainer width='80%' height='100%'>
                <TitleArea>
                    <WelcomeTitle>
                        {language === 'PT-BR' ? getText("Welcome Title(PT-BR)") : getText("Welcome Title(ENG)") }
                    </WelcomeTitle>
                </TitleArea>
                <TextArea>
                    <WelcomeText>

                    </WelcomeText>
                </TextArea>
            </WelcomeContainer>
        </TextContainer>
        
        <ImageContainer  width='30%' height='80%'>

        </ImageContainer>
        
      </LandingSection>
    )
  }
}