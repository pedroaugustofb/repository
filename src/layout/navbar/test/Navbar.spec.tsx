import "@testing-library/jest-dom";
import "@testing-library/react";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

//component to render
import {
  GlobalContextProvider,
  GlobalContext,
} from "../../../context/GlobalContext";
import Navbar from "../Navbar";

const mockNavigate = jest.fn();

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: () => mockNavigate,
}));

describe("navbar test", () => {
  //function to render the component in stardart config
  const RenderComponent = () => {
    render(
      <BrowserRouter>
        <GlobalContextProvider>
          <Navbar />
        </GlobalContextProvider>
      </BrowserRouter>
    );
  };

  it("should render correctly", () => {
    //function to render the Navbar Component
    RenderComponent();

    const PtButton = screen.getByText("PT-BR");
    const EngButton = screen.getByText("ENG");

    const HomeButtons = screen.getAllByTestId("/");

    //getAllByText: Get all components that has the text param, return as an array
    const PortfolioButtons = screen.getAllByTestId("/portfolio");
    const CvButtons = screen.getAllByTestId("/cv");

    /** @LanguageButtons */
    expect(EngButton).toBeInTheDocument();
    expect(PtButton).toBeInTheDocument();

    /** @NavButtons @Desktop @Mobile */
    //Home Buttons
    expect(HomeButtons[0]).toBeInTheDocument();
    expect(HomeButtons[1]).toBeInTheDocument();

    //Portfolio Buttons
    expect(PortfolioButtons[0]).toBeInTheDocument();
    expect(PortfolioButtons[1]).toBeInTheDocument();

    //Cv Buttons
    expect(CvButtons[0]).toBeInTheDocument();
    expect(CvButtons[1]).toBeInTheDocument();
  });

  //to check if the portfolio and curriculumns buttons are going to their routes
  it.each([
    ["home", "/"],
    ["portfolio", "/portfolio"],
    ["cv", "/cv"],
  ])("should %s buttons navigate with correct params.", (text, path) => {
    //function to render the navbar component
    RenderComponent();

    //to get the array of elements
    const buttons = screen.getAllByTestId(`${text !== "home" ? path : "/"}`);

    buttons.forEach((elem) => {
      //to fire the click event in the element
      fireEvent.click(elem);

      //expected results
      expect(mockNavigate).toHaveBeenCalled();
      expect(mockNavigate).toHaveBeenCalledWith(
        path,

        path === "/"
          ? {
              preventScrollReset: undefined,
              relative: undefined,
              replace: true,
              state: undefined,
            }
          : {
              preventScrollReset: undefined,
              relative: undefined,
              replace: false,
              state: undefined,
            }
      );
    });
  });

  // to check if the setLanguage buttons are correct
  it.each([["eng"], ["pt-br"]])(
    "should %s button call setLanguage with correct params.",
    (language) => {
      // to be on place of setLanguage
      const setLanguage = jest.fn();

      //function to render the navbar component
      render(
        <BrowserRouter>
          <GlobalContext.Provider value={{ setLanguage, language: "" }}>
            <Navbar />
          </GlobalContext.Provider>
        </BrowserRouter>
      );

      //to get the button
      const button = screen.getByText(language.toUpperCase());

      //to fire the click event in the element
      fireEvent.click(button);

      //expected results
      expect(setLanguage).toHaveBeenCalled();
      expect(setLanguage).toHaveBeenCalledWith(language.toUpperCase());
    }
  );
});
