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
import { GlobalContextProvider } from './context/GlobalContext';

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

  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

export default App;
