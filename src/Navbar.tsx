import React, { Component } from 'react'
import { getLanguage, setLanguage } from './services/Langague'

type NavbarProps = {

}

type State = {
  language: string | null ,
}

class Navbar extends Component<NavbarProps, State> {
  state = {
    language: getLanguage(),
  }

  render() {
    return (
      <>
      </>
    )
  }
}

export default Navbar