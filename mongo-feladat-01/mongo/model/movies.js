const mongoose = require("mongoose");

var moviesSchema = new mongoose.Schema({
    title:String,
    category:String,
    director:String,
    rating:Array,
    releaseYear:Number
});

module.exports= mongoose.model('movies', moviesSchema);