// Inheritance - Dapat menurunkan sifat class

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, score) {
        super(name, age);
        this.score = score || 0;
    }
}

class Pedestrian extends Person {
    constructor(name, age, city){
        super(name, age);
        this.city = city;
    }
}

class Programmer extends Person {
    constructor(name, age, skills) {
        super(name, age);
        this.skills = skills || []
    }
}

const student = new Student("Vincent", 29, 100);
const pedestrian = new Pedestrian("Marie", 33, 89);
const programmer = new Programmer("Andy", 29, 79);