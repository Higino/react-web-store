const express = require('express');
const path = require('path');

const app = express();

// Rest service for product listings
app.get('/product_listing', function (req, res) {
  console.log ("Getting product list");
    const products = require("./MOCK_DATA.json");
    
    res.end(JSON.stringify(products));

})

module.exports = app;