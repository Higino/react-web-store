import React, { Component } from 'react';
import './style.css';
import { Segment, Divider, Card, Image, Icon } from 'semantic-ui-react';

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
      return <Card color='violet' raised key={item.id}>
        <Image src={item.product_avatar}></Image>
        <Card.Content><Card.Header>{item.product_name}</Card.Header></Card.Content>
        <Card.Content extra><Icon name='currency'/>{item.price}</Card.Content>
      </Card>
    });

    return (
      <Segment raised>
        <h2>List of Products Available</h2>
        <Divider section/>
          <Card.Group centered >{items}</Card.Group>
      </Segment>
    );
  }
}