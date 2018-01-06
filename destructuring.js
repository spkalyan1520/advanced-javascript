//Object Destructuring

const person = {
    name:'Kalyan',
    age:32,
    location:{
        city:'Santa Clara',
        temp:52
    }
}
const {name:firstName='Anonymous',age} = person;
console.log(`${firstName} is ${age} years old`);

const {city,temp:temperature} = person.location;
console.log(`Its ${temperature} in ${city}`);

const book = {
    title:'Ego is the enemy',
    author:'Ryan Holiday',
    publisher:{
        name:'penguin'
    }
}

const {name:publisherName='Self-Published'} = book.publisher;

console.log(publisherName);

//Array Destructuring
const address = ['1299 S Juniper St','Philadelphia', 'Pennsylvania','19147'];
const [,city1,state] = address;
console.log(`You are in ${city1} ${state}.`);

const address1 = [];
const [,,state1='NewYork'] = address1;
console.log(`You are in ${state1}.`);

const item = ['Iced Coffee','$2.00','$3.50','$2.75'];
const [type,,medium] = item;
console.log(`A medium ${type} costs ${medium}`);
