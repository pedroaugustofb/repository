/**
 * Curriculum Component File
 * 07/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import { Component } from 'react'

//view
import CurriculumView from './CurriculumView'

type Props = {}

type State = {}

export default class Curriculum extends Component<Props, State> {
  state = {}

  render() {
    return (
      <CurriculumView />
    )
  }
}