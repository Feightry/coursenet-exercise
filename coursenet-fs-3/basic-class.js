/*const people = {
    name: "Vincent",
    age: 29,
    skills: ["coding", "design"],

    speakUp: function() {
        console.log(`My name is ${this.name}`);
    },

    mentionHobbies: function() {
        console.log("My Hobbies: ");
        this.skills.forEach((skill, index) => {
            console.log(`${index+1}. ${skill}`);
        });
        //console.log(this.skills);
    }
}

people.mentionHobbies();*/

class People {
    constructor(name, age, hobbies) {
        this.name = name || ""; // the default if empty is "" instead of undefined
        this.age = age || 0;
        this.hobbies = hobbies || [];
    }

    speakUp() {
        console.log(`My name is ${this.name} and my age is ${this.age}.`);
    }

    mentionHobbies() {
        console.log("My Hobbies: ");
        this.hobbies.forEach((hobby, index) => {
            console.log(`${index+1}. ${hobby}`);
        });
    }

    addHobby(hobbyName) {
        this.hobbies.push(hobbyName);
        console.log(`"${hobbyName}" is my new hobby!`);
    }

    deleteHobby() {
        this.hobbies.pop();
    }
}

// Instanciation
const people = new People("Vincent", 29, ["sleep", "eat"]);
// People => instance of class People / Object Class
// console.log(people.name);

people.addHobby("gaming");
people.addHobby("travelling");
people.mentionHobbies();