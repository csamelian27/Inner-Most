import React, { Component } from 'react'
import {Gradient} from 'react-gradient';
import {gradients} from '../gradients';
import NavBar from './NavBar';
import { Route } from "react-router-dom";
import {AnimatedSwitch, spring} from 'react-router-transition';
import Home from './Home';
import Welcome from './Welcome';

class AppSignedIn extends Component {
  bounce = val => {
    return spring(val, {
      stiffness: 330,
      damping: 22
    });
  };

  render(){
    const bounceTransition = {
      // start in a transparent, upscaled state
      atEnter: {
        opacity: 0,
        scale: 1.2
      },
      // leave in a transparent, downscaled state
      atLeave: {
        opacity: this.bounce(0),
        scale: this.bounce(0.8)
      },
      // and rest at an opaque, normally-scaled state
      atActive: {
        opacity: this.bounce(1),
        scale: this.bounce(1)
      }
    };
    return(
      <div className="App">
      <Gradient
        gradients={gradients.disgust} // required
        property="background"
        duration={3000}
        angle="45deg"
      >
        <div id="gradient">
          <NavBar />
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={this.mapStyles}
            className="route-wrapper"
          >
            <Route exact path="/home" component={Home} />
            <Route exact path="/welcome" component={Welcome} />
          </AnimatedSwitch>
        </div>
      </Gradient>
      </div>
    )
  }
}

export default AppSignedIn
