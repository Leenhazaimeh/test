'use strict';


const express = require('express');
const cors = require('cors');


const mongoose = require ('mongoose') ;
require('dotenv').config();

const articController = require('./Controlers/articController');
const crud = require('./Controlers/artic.crud.controller') ;
const app = express();



const PORT = process.env.PORT || 8081;

mongoose.connect('mongodb://localhost:27017/art',
 {
     useNewUrlParser: true,
     useUnifiedTopology : true
    });

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('server Working! ')
})

app.get('/art', articController.getArtData);

//crud

app.post('/art/favorite',crud.creatFavoriteArtPices) ;
app.get('/art/favorite',crud.getFavoriteArtPices) ;
app.delete('/art/favorite/:slug',crud.deleteFavoriteArtPices) ;
app.put('/art/favorite/:slug',crud.updateFavoriteArtPiece) ;





app.listen(PORT, () => {
    console.log(` Server started on ${PORT}`);
});