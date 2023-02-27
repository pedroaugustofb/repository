/**
 * Curriculum Component File
 * 07/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import React, { Component } from 'react'

type Props = {
    language: string | null,
}

type State = {}

export default class Curriculum extends Component<Props, State> {
  state = {}

  render() {
    const { language } = this.props;
    return (
      <div>{language}</div>
    )
  }
}