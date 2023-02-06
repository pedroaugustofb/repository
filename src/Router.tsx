import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


type RouterProps = {

};

const Router = (props: RouterProps) => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/home' />


            <Route path='/*' element={<Navigate to="/404" />}/> 
        </Routes>
    </BrowserRouter>
  )
};

export default Router