/**
 * Basic App File
 * 06/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import Footer from './components/footer/Footer';
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

const getBackgroundColor = (pathname: string) => {
  switch (pathname){
      case '/':
          return "#f8f5f4"
      case '/portfolio':
          return "#a825f4"
      case '/cv':
          return "#c8f544"
      default:
          return 'transparent'
  }
}

const App = () => {
  const [Pathname, setPath] = useState<string>('/')

  if(!verifyPrefeerLanguage()){
    setLanguage('ENG');
  }

  const Language = getLanguage();

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar language={Language} background={getBackgroundColor(Pathname)} setPath={setPath} />
      <Router language={Language} setPath={setPath}/>
      <Footer language={Language} setPath={setPath} background={getBackgroundColor(Pathname)} />
    </BrowserRouter>
  );
};

export default App;
