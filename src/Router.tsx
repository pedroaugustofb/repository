/**
 * Basic Router File
 * 06/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Curriculum from './pages/cv/Curriculum';
import HomeController from './pages/home/HomeController';
import Portfolio from './pages/portfolio/Portfolio';


type RouterProps = {
  language: string | null,
  setPath: (value:string) => void,
};

type ReturnPathProps = {
  setPath: (pathname: string) => void,
  pathname: string,
  children: any,
}


const ReturnPath = ({setPath, pathname, children}: ReturnPathProps) => {
  setPath(pathname);
  return (<>{children}</>);
}

const Router = ({language, setPath}: RouterProps) => {
  return (
    <>
        <Routes>
                <Route path='/' element={<ReturnPath setPath={setPath} pathname="/"><HomeController language={language}/></ReturnPath>}/>
                <Route path='/portfolio' element={<ReturnPath setPath={setPath} pathname="/portfolio"><Portfolio language={language}/></ReturnPath>}/>
                <Route path='/cv' element={<ReturnPath setPath={setPath} pathname="/portfolio"><Curriculum language={language}/></ReturnPath>}/>
                <Route path='*' element={<Navigate to="" />}/> 
        </Routes>
    </>
  )
};

export default Router