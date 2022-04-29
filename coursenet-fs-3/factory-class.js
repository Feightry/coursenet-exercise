// Factory class
// Class yang di utamakan methodnya dibanding key

class Student {
    constructor(name, age, isGraduated) {
        this.name = name;
        this.age = age;
        this.isGraduated = isGraduated;
    }
}

class ClassRoom {
    constructor(room){
        this.room = room || [];
    }

    getStudents(data) {
        let students = data.map(el => {
            const [name, age, isGraduated] = el;
            return new Student(name, age, isGraduated);
        });
        this.room = students;
    }
    
    inputStudent(...params) {
        const [name, age, isGraduated] = params;
        const student = new Student(name, age, isGraduated);
        this.room.push(student);
    }

    showStudents() {
        console.log("Student list: ");
        this.room.forEach((element, index) => {
            console.log(`${index+1}. ${element.name}, ${element.age} years old.`);
        });
    }

    deleteStudent(studentName) {
        let students = this.room.filter(el => el.name !== studentName);
        this.room = students;
    }

    statusStudent() {
        // Graduated
        console.log("Graduated Students: ");
        let i = 1;
        this.room.forEach((el) => {
            if(el.isGraduated === true)
            {
                console.log(`${i}. ${el.name}, ${el.age} years old.`);
                i++;
            }
        });
        // Non-Graduated
        console.log("Not Graduated Yet Students: ");
        let j = 1;
        this.room.forEach((el) => {
            if(el.isGraduated === false)
            {
                console.log(`${j}. ${el.name}, ${el.age} years old.`);
                j++;
            }
        });
    }
}

// const student1 = new Student("Vincent", 29, true);
// const student2 = new Student("James", 27, false);

const data = [
    ["Vincent", 29, true],
    ["James", 27, false],
    ["Stella", 25, false],
    ["Rin", 22, true],
    ["Ingrid", 20, false]
];

const data2 = [
    ["Richard", 33, true],
    ["Angel", 21, false]
]

const classroom = new ClassRoom();
// classroom.inputStudent(student1);
// classroom.inputStudent(student2);

// classroom.inputStudent("Vincent", 29, true);
// classroom.inputStudent("James", 27, false);
// console.log(classroom.room);
// classroom.showStudents();

classroom.getStudents(data);
//classroom.inputStudent(data2);
// classroom.deleteStudent("Rin");
// classroom.deleteStudent("James");
classroom.showStudents();

classroom.statusStudent();
