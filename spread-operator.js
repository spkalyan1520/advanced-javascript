//Pushing to an array - not recommended because we are changing the state
let names = ['Mark', 'John', 'Jen']
console.log(names);
names.push('Julie');
console.log(names);

//Creating a new array - Concat (can only add items to the end)
console.log(names.concat('Mary'));
console.log(names);

//Creating a new array  - Using the spread operator (add old array anywhere in the middle)
console.log('Adam',...names,'Mike');
console.log(names);

//Object Spread needs babel plugin
// const user = {
//     name: 'Jen',
//     age:24
// }
//
// console.log({
//     ...user,
//     location:'Philadelphia',
//     age:27
// });