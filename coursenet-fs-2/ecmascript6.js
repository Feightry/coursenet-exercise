/* ES6
    New version of javascript


*Function Arrow
*/

// arrow
const hello = () => {
    console.log("hello");
}

// ES6
const tambah = (a,b) => a + b;

console.log(tambah(2,3));

// High order function
// built in function untuk array

/*
.forEach()

.filter() - menghasilkan array baru dr hasil filter

.map() - memproses tiap element di array
*/

let numbers = [1,2,3]

numbers.forEach(element => {console.log(element);})

// ES6 template literal

let kata1 = "saya";
let kata2 = "belajar";
let kata3 = "coding";

console.log(`${kata1} ${kata2} ${kata3}.`);

// ES6 shorten function

const checkGenapGanjil = (num) => {
    return num % 2 === 0 ? 'genap' : 'ganjil';
}

console.log(checkGenapGanjil(2234));

// .forEach()

let scores = [12,5,7,10,1];

scores.forEach(score => {console.log(score);})

// .filter()

let temp1 = scores.filter(score => score > 5);

console.log(temp1);

// .map()

let temp2 = scores.map(score => score ** 2);

console.log(temp2);

/*
STUDY CASE

let stats = [95,80,90,75,50]

Buat function:
1. Filter nilai yang lebih besar dari 75
2. Mengkali kan angka dengan 5
3. Tampilkan angka
*/

let stats = [95,80,90,75,50];

const filterfunc = (array0) => {array0.filter(stat => stat > 75);}

const multiply5 = (array1) => {array1.map(stat => stat * 5);}

const printarr = (array2) => {console.log(array2);}

// or chaining

const numberProcess = (stats) => stats.filter(stat => stat > 75).map(stat => stat * 5).forEach(stat => console.log(stat));

numberProcess(stats);

// Destructuring

const engineer = ["Vincent", 7, ["coding", "design"], 17, true]

// let name = engineer[0];
// let level = engineer[1];
// let skills = engineer[2];
// etc.

// ES6

let [name, level, skills, age, isAvailable] = engineer;

console.log(name);

// Object

const persons = {firstname : "Malcom", lastname: "Reynolds", score : 90}

let {firstname, lastname, score} = persons;

console.log(firstname);

// REST Operator & SPREAD Operator

let a = [1,2,3];
//let b = a;

// ES5
// let b = [].concat(a);

// ES6 REST Operator
let b = [...a];

b.push(4,5);
console.log(a);
console.log(b);

// Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) { 
    return otherInfo;
  }
  
  // Invoke myBio function while passing five arguments to its parameters:
  myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");
  
  // The invocation above will return:
  ["CodeSweetly", "Web Developer", "Male"]

// SPREAD Operator

const changeToObject = (...params) => {
    let result = {};
    let [name, age, skills] = params;

    return {
        name, age, skills
    };
    // result.name = name;
    // result.age = age;
    // result.skills = skills;

    // return result;
}

console.log(changeToObject("Vincent", 17, ["coding","design"]));
