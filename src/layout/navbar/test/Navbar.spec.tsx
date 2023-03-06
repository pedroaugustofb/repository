import "@testing-library/jest-dom"
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";

//component to render
import { GlobalContextProvider } from "../../../context/GlobalContext";
import Navbar from '../Navbar'



describe("Navbar Test", () => {

    const RenderComponent = () => {
        render(
            <BrowserRouter>
                <GlobalContextProvider>
                    <Navbar />
                </GlobalContextProvider>
            </BrowserRouter>
        )
    }
    
    
    test("should render correctly", () => {
        
        //function to render de Navbar Component
        RenderComponent();

        let PtButton = screen.getByText("PT-BR")
        let EngButton = screen.getByText("ENG")
        
        let HomeButton = screen.getByText(`${localStorage.getItem('language') === 'PT-BR' ? "Início" : "Home"}`)
        

        //getAllByText: Get all components that has the text param, return as an array
        let PortfolioButtons = screen.getAllByText(`${localStorage.getItem('language') === 'PT-BR' ? "Portfólio" : "Portfolio"}`)
        let CvButtons = screen.getAllByText(`${localStorage.getItem('language') === 'PT-BR' ? "Currículo" : "Curriculum"}`)
      
        //Change language Buttons
        expect(EngButton).toBeInTheDocument();
        expect(PtButton).toBeInTheDocument();


        //Navbar Buttons ( Desktop and Mobile)
            //Home Button
            expect(HomeButton).toBeInTheDocument();
            //expect(HomeIcon).toBeInTheDocument();
            
            //Portfolio Buttons
            expect(PortfolioButtons[0]).toBeInTheDocument();
            expect(PortfolioButtons[1]).toBeInTheDocument();

            //Cv Buttons
            expect(CvButtons[0]).toBeInTheDocument();
            expect(CvButtons[1]).toBeInTheDocument();
    })


})