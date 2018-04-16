let dog = {
    sound:'woof',
    talk:function(){
        console.log(this.sound);
    }
}

dog.talk(); //woof
let talkFunction = dog.talk;
talkFunction(); //undefined
let boundFunction = talkFunction.bind(dog);
boundFunction();

//Interfaces(actually inheritance) with JS
let animal = {
    sound:'qiacl',
    talk:function(){
        console.log(this.sound);
    }
}

let duck = {
    sound:'quack'
}

let cat = {
    sound:'meow'
}

var run = function(func){
    func();
}
run(animal.talk);
run(animal.talk.bind(duck));
run(animal.talk.bind(cat));