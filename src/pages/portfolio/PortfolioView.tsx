import React from 'react'
import { useGlobalContext } from '../../services/GlobalContext';

type Props = {}

const PortfolioView = (props: Props) => {

    const { language } = useGlobalContext();

  return (
    <div>PortfolioView</div>
  )
}

export default PortfolioView