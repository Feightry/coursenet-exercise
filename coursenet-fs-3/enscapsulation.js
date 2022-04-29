// Enscapsulation

class Person {
    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    get name(){
        return this._name;
    }

    get age(){
        return this._age;
    }

    set setName(name){
        this._name;
    }

    set setAge(age){
        this._age = age;
    }
}

const person = new Person ("are", 27);

console.log(person);