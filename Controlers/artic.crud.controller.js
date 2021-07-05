'use strict' ;

const artPiece = require ('../models/artic.mongoose.model') ;

const creatFavoriteArtPices = async (req,res) => {
    const{
        title,
        thumbnail,
        artist_name,
        description
    } = req.body;
    const slug = title.toLowerCase().split('').join('-');
    artPiece.find({slug:slug}, (error,data) => {
        if (data.lingth > 0) {
            res.send('data already exists') ;
        } else {
            const newArtPiece = new artPiece ({
                title: title,
                slug: slug,
                thumbnail: thumbnail,
                artist_name: artist_name,
                description: description
            }) ; 

            newArtPiece.save() ;
            res.send('Item Added to your favorite list !') ;
        }
    })
} ;


const getFavoriteArtPices = async (req,res) => {
artPiece.find({},(error,data)=>{
    res.send(data);
});
} ;


const deleteFavoriteArtPices = async (req,res) => {
const slug = req.params.slug;
artPiece.remove({slug: slug}, (error,data) => {
    if (error){
        res.send(error) ;
    }else{
        artPiece.find({},(error , data) => {
            res.send(data);
        }) ;
    }
}) ;
} ;

const updateFavoriteArtPiece = async (req, res) => {
    // destructure  the data from the request body
    const {  artist_name } = req.body;
    const slug = req.params.slug;

    artPiece.find({ slug: slug }, (error, data) => {
        if (error) {
            res.send(error)
        } else {
            data[0]. artist_name =  artist_name;
            data[0].save();
            artPiece.find({}, (error, data) => {
                res.send(data);
            });
        }
    });
};




module.exports = {
    creatFavoriteArtPices ,
    getFavoriteArtPices ,
    deleteFavoriteArtPices ,
    updateFavoriteArtPiece
}