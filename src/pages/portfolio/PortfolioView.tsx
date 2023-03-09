import { useGlobalContext } from "../../context/GlobalContext";
import Repository from "../../types/Repository";

type Props = {
  repositories: Repository[];
}

const PortfolioView = ({repositories}: Props) => {
  const { language } = useGlobalContext();
  console.log(repositories)

  return (
    <div style={{height: '50vh'}}>
      {language} 
    </div>
  );
};

export default PortfolioView;
