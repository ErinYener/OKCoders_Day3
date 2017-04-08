function printOut(what, callback){
  return callback(what);
}
function makeLower(str){
  return str.toLowerCase();
}

var result = printOut("TOM", makeLower);

var result2 = printOut("tim",function(x){
  return x.toUpperCase(x);
});
console.log(result2);
