1.
db.createCollection("directors",{
... validator:{
... $jsonSchema:{
... }}})

2.
 db.directors.insertOne({_id:1,name:"Steven Spielberg",birthYear:1930,movies:[]})
 db.directors.insertOne({_id:2,name:"Client Eastwood",birthYear:1935,movies:[]})
 db.directors.insertOne({_id:3,name:"James Cameron",birthYear:1958,movies:[]})

 4.
 