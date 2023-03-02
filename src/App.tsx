/**
 * Basic App File
 * 06/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";

//components
//import Footer from './components/footer/Footer';
//import Navbar from './components/navbar/Navbar';
import Router from './Router';

//services
import { verifyPrefeerLanguage } from './services/Langague';
import { useLocalStorage } from './services/UseLocalStorage';
import { GlobalContext } from './services/GlobalContext';

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
  position: relative;
}


`;


const App = () => {

  const [language, setLanguage] = useLocalStorage('language', verifyPrefeerLanguage() ? "PT-BR" : "ENG")
  const [backgroundColor, setBackgroundColor] = useLocalStorage('background', '#F5F2F2')
  

  return (
    <GlobalContext.Provider value={{ language, setLanguage, backgroundColor, setBackgroundColor }}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </GlobalContext.Provider>
  );
};

export default App;
