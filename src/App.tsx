import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import Navbar from './components/navbar/Navbar';

import Router from './Router';

import { setLanguage, verifyPrefeerLanguage } from './services/Langague';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}	
body {
  background-color: #fff;
  height: 100%;
  overflow-x: hidden;
  p, span, h1, h2, h3, h4, h5, h6, button, label, div, textarea, input{
    font-family: 'Karla', sans-serif;
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
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Router />
    </BrowserRouter>
  );
};

export default App;
