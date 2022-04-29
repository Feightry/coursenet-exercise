/* Object
    Kumpulan nilai yang memiliki kunci
*/

let student = {
    name : "Vincent",
    gpa : 3.21,
    isGraduated : true,
    "able to code" : "yes",
    100 : 1
};

console.log(student.name);
console.log(student["isGraduated"]);
console.log(student["able to code"]);
console.log(student["100"]);

// change from array to object

let buah =["durian", 75000, true];

function changeToObject (array)
{
    let result = {};
    result.jenis = array[0];
    result.harga = array[1];
    result.enak = array[2];
    return result;
}

console.log(changeToObject(buah));

// Method in object

let mobil = {
    name : "Civic",
    cc : 5000,
    // method
    startEngine : function() {
        console.log("Mesin nyala");
    }
}

mobil.startEngine();

// exercise

let caca = {
    // key
    name : "Caca",
    weight : 45,
    height : 145,
    hobbies : ["Movie", "Food"],
    // method
    mentionHobbies : function(){
        console.log("My Hobbies: ");
        for(let i = 0; i < this.hobbies.length; i++){
            console.log(i + 1 + ". " + this.hobbies[i]);
        }
        
    }
}

caca.mentionHobbies();

// Array of Object

let persons = [
    {firstname : "Malcom", lastname: "Reynolds", Score : 90},
    {firstname : "Kaylee", lastname: "Frye", Score : 88},
    {firstname : "Jayne", lastname: "Cobb", Score : 75}
];

console.table(persons);
