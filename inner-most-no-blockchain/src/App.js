import { Gradient } from "react-gradient";
import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import { gradients } from "./gradients";

class App extends Component {
  state = {
    gradient: gradients.default
  };

  changeGradient = emotion => {
    this.setState({ gradient: gradients.emotion });
  };
  render() {
    return (
      <Gradient
        gradients={this.state.gradient} // required
        property="background"
        duration={3000}
        angle="45deg"
        id="gradient"
      >
        <Home changeGradient={this.changeGradient} />
      </Gradient>
    );
  }
}

export default App;
