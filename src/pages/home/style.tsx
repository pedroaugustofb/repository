/**
 * This file has all the styles used to do the home component
 * 07/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import styled, { keyframes } from "styled-components";
import { BasicSection, Container, Title } from "../../components/BasicComponents";

/* Section 1 */
const overlayAnimation = keyframes`
0%{
    transform: translateX(25px);
}
50%{
    transform: translateX(0px);
}
100%{
    transform: translateX(25px);
}
`;
export const OverlayBackground = styled.div`
  @media (min-width: 1126px) {
    width: 95%;
    height: 90%;
    background: #f5f2f2;
    overflow: hidden;
    border-radius: 50%;
    position: absolute;
    top: 10%;
    left: -40%;
    z-index: 0;
    animation: ${overlayAnimation} 5s linear infinite;
  }
`;

export const OverlayBackground2 = styled(OverlayBackground)`
  @media (min-width: 1126px) {
    width: 50%;
    height: 46%;
    top: 136vh;
    left: 67%;
    background: rgba(248, 245, 244, 0.5);
  }
`;

export const LandingSection = styled(BasicSection)`
  overflow: hidden;
  height: calc(100vh - 6.5rem);
  align-items: flex-start;
  @media (max-width: 1126px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const TextContainer = styled(Container)`
  z-index: 1;
  @media (max-width: 1126px) {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 100%;
  }
`;

export const IconsContainer = styled(Container)`
  justify-content: center;
  a {
    margin: 16px 0px;
    transition: 0.3s;
    :hover {
      transform: scale(1.2);
    }
  }
  align-items: end;
  flex-direction: column;
  padding-right: 15px;
  padding-top: 1.5rem;
  @media (max-width: 1126px) {
    width: 80%;
    height: 30%;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    margin: 0;
    align-items: center;

    a {
      margin: 4px 16px;
    }
  }

  @media (max-width: 300px) {
    a {
      margin: 4px 8px;
    }
  }
`;

export const WelcomeContainer = styled(Container)`
  padding: 0 1rem;
  align-items: flex-start;
  @media (max-width: 1126px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleArea = styled(Container)`
  padding: 2rem 0;
  line-height: 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  letter-spacing: -1px;
  @media (max-width: 1126px) {
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 0 0 2rem 0;
  }
  @media (max-width: 1400px) {
    font-size: 1.84rem;
    line-height: 2.5rem;
  }
`;

export const WelcomeTitle = styled.h1`
  font-family: "Rubik", sans-serif;
  font-weight: 800;
  font-size: 3.415rem;
  color: #14261c;
  opacity: 0.9;
  @media (max-width: 1400px) {
    font-size: 1.84rem;
  }
`;

export const TextArea = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: justify;
  @media (max-width: 1126px) {
    text-align: justify;
    justify-content: center;
    font-size: 1.5rem;
    width: 100%;
    margin: 0;
  }
  @media (max-width: 1400px) {
    font-size: 1.84rem;
  }
`;
export const WelcomeText = styled.p`
  font-family: "Karla", sans-serif;
  font-size: 17px;
  color: #4e5652;
  opacity: 0.9;
`;

export const WelcomeButtonsContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 390px;

  @media (max-width: 1126px) {
    max-width: 440px;
    justify-content: center;
  }
`;

export const ImageContainer = styled(Container)`
  background: url("https://cdn.discordapp.com/attachments/730086912391643227/1072671292483965078/programmer.png")
    no-repeat center center;
  background-size: cover;
  overflow: visible;
  z-index: 1;
  min-width: 400px;
  @media (max-width: 1126px) {
    width: 35%;
    height: 70%;
    min-width: 0px;
  }
  @media (max-width: 500px) {
    width: 70%;
  }
`;
const LookDownContainer = styled(Container)`
  @media (max-width: 920px) {
    display: none;
  }

  position: absolute;
  right: 0;
  top: calc(100vh - 150px);
  display: flex;
  transform: rotate(90deg);
`;
const LookDownText = styled.p`
  font-family: "Rubik", sans-serif;
  color: #14261c;
  font-size: 14px;
  letter-spacing: 5px;
`;

interface LookDownProps {
  language: string | null;
}
export const LookDown = ({ language }: LookDownProps) => {
  return (
    <LookDownContainer>
      <LookDownText>
        {language === "PT-BR" ? "Deslize Para Baixo" : "Slide Down"}
      </LookDownText>
      <i
        className="pi pi-arrow-right"
        style={{ color: "#14261C", marginLeft: "10px" }}
      />
    </LookDownContainer>
  );
};

/* Section 2 */

export const AboutSection = styled(BasicSection)`
  z-index: 3;
  min-height: 90vh;
  position: relative;
  @media (max-width: 1126px) {
    postiion: static;
    padding: 1rem 0rem;
    height: 200vh;
  }
`;
export const AboutTitle = styled(Title)`
  color: #14261c;
  opacity: 0.9;
  margin-bottom: 1rem;
  @media (max-width: 1126px) {
    font-size: 1.5rem;
    margin-top: 15px;
  }
`;

export const TitleLine = styled.div`
  width: 100%;
  border-bottom: 3px solid #14261c;
  @media (max-width: 1126px) {
    border-top: 2px solid #14261c;
    width: 100%;
  }
`;

export const TitleAboutContainer = styled(Container)``;
export const TitleLineAnimation = styled(TitleLine)`
  width: 1px;
  height: 1px;
  border-bottom: 3px solid red;
`;

export const AboutMeContentContainer = styled(Container)`
  width: 81%;
  height: 100%;
  padding: 4rem 2rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  @media (max-width: 1126px) {
    flex-direction: column-reverse;
    align-items: center;
    width: calc(100% - 2rem);
    padding: 2rem;
  }
`;

export const AboutMeTextsContainer = styled(Container)`
  width: calc(50% - 2rem);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0rem 4rem;
  @media (max-width: 1126px) {
    max-width: 534px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
  }
  @media (max-width: 400px) {
    p {
      padding: 0 5rem;
    }
  }
`;

export const AboutMeImageContainer = styled(Container)`
  width: calc(50% - 2rem);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1126px) {
    width: 100%;
    align-items: center;
    transform: translateX(-20px);
    margin: 0 0 4rem 0;
  }
  @media (max-width: 400px) {
    transform: scale(0.7) translateX(-20px);
  }
`;

export const BackgroundImage = styled(Container)`
  width: 60%;
  height: 550px;
  min-width: 300px;
  background: rgba(144, 238, 144, 0.5);
  transition: 0.5s;
  :hover {
    background: rgba(144, 238, 144, 1);
    transform: scale(1.1);
  }
  border-radius: 15px;
  transform: translateX(20px);
  display: flex;
  align-items: center;
  @media (max-width: 1126px) {
    height: 100%;
    margin: 0 0 0rem 0;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  background: url("https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/section-1-bg1.jpg")
    no-repeat center center;
  background-size: cover;
  border-radius: 15px;
  transform: translateX(25px);
  @media (max-width: 1126px) {
    tranform: translateX(0px);
    transform: scale(0.92);
    height: 100%;
  }
`;

export const IconDiv = styled(Container)`
  font-size: 2rem;
  opacity: 0.8;
  transform: scale(1);
  color: #14161c;
  transition: 0.5s;
  :hover {
    opacity: 1;
    transform: scale(1.7);
  }
`;
