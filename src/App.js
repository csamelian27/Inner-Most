import React, { Component } from 'react';
import { AppConfig } from 'blockstack'
import { UserSession, appConfig } from 'blockstack'
import { lookupProfile } from 'blockstack'
import { User } from 'radiks'
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
      await User.createWithCurrentUser()
      return true;
    } else if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(async(userData) => {
        window.location = window.location.origin
        await User.createWithCurrentUser()
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

  fetchUsers = async () => {
    const result = await User.fetchList()
    console.log(result)
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.fetchUsers}>
          User Fetch List
        </button>
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
