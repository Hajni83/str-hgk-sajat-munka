2.
db.movies.count({category:"ACTION"})
db.movies.count({category:"ROMANTIC"})

3.
var fantasy = db.movies.find({category:{$in:["FANTASY"]}})

4.
db.movies.find().forEach(function(item){print(item.title+ ":"+ item.category)})

5.
db.movies.find().forEach(function(item){print(item.title)}).sort({title:-1})

6.
db.movies.aggregate([{$match:{}},{$sort:{category:1,releaseYear:-1}}]).forEach(function(item){print(item.title +' ' + item.category+' ' + item.releaseYear)})
    Ready Player One ACTION 2018
    The Terminal ACTION 2004
    Jurassic Park ACTION 1993
    Indiana Jones ACTION 1981
    Hereafter FANTASY 2010
    Avatar FANTASY 2009
    E.T. FANTASY 1983
    Titanic ROMANTIC 1997
    Always ROMANTIC 1989
    Breezy ROMANTIC 1973

7.
