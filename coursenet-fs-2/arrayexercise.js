let watches = ["Swiss Army","Daniel Wellington","Dublot"]
// Hasil yang di harapkan : Saya punya Swiss Army, Daniel Wellington, dan Dublot.

let a = 0;
let count = 0;
let temp = "Saya punya ";

while (a < watches.length)
{
    if(a != watches.length-1)
    {
        temp = temp.concat(watches[a],", ");
    }
    else
    {
        temp = temp.concat("dan ",watches[a],".");
    }
    a++;
}

console.log(temp);

console.log("--------------------------");

/* 2. Mengelompokkan sebuah array menjadi per alfabeth.
Diberikan sebuah array 1 dimensi fruits sebagaiberikut:
let fruits = ["cherry","blueberry","avocado","apple","cranberry"]
// Result

[
["avocado","apple"],
["blueberry"],
["cherry","cranberry"]
]
*/

let fruits = ["cherry","blueberry","avocado","apple","cranberry"];
//let test = fruits.sort();
//console.log(test);
let i = 0;
let temp2a = [];
let temp2b = [];
let temp2c = [];
let combinetemp = [];

while (i < fruits.length)
{
    if (fruits[i][0] === "a")
    {
        temp2a.push(fruits[i]);
    }
    else if (fruits[i][0] === "b")
    {
        temp2b.push(fruits[i]);
    }
    else if (fruits[i][0] === "c")
    {
        temp2c.push(fruits[i]);
    }
    i++;
}

console.log(temp2a);
console.log(temp2b);
console.log(temp2c);

combinetemp.push(temp2a, temp2b, temp2c);
console.log(combinetemp);

console.log("--------------------------");

/* 3. Pecah Kata
Pecah sebuah kalimat menjadi per kata dan masukkan ke dalam sebuah array
let kalimat = "belajar bersama dunia coding yuk";
// Result
// ["belajar","bersama","dunia","coding","yuk"]
*/

let kalimat = "belajar bersama dunia coding yuk";
// kalimat = kalimat.split(" ");

// console.log(kalimat);

let j = 0;
let tempkal = "";
let temparr = [];

while(j < kalimat.length)
{
    if(j === kalimat.length-1)
    {
        tempkal += kalimat[j];
        temparr.push(tempkal);
    }
    else
    {
        if(kalimat[j] != " ")
        {
            tempkal += kalimat[j];
        }
        else
        {
            temparr.push(tempkal);
            tempkal = "";
        }
    }
    j++;
}

console.log(temparr);