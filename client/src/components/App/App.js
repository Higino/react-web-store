import React, { Component } from 'react';
import './style.css';
import { Segment } from 'semantic-ui-react';
import logo from './StoreMain.png';


export default class App extends Component {
  render() {
    return (
      <Segment raised>
        <div className="App">
            <header className="App-header">
              <img src={logo} className="logo" alt="logo" />
              <h1 className="App-title">Welcome to Gino's Sample store</h1>
            </header>
          </div>
      </Segment>
    );
  }
}
