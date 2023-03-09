/**
 * Basic Router File
 * 06/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";
import Fallback from "./components/Fallback";

//components

const Home = lazy(() => import("./pages/home/HomeController"));
const Portfolio = lazy(() => import("./pages/portfolio/PortfolioController"));
//const Curriculum = lazy(() => import("./pages/cv/CurriculumController"));

const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/cv" element={<Fallback text="Em construção..." />} />
          <Route path="*" element={<Navigate to="" />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
