var express = require('express');
var router = express.Router();
const movieModel = require('../model/movies')

/* GET users listing. */
router.get('/', function(req, res, next) {
  movieModel.find({}, (err,movies)=>{
    console.log(movies);
    res.render('movies', { movies: movies });
  })

  
});

module.exports = router;
