/**
 * Basic Router File
 * 06/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useGlobalContext } from './services/GlobalContext';

//components
import Curriculum from './pages/cv/Curriculum';
import HomeController from './pages/home/HomeController';
import Portfolio from './pages/portfolio/Portfolio';

const Router = () => {

  const { language, setBackgroundColor } = useGlobalContext();
  let location = useLocation();

  useEffect( () => {
    switch (location.pathname){
      case '/': 
        return setBackgroundColor("#f8f5f4")
      case '/portfolio':
        return setBackgroundColor("#a825f4")
      case '/cv':
          return setBackgroundColor("#c8f544")
      default:
          return setBackgroundColor('transparent')
  }
  }, [location, setBackgroundColor])

  return (
    <>
        <Routes>
            <Route path='/' element={<HomeController language={language}/>}/>
            <Route path='/portfolio' element={<Portfolio language={language}/>}/>
            <Route path='/cv' element={<Curriculum language={language}/>}/>
            <Route path='*' element={<Navigate to="" />}/> 
        </Routes>
    </>
  )
};

export default Router