
import { useGlobalContext } from '../../services/GlobalContext';

type Props = {}

const PortfolioView = ({}: Props) => {

    const { language } = useGlobalContext();

  return (
    <div>{language}</div>
  )
}

export default PortfolioView