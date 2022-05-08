1.
db.createCollection("directors",{
... validator:{
... $jsonSchema:{
... }}})

2.
 db.directors.insertOne({_id:1,name:"Steven Spielberg",birthYear:1930,movies:[]})
 db.directors.insertOne({_id:2,name:"Client Eastwood",birthYear:1935,movies:[]})
 db.directors.insertOne({_id:3,name:"James Cameron",birthYear:1958,movies:[]})

 4.5.
 db.directors.aggregate([{$lookup:{from:"movies",localField:"movies",foreignField:"ObjectId",as:"movies"}}]).pretty()

6.
db.movies.updateMany({category:"ACTION"},{$unset:{director:""}})
db.movies.updateMany({category:"ROMANTIC"},{$unset:{director:""}})
db.movies.updateMany({category:"FANTASY"},{$unset:{director:""}})

7.
db.movies.find({releaseYear:{$gt:1993}})
    { "_id" : ObjectId("627552660f4019cc23aa4b93"), "title" : "Titanic", "category" : "ROMANTIC", "rating" : [ 3, 4 ], "releaseYear" : 1997 }
    { "_id" : ObjectId("627552a40f4019cc23aa4b95"), "title" : "Hereafter", "category" : "FANTASY", "rating" : "", "releaseYear" : 2010 }
    { "_id" : ObjectId("627553890f4019cc23aa4b9d"), "title" : "Avatar", "category" : "FANTASY", "rating" : [ 2, 5 ], "releaseYear" : 2009 }
    { "_id" : ObjectId("627553a00f4019cc23aa4b9e"), "title" : "The Terminal", "category" : "ACTION", "rating" : "", "releaseYear" : 2004 }
    { "_id" : ObjectId("627553c20f4019cc23aa4ba0"), "title" : "Ready Player One", "category" : "ACTION", "rating" : "", "releaseYear" : 2018 }
db.movies.find({releaseYear:{$gte:2009}})
    { "_id" : ObjectId("627552a40f4019cc23aa4b95"), "title" : "Hereafter", "category" : "FANTASY", "rating" : "", "releaseYear" : 2010 }
    { "_id" : ObjectId("627553890f4019cc23aa4b9d"), "title" : "Avatar", "category" : "FANTASY", "rating" : [ 2, 5 ], "releaseYear" : 2009 }
    { "_id" : ObjectId("627553c20f4019cc23aa4ba0"), "title" : "Ready Player One", "category" : "ACTION", "rating" : "", "releaseYear" : 2018 }
db.movies.find({releaseYear:{$lt:2009}})
    { "_id" : ObjectId("627552660f4019cc23aa4b93"), "title" : "Titanic", "category" : "ROMANTIC", "rating" : [ 3, 4 ], "releaseYear" : 1997 }
    { "_id" : ObjectId("627552d50f4019cc23aa4b98"), "title" : "Jurassic Park", "category" : "ACTION", "rating" : [ 1, 4 ], "releaseYear" : 1993 }
    { "_id" : ObjectId("6275536e0f4019cc23aa4b9c"), "title" : "Breezy", "category" : "ROMANTIC", "rating" : "", "releaseYear" : 1973 }
    { "_id" : ObjectId("627553a00f4019cc23aa4b9e"), "title" : "The Terminal", "category" : "ACTION", "rating" : "", "releaseYear" : 2004 }
    { "_id" : ObjectId("627553b30f4019cc23aa4b9f"), "title" : "Always", "category" : "ROMANTIC", "rating" : "", "releaseYear" : 1989 }
    { "_id" : ObjectId("627553d50f4019cc23aa4ba1"), "title" : "E.T.", "category" : "FANTASY", "rating" : "", "releaseYear" : 1983 }
    { "_id" : ObjectId("627553ec0f4019cc23aa4ba2"), "title" : "Indiana Jones", "category" : "ACTION", "rating" : "", "releaseYear" : 1981 }
db.movies.find({releaseYear:{$lte:1997}})
    { "_id" : ObjectId("627552660f4019cc23aa4b93"), "title" : "Titanic", "category" : "ROMANTIC", "rating" : [ 3, 4 ], "releaseYear" : 1997 }
    { "_id" : ObjectId("627552d50f4019cc23aa4b98"), "title" : "Jurassic Park", "category" : "ACTION", "rating" : [ 1, 4 ], "releaseYear" : 1993 }
    { "_id" : ObjectId("6275536e0f4019cc23aa4b9c"), "title" : "Breezy", "category" : "ROMANTIC", "rating" : "", "releaseYear" : 1973 }
    { "_id" : ObjectId("627553b30f4019cc23aa4b9f"), "title" : "Always", "category" : "ROMANTIC", "rating" : "", "releaseYear" : 1989 }
    { "_id" : ObjectId("627553d50f4019cc23aa4ba1"), "title" : "E.T.", "category" : "FANTASY", "rating" : "", "releaseYear" : 1983 }
    { "_id" : ObjectId("627553ec0f4019cc23aa4ba2"), "title" : "Indiana Jones", "category" : "ACTION", "rating" : "", "releaseYear" : 1981 }

8.
db.movies.find({$and:[{releaseYear:{$lt:1989}},{releaseYear:{$gt:1973}}]})
    { "_id" : ObjectId("627553d50f4019cc23aa4ba1"), "title" : "E.T.", "category" : "FANTASY", "rating" : "", "releaseYear" : 1983 }
    { "_id" : ObjectId("627553ec0f4019cc23aa4ba2"), "title" : "Indiana Jones", "category" : "ACTION", "rating" : "", "releaseYear" : 1981 }

9.
db.movies.find({$and:[{releaseYear:{$lt:1989}},{releaseYear:{$gt:1973}},{category:"ACTION"}]})
    { "_id" : ObjectId("627553ec0f4019cc23aa4ba2"), "title" : "Indiana Jones", "category" : "ACTION", "rating" : "", "releaseYear" : 1981 }

10.
db.movies.find({category:{$ne:"FANTASY"}})
