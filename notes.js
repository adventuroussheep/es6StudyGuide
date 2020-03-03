// 1~
// Object.freeze, Will prevent a var from changing

// const person = {
//     age: 42
// };

// Object.freeze(person);

// person.age = 22;

// console.log("age " + person.age);





// 2~
// IIFE, A function that runs automatically

// (function(){
//     var name = "Jacob";
//     console.log(name);
// })();






// 3~
// Var/Let scope for For Loops, Let scopes I while Var automatically runs I
// Change var to let to see results

// for (var i = 0; i < 10; i++){
//     console.log(i);
//     setTimeout(function(){
//         console.log("the number is " + i);
//     },1000)
// }





// 4~
// Arrow Functions

// const names = ["jacob", "jess", "nugget"];

// const fullNames = names.map(function(x){
//      console.log(`${x} haas`);
// })

// for double param
// const fullNames2 = names.map((x) => {
//     console.log(`${x}`)
// })

// for single param
// const fullNames3 = names.map(x => {
//     console.log(`${x}`)
// })

// implicite return
// const fullNames4 = names.map(x => x);
// console.log(fullNames4);

// // W/O param
// const fullNames5 = names.map(() => "hello");
// console.log(fullNames5);

// // Anonomys Functions
// const fullNames6 = (aName) => {
//     console.log(`Hello ${aName}`)    
// }
// fullNames6("sir");



// Examples (Implicite return with object literal)
// const race = "100m dash";
// const winners = ["Bolt", "Flash", "Batman"];

// const win = winners.map((x,i) => ({name: x, race, place: i + 1}));

// console.table(win);


//Examples (Filter)
// const ages = ["19", "43", "1", "70", "50"];

// const old = ages.filter(x => x >= 50);
// console.log(old);




// 5~
// THIS
// NOT COMPLETE

// const box = ["a", "box"];
// const boxReturn = box.map(() => "hello");
//     console.log(this);





// 6~
// FUNCTION ARGUMENTS/PARAMS
// CAN BE PASSED AS AN IF STATMENT, IN THE FUNCTION CALL, OR IN THE FUNCTION PARAMS

// function billCalc(total, tax = 0.13, tip){
//     // if (tax === undefined){
//     //     tax = 0.13;
//     // }
//     // if (tip === undefined){
//     //     tip = 0.15;
//     // }
//     return total + (total * tax) + (total * tip);
// }

// const totalBill = billCalc(100, undefined, 0.15);
// console.log(totalBill);





// 7~
// THIS, CANNOT BE USED IN ARROW FUNCTIONS

// const person = {
//     points: 23,
//     score(){
//         this.points++;
//     }
// }

// console.log(person);
// person.score();
// console.log(person);


// WITH PROTOTYPE & CLASS
// class Car {
//     constructor(make, color){
//         this.make = make;
//         this.color = color;
//     }
// }

// const beemer = new Car('bmw', 'blue');
// const subie = new Car('subaru', 'white');

// console.log(subie);

// Car.prototype.summarize = function(){
//     console.log (`This car is a ${this.make} in the color ${this.color}`)
// };

// subie.summarize();
// beemer.summarize();




// 8~
// TEMPLATE LITERALS/TEMPLATE STRINGS

// const name = "Nugget";
// const age = 1;
// const sentence = `My cat ${name} is ${age} years old`;
// console.log(sentence);



// const person = {
//     name: "jacob",
//     job: "web dev",
//     bio: "makes some pretty cool stuff"
// }

// console.log(`hello ${person.name}, it seems like you ${person.bio}`);





//NEXT 14