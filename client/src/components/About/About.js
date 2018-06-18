import React, { Component } from 'react';
import './style.css';
import { Segment, Divider } from 'semantic-ui-react';


export default class About extends Component {
  render() {
    return (
      <Segment raised>
        <h2>About page</h2>
         <Divider section/>
          App made by Higino Silva and this is a test app.
      </Segment>
    );
  }
}
