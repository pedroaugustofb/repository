/**
 * Home Component File
 * 07/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import { Component } from 'react'

//view
import HomeView from './HomeView';

type Props = {}

type State = {}
export default class Home extends Component<Props, State> {
  state = {}

  render() {
    return (
        <HomeView />
    )
  }
}