var animals=[
    {name:"fluppy",age:20,type:"dog"},
    {name:"spotty",age:2,type:"cat"},
    {name:"waffles",age:15,type:"dog"},
    {name:"peanut",age:30,type:"dog"},
 ];

var oldAnimals = animals.filter(function(animal){
    return animal.age>15;
});

console.log(oldAnimals);

var oldAnimalNames = animals.filter(function(animal){
    return animal.age>15;
}).map(function(animal){
    return animal.name;
});

var dogTotal  = animals.filter(animal=>animal.type=='dog').map(animal=>animal.age).reduce((prev,curr)=>prev+curr,0)
console.log(dogTotal);
    
//Print sum of P orders
var transactions = "P 130.56, C, P 12.37 , P 6.00, R 75.53, P 1.32"
// var sum = transactions.split(",").filter(trans=>trans.trim().split(" ")[0]=='P').map(trans=>parseFloat(trans.trim().split(" ")[1])).reduce((prev,curr)=>prev+curr,0);
// console.log(sum);
var sum = (transactions.split(',')).filter((el)=>(el.trim().split(" "))[0]=='P').map((el)=>(el.trim().split(" "))[1]).reduce((prev,next)=>parseFloat(prev)+parseFloat(next),0);
console.log(sum);
    
