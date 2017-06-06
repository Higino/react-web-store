const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'public')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

// Rest service for product listings
app.get('/product_listing', function (req, res) {
  console.log ("Getting product list");
    const products = [{
            "id": 1,
            "product_name": "Namfix",
            "product_avatar": "https://robohash.org/quasiauteos.png?size=50x50",
            "price": "€403,76",
            "manufacturing_country": "China"
            }, {
            "id": 2,
            "product_name": "Duobam",
            "product_avatar": "https://robohash.org/harumvoluptatumvoluptatem.jpg?size=50x50",
            "price": "€909,98",
            "manufacturing_country": "China"
            }, {
            "id": 3,
            "product_name": "Fintone",
            "product_avatar": "https://robohash.org/temporibusablaboriosam.jpg?size=50x50",
            "price": "€724,69",
            "manufacturing_country": "Peru"
            }, {
            "id": 4,
            "product_name": "Bigtax",
            "product_avatar": "https://robohash.org/iustonihileum.bmp?size=50x50",
            "price": "€795,50",
            "manufacturing_country": "Jordan"
            }, {
            "id": 5,
            "product_name": "Stringtough",
            "product_avatar": "https://robohash.org/eaqueutet.png?size=50x50",
            "price": "€425,62",
            "manufacturing_country": "Ivory Coast"
            }, {
            "id": 6,
            "product_name": "Fix San",
            "product_avatar": "https://robohash.org/quodoloresminima.jpg?size=50x50",
            "price": "€381,29",
            "manufacturing_country": "Russia"
            }, {
            "id": 7,
            "product_name": "Y-find",
            "product_avatar": "https://robohash.org/verotemporaet.bmp?size=50x50",
            "price": "€756,65",
            "manufacturing_country": "Russia"
            }, {
            "id": 8,
            "product_name": "Veribet",
            "product_avatar": "https://robohash.org/estperspiciatisbeatae.jpg?size=50x50",
            "price": "€711,79",
            "manufacturing_country": "China"
            }, {
            "id": 9,
            "product_name": "Y-find",
            "product_avatar": "https://robohash.org/indeseruntsint.bmp?size=50x50",
            "price": "€604,83",
            "manufacturing_country": "Greece"
            }, {
            "id": 10,
            "product_name": "Domainer",
            "product_avatar": "https://robohash.org/etcupiditatealiquid.jpg?size=50x50",
            "price": "€951,50",
            "manufacturing_country": "China"
            }, {
            "id": 11,
            "product_name": "Namfix",
            "product_avatar": "https://robohash.org/quosexpeditaofficiis.jpg?size=50x50",
            "price": "€309,59",
            "manufacturing_country": "Philippines"
            }, {
            "id": 12,
            "product_name": "Asoka",
            "product_avatar": "https://robohash.org/animidignissimosex.png?size=50x50",
            "price": "€721,15",
            "manufacturing_country": "Thailand"
            }, {
            "id": 13,
            "product_name": "It",
            "product_avatar": "https://robohash.org/autemconsequaturnon.png?size=50x50",
            "price": "€592,63",
            "manufacturing_country": "China"
            }, {
            "id": 14,
            "product_name": "Konklux",
            "product_avatar": "https://robohash.org/exercitationemdistinctionatus.jpg?size=50x50",
            "price": "€581,38",
            "manufacturing_country": "Indonesia"
            }, {
            "id": 15,
            "product_name": "Sonair",
            "product_avatar": "https://robohash.org/repellatquiapariatur.jpg?size=50x50",
            "price": "€859,81",
            "manufacturing_country": "Morocco"
            }, {
            "id": 16,
            "product_name": "Voltsillam",
            "product_avatar": "https://robohash.org/remautemquibusdam.png?size=50x50",
            "price": "€754,32",
            "manufacturing_country": "Armenia"
            }, {
            "id": 17,
            "product_name": "Stim",
            "product_avatar": "https://robohash.org/rationeomniset.jpg?size=50x50",
            "price": "€405,03",
            "manufacturing_country": "Armenia"
            }, {
            "id": 18,
            "product_name": "Holdlamis",
            "product_avatar": "https://robohash.org/etatrerum.bmp?size=50x50",
            "price": "€533,99",
            "manufacturing_country": "Indonesia"
            }, {
            "id": 19,
            "product_name": "Duobam",
            "product_avatar": "https://robohash.org/doloremquererumfugit.png?size=50x50",
            "price": "€480,57",
            "manufacturing_country": "China"
            }, {
            "id": 20,
            "product_name": "Lotlux",
            "product_avatar": "https://robohash.org/architectoblanditiisdebitis.bmp?size=50x50",
            "price": "€887,90",
            "manufacturing_country": "Croatia"
        }];
        res.end(JSON.stringify(products));

})

module.exports = app;