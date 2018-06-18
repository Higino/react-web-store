import React, { Component } from 'react';
import './style.css';
import { Divider, Segment } from 'semantic-ui-react'


export default class App extends Component {
  render() {
    return (
      <Segment raised>
        <h2>React Web Store Home</h2>
        <Divider section/>
          This is a demo store. Please use the menus to complete actions. Only blue menus are implemented
      </Segment>
    );
  }
}
