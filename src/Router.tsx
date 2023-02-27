/**
 * Basic Router File
 * 06/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import React, { useEffect, lazy } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useGlobalContext } from './services/GlobalContext';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

//components

const Home = lazy(() => import("./pages/home/HomeController"))
const Portfolio = lazy(() => import("./pages/portfolio/PortfolioController"))
const Curriculum = lazy(() => import("./pages/cv/CurriculumController"))


const Router = () => {

  const { setBackgroundColor } = useGlobalContext();
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
          <Route path="/" element={<><Navbar /><Footer /></>}>

            <Route path='/' element={<Home />}/>
            <Route path='/portfolio' element={<Portfolio />}/>
            <Route path='/cv' element={<Curriculum />}/>
            <Route path='*' element={<Navigate to="" />}/> 
         
          </Route>
        </Routes>
    </>
  )
};

export default Router