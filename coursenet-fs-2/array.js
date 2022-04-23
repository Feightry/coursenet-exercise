// Array

let numbers = [1,2,3,4,5];

let items = ['laptop', 'test', 'kapal']

//console.table(numbers);
//console.log(numbers[-1]);

// .push() - add at the back

numbers.push(9,10);
console.log(numbers);

// .pop() - delete last

let test1 = numbers.pop();
console.log(numbers);
console.log("Nilai yg diambil:",test1);

// .unshift() - add infront

numbers.unshift(0);
console.log(numbers);

// .shift() - delete front

let test2 = numbers.shift();
console.log(numbers);
console.log("Nilai yg diambil:",test2);

let scores = [100, 50, 75, 35, 95];
let temp = 0;
let mean = 0;

for (let i = 0; i < scores.length; i++)
{
    temp += scores[i];
}

mean = temp / scores.length;
console.log("Mean:", mean);

let sortscores = scores.sort((a,b) => a-b);
console.log(sortscores);

// array multidimensional

let stats = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.table(stats);

let temp2 = 0;

for (let j = 0; j < stats.length; j++)
{
    for (let k = 0; k < stats[j].length; k++)
    {
        //console.log(stats[j][k]);
        temp2 += stats[j][k];
    }
}

console.log(temp2);

// student

let student = [
    [1, "Vincent", 3.5],
    [2, "Ncent", 3.0],
    [3, "Mamang", 2.1]
];

let a = 0;

while (a < student.length)
{
    if (student[a][2] >= 3.0)
    {
        console.log(student[a][0], ".", student[a][1], ", IPK:", student[a][2], "PASS");
    }
    else
    {
        console.log(student[a][0], ".", student[a][1], ", IPK:", student[a][2], "FAIL");
    }
    a++;
}