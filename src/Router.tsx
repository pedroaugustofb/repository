import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


type RouterProps = {

};


const Router = (props: RouterProps) => {
  return (
    <>
        <Routes>
                <Route path='/' />
                <Route path='/portfolio' />
                <Route path='/cv' />
                <Route path='*' element={<Navigate to="" />}/> 
        </Routes>
    </>
  )
};

export default Router