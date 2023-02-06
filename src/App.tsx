import React from 'react';
import { createGlobalStyle } from "styled-components";

import Navbar from './Navbar';
import Router from './Router';

import { setLanguage, verifyPrefeerLanguage } from './services/Langague';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}	
body {
  background-color: #F4F5F7;
  height: 100%;
  overflow-x: hidden;
  p, span, h1, h2, h3, h4, h5, h6, button, label, div, textarea, input{
    font-family: 'Work Sans ', sans-serif;
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

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Router />
    </>
  );
};

export default App;
