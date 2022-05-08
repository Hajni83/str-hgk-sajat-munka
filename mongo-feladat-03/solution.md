2.
db.movies.count({category:"ACTION"})
db.movies.count({category:"ROMANTIC"})

3.
var fantasy = db.movies.find({category:{$in:["FANTASY"]}})

4.
db.movies.find().forEach(function(item){print(item.title+ ":"+ item.category)})

5.
db.movies.find().forEach(function(item){print(item.title)}).sort({title:-1})


