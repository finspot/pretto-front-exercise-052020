import React, { Component } from "react"

import Title from "../Title"
import Banner from '../Components/banner'

import "./styles.css"


class App extends Component {
  render() {
    return (
      <>
        <Title />
        <Banner />
      </>
    );
  }
}

export default App