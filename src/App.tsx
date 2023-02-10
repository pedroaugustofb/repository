/**
 * Basic App File
 * 06/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import Navbar from './components/navbar/Navbar';

import Router from './Router';

import { getLanguage, setLanguage, verifyPrefeerLanguage } from './services/Langague';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}	
body {
  background-color: #fff;
  height: 100%;
  overflow-x: hidden;
  p, span, h1, h2, h3, h4, h5, h6, button, label, div, textarea, input{
    font-family: 'Rubik', sans-serif;
  }
}
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}


`;


const App = () => {

  if(!verifyPrefeerLanguage()){
    setLanguage('PT-BR');
  }

  const Language = getLanguage();

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar language={Language}/>
      <Router language={Language}/>
    </BrowserRouter>
  );
};

export default App;
