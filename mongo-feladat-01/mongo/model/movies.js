const mongoose = require("mongoose");

var moviesSchema = new mongoose.Schema({
    title:String,
    category:String,
    director:String
});

module.exports= mongoose.model('movies', moviesSchema);