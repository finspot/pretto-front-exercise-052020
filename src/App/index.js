import React, { Component } from "react"

import Title from "../Title"
import Logo from "../Title/logo"
import Banner from '../Components/banner'

import "./styles.css"


class App extends Component {
  render() {
    return (
      <>

        <header>
          <Logo />
          <Title />
        </header>

        <Banner />
      </>
    );
  }
}

export default App