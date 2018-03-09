function fo() {
  var i=0;
  return function(n){
    return n+i++;
  }
}

//Every time fo() is called new i, and function are created. This new anonymous functions reference is assigned to f.
var f = fo();
//Because of the closure f has access to i and is currently 0
var a = f(15); // value:  15
//Now a new i and new anonymous function get created because fo() is called again. So i is currently 0
var b = fo()(15); // value:  15
//Again a new instance of i and anonymous function are created. So i is still 0
var c = fo()(20); // value:  20
//No new function or i are created. f still holds the reference to the previous anonymous function.
//Because of the closure the anonymous function referenced by f still has access to i. Since i was incremented before, i value is 1 now.
var d = f(20); // value: 21

console.log(a);
console.log(b);
console.log(c);
console.log(d);
