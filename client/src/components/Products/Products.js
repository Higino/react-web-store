import React, { Component } from 'react';
import './style.css';

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
    const product_listing = this.state.products.map((item) => {
      return <div key={item.id}>
        <img src={item.product_avatar} alt='cannot load product'/> {item.product_name}: {item.price}
        </div>
    })
    return (
      <div className="prod-list">
        <p className="App-intro">
          List of products available:
        </p>
          {product_listing}
      </div>
    );
  }
}