1.
use videoStore

2.
db.createCollection("movies",{
... validator:{
... $jsonSchema:{
... required:["title","category","director"]
... }
... }
... })

3.
db.movies.save({title:"Indiana Jones", category:"action", director:"Steven Spielberg"})
db.movies.save({title:"Jurassic Park", category:"action", director:"Steven Spielberg"})
db.movies.save({title:"E.T.", category:"fantasy", director:"Steven Spielberg"})
db.movies.save({title:"Ready Player One", category:"action", director:"Steven Spielberg"})
db.movies.save({title:"Always", category:"romantic", director:"Steven Spielberg"})
db.movies.save({title:"The Terminal", category:"romantic", director:"Steven Spielberg"})
db.movies.save({title:"Avatar", category:"fantasy", director:"James Cameron"})
db.movies.save({title:"Titanic", category:"romantic", director:"James Cameron"})
db.movies.save({title:"Breezy", category:"romantic", director:"Clint Eastwood"})
db.movies.save({title:"Hereafter", category:"fantasy", director:"Clint Eastwood"})

4.
db.movies.updateMany({director:"Clint Eastwood"},{$set:{rating:''}})
db.movies.updateMany({director:"Steven Spielberg"},{$set:{rating:''}})
db.movies.updateMany({director:"James Cameron"},{$set:{rating:''}})

5.
db.movies.update({"title":"Titanic"},{$set:{"rating":[3,4]}})
db.movies.update({"title":"Avatar"},{$set:{"rating":[2,5]}})
db.movies.update({"title":"Jurassic Park"},{$set:{"rating":[1,4]}})

6.
db.movies.update({"title":"Titanic"},{$set:{"releaseYear":1997}})
db.movies.update({"title":"Hereafter"},{$set:{"releaseYear":2010}})
db.movies.update({"title":"Jurassic Park"},{$set:{"releaseYear":1993}})
db.movies.update({"title":"Breezy"},{$set:{"releaseYear":1973}})
db.movies.update({"title":"Avatar"},{$set:{"releaseYear":2009}})
db.movies.update({"title":"The Terminal"},{$set:{"releaseYear":2004}})
db.movies.update({"title":"Always"},{$set:{"releaseYear":1989}})
db.movies.update({"title":"Ready Player One"},{$set:{"releaseYear":2018}})
db.movies.update({"title":"E.T."},{$set:{"releaseYear":1983}})
db.movies.update({"title":"Jurassic Park"},{$set:{"releaseYear":1993}})

7.
db.movies.aggregate([ {$project:{category:{$toUpper:"$category"}}}])