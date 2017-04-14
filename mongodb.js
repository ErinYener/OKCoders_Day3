var mongo = require('mongodb');
var mc = mongo.MongoClient;

var url = 'mongodb://localhost:27017/test';

mc.connect(url,function(err,db){

  if(err){console.log("Can't find anything on " + url); }

  var posts = db.collection('posts');
  posts.find({}).toArray(function(err,docs){
    console.log(docs);
    db.close();
  });
});
