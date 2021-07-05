'use strict'
const superagent = require('superagent');

const ArticModel= require('../models/articmodel');


const getArtData = async (req, res) => {
    const url = `https://api.artic.edu/api/v1/artworks?limit=10`;
    superagent.get(url).then(data => {
        const responseData = data.body.data.map(art =>{
            return new ArticModel(art);

        }) ;
        res.send(responseData);
    }).catch(error => {
        console.log('============================');
        console.log('An Error Occurred!');
        console.log('error');
        console.log('============================');
    })

};
module.exports = {
    getArtData
}