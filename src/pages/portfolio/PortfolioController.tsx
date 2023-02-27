/**
 * Portfolio Component File
 * 07/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import React, { Component } from 'react'

//view
import PortfolioView from './PortfolioView';

type Props = {}

type State = {}

export default class Portfolio extends Component<Props, State> {
  state = {}

  render() {
    return (
      <PortfolioView />
    )
  }
}