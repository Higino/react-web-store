import React, { Component } from 'react';
import './style.css';
import { Segment, Divider, Card, Image, Icon } from 'semantic-ui-react';
import loading from './Loading_icon.gif';

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    // Uppon component mouting fetch product list from datacenter
    // url (required), options (optional).
    // I Guess this method only works for safari and chrome but then again this is a demo ... :)
    fetch('/product_listing', {
      method: 'get'
    }).then(function(response) {
      return response.json();
    }).then ((prods) => {
      this.setState({products: prods})
    }).catch(function(err) {
      console.log("Error " + err);
    });    
  }

  render() {


    const items = this.state.products.map((item) => {
      return <Card raised key={item.id}>
        <Image src={item.product_avatar} alt='Error fetching image'></Image>
        <Card.Content>
          <Card.Header>{item.product_name}</Card.Header>
          <Card.Meta>{item.type}</Card.Meta>
          <Card.Description>{item.description}</Card.Description>
        </Card.Content>
        <Card.Content extra><Icon name='currency'/>{item.price}</Card.Content>
      </Card>
    });

    return (
      <Segment raised>
        <h2>Here what's available</h2>
        <Divider section/>
            <Image src={loading} alt='loagind'></Image>
            <Card.Group centered >{items}</Card.Group>
      </Segment>
    );
  }
};