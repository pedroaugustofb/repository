
import { useGlobalContext } from '../../services/GlobalContext';

type Props = {}

const CurriculumView = ({}: Props) => {

    const { language } = useGlobalContext();

  return (
    <div>{language}</div>
  )
}

export default CurriculumView