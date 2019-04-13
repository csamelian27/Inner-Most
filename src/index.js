import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { UserSession, AppConfig } from 'blockstack';
import { configure } from 'radiks';

const userSession = new UserSession({
  appConfig: new AppConfig(['store_write', 'publish_data'])
})

configure({
  apiServer: 'http://localhost:5000',
  userSession
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
