'use strict' ;


const mongoose = require('mongoose') ;
 

const artPieceSchema = mongoose.Schema({

title : {
    type : String ,
    unique : true ,
    lowercase : true , 
    trim : true ,
} ,
slug: {
    type: String ,
    unique: true,
    lowercase: true,
    trim: true
},
thumbnail : String  ,
artist_name : String  ,
descreption :  String  ,


})

const artPieceModel = mongoose.model('art_pieces',artPieceSchema)
module.exports = artPieceModel ;
