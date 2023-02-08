/**
 * Basic Router File
 * 06/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Curriculum from './pages/cv/Curriculum';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';


type RouterProps = {
  language: string | null
};


const Router = ({language}: RouterProps) => {
  return (
    <>
        <Routes>
                <Route path='/' element={<Home language={language}/>}/>
                <Route path='/portfolio' element={<Portfolio language={language}/>}/>
                <Route path='/cv' element={<Curriculum language={language}/>}/>
                <Route path='*' element={<Navigate to="" />}/> 
        </Routes>
    </>
  )
};

export default Router