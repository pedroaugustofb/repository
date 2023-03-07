import "@testing-library/jest-dom";
import "@testing-library/react";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

//component to render
import { GlobalContextProvider } from "../../../context/GlobalContext";
import Footer from "../Footer";

const mockNavigate = jest.fn();

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: () => mockNavigate,
}));

describe("footer test", () => {
  //function to render the component in stardart config
  const RenderComponent = () => {
    render(
      <BrowserRouter>
        <GlobalContextProvider>
          <Footer />
        </GlobalContextProvider>
      </BrowserRouter>
    );
  };

  //function to get text based on language
  const TextOptions = (ptText: string, engText: string) =>
    localStorage.getItem("language") === "PT-BR" ? ptText : engText;

  //to check if the component is rendering correctly
  it("should render correctly", () => {
    //function to render the Footer Component
    RenderComponent();

    const DownloadButton = screen.getByText(
      TextOptions("Baixar Currículo", "Download Cv"),
      { exact: false }
    );

    /** @NavigationButtons */
    const HomeButton = screen.getByText(TextOptions("Início", "Home"));
    const PortfolioButton = screen.getByText(
      TextOptions("Portfólio", "Portfolio")
    );
    const CvButton = screen.getByText(TextOptions("Currículo", "Curriculum"));

    /** @SocialMediaLinks */
    const GitHubLink = screen.getByText("github", { exact: false });
    const LinkedinLink = screen.getByText("linkedin", { exact: false });
    const InstagramLink = screen.getByText("instagram", { exact: false });

    /** @ContactLinks */
    const WhatsappLink = screen.getByText("whatsapp", { exact: false });
    const EmailLink = screen.getByText("email", { exact: false });

    //expected results:
    expect(DownloadButton).toBeInTheDocument();

    /**@NavigationResults */
    expect(HomeButton).toBeInTheDocument();
    expect(PortfolioButton).toBeInTheDocument();
    expect(CvButton).toBeInTheDocument();

    /**@SocialMediaResults */
    expect(GitHubLink).toBeInTheDocument();
    expect(LinkedinLink).toBeInTheDocument();
    expect(InstagramLink).toBeInTheDocument();

    /**@ContactResults */
    expect(WhatsappLink).toBeInTheDocument();
    expect(EmailLink).toBeInTheDocument();
  });

  //to check if the navigate buttons are calling the correct function with the correct params.
  it.each([
    ["Início", "Home", "/"],
    ["Portfólio", "Portfolio", "/portfolio"],
    ["Currículo", "Curriculum", "/cv"],
  ])(
    "should %s button navigate with correct params.",
    (textPt, textEng, path) => {
      //function to render the footer component
      RenderComponent();

      const button = screen.getByText(TextOptions(textPt, textEng));

      //to fire the click event in the button
      fireEvent.click(button);

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
    }
  );

  //to check if the links are corrects
  it.each([
    ["GitHub", "https://github.com/pedroaugustofb"],
    ["Linkedin", "https://www.linkedin.com/in/pedrofoltram/"],
    ["Instagram", "https://www.instagram.com/pedrofoltram/"],
    ["Whatsapp", "https://wa.me/5583986251686"],
    ["Email", "mailto:pedroaugustofolb@gmail.com"],
  ])("should check the params of links", (text, link) => {
    //function to render the footer component
    RenderComponent();

    //to get the element
    const button = screen.getByRole("link", { name: text });

    //expected results
    expect(button).toHaveAttribute("href", link);
  });
});
