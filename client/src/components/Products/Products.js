import React, { Component } from 'react';
import './style.css';

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }
  componentDidMount() {
    console.log ("Products Component just mounted")
    
    // url (required), options (optional)
    fetch('/product_listing', {
      method: 'get'
    }).then(function(response) {
      return response.json();
    }).then ((prods) => {
      console.log(prods);
      this.setState({products: prods})
    }).catch(function(err) {
      console.log("Error " + err);
    });    
  }

  render() {
    const product_listing = this.state.products.map((item) => {
      return <div key={item.id}>
        {item.product_name}
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