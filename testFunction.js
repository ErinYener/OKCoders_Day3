function printOut(what, callback){
  return callback(what);
}
function makeLower(str){
  return str.toLowerCase();
}

var result = printOut("TOM", makeLower);

var result2 = printOut("timothy",function(x){
  return x.toUpperCase(x).substring(0,3);
});
console.log(result2);
