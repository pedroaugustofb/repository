import React from 'react'
import { useGlobalContext } from '../../services/GlobalContext';

type Props = {}

const CurriculumView = (props: Props) => {

    const { language } = useGlobalContext();

  return (
    <div>CurriculumView</div>
  )
}

export default CurriculumView