import React, { Component } from 'react';
import { AppConfig } from 'blockstack'
import { UserSession } from 'blockstack'
import { lookupProfile } from 'blockstack'
import './App.css';
import UserInfo from './UserInfo';
const blockstack = require('blockstack');

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      person: undefined,
      userSession: new UserSession({ appConfig: new AppConfig(['store_write', 'publish_data'])})
    }

    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignOut = this.handleSignOut.bind(this)
  }

  componentDidMount = async () => {
    let isSignedIn = await this.checkSignedInStatus();
    if (isSignedIn) {
      this.loadPerson();
    }

    this.setState({ isSignedIn })
  }

  checkSignedInStatus = async () => {
    const { userSession } = this.state

    if (userSession.isUserSignedIn()) {
      return true;
    } else if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(async(userData) => {
        window.location = window.location.origin
      })
      return false;
    }
  }

  loadPerson = async () => {
    const { userSession } = this.state
    let username = userSession.loadUserData()

    await lookupProfile(username).then((person) => {
      this.setState({ person })
    })
  }

  handleSignIn(event) {
    event.preventDefault();
    blockstack.redirectToSignIn()
  }

  handleSignOut(event) {
    event.preventDefault();
    blockstack.signUserOut(window.location.href)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Blockstack Create React App</h1>
        </header>
        <p style={{display: this.state.isSignedIn ? 'none' : 'block' }}>
          <button onClick={this.handleSignIn}>
            Sign-in with Blockstack
          </button>
        </p>
        <p style={{display: !this.state.isSignedIn ? 'none' : 'block' }}>
          <UserInfo user={this.state.person} />
          <button onClick={this.handleSignOut}>
            Sign-out
          </button>
        </p>
      </div>
    )
  }
}

export default App;
