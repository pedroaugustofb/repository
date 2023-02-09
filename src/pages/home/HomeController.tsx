/**
 * Home Component File
 * 07/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import React, { Component } from 'react'
import HomeView from './HomeView';



type Props = {
    language: string | null,
}

type State = {}

export default class Home extends Component<Props, State> {
  state = {}

  render() {
    const { language } = this.props;
    return (
        <HomeView language={language}/>
    )
  }
}