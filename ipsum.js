var fs = require('fs');

function printOut(what, callback){
  return callback(what);
}

fs.readFile('ipsum.txt', function(err,data){
  if(err){console.log(err)}
  else{
    console.log("Printing Hipster Ipsum text\n",data.toString().toUpperCase());
}
});

function makeLower(str){
  return str.toLowerCase();
}
