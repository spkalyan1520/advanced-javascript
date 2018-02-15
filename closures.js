function fo() {
  var i=0;
  return function(n){
    return n+i++;
  }
}


var f = fo();
var a = f(15); // value:  15              
var b = fo()(15); // value:  15            
var c = fo()(20); // value:  20            
var d = f(20); // value: 21

console.log(a);
console.log(b);
console.log(c);
console.log(d);
