const express = require('express');
const path = require('path');

const app = express();

// Rest service for product listings
app.get('/product_listing', function (req, res) {
  console.log ("Getting product list");
    const products = require("./MOCK_DATA.json");
    
    res.end(JSON.stringify(products.map(((item)=>{
      return { id: item.id, product_name: item.product_name, product_avatar: item.product_avatar+'&text='+item.provider, price: item.price}
    }))));

})

module.exports = app;