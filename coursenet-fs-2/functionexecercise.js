/*1. Angka Prima
Angka prima adalah angka yang memiliki 2 faktor : 1 dan bilangan itu sendiri. Print N bilangan angka
prima pertama
function printPrimes(num){
// code he
}
// Test case
printPrimes(10)
// 2 3 5 7 11 13 17 19 23 29
printPrimes(5)
// 2 3 5 7 11
*/

function printPrimes(num){

    let temp1 = "";
    let a = 1;
    let b = 1;
    let faktor = 0;

    while (a <= num)
    {
        faktor = 0;
        for (let i = 1; i <= b; i++)
        {
            if(b % i === 0)
            {
                faktor++;
            }
        }
        if (faktor === 2)
        {
            if (a < num)
            {
                temp1 = temp1 + b + " ";
                a++;
                b++; 
            }
            else{
                temp1 = temp1 + b;
                a++;
                b++;
            }
        }
        else
        {
            b++;
        }
    }

    console.log(temp1);
}

printPrimes(15);
printPrimes(5);

/* 2. Triple Pythagoras
Triple Pythagoras merupakan 3 deretan angka yang memenuhi persyaratan Pythagoras. Contoh:
Angka 3,4,5 merupakan Triple Pythagoras karena:
3^2 + 4^2 = 5^2 => 9 + 16 = 25
Angka 6,8,10 merupakan Triple Pythagoras karena:
6^2 + 8^2 = 10^2 => 36 + 64 = 100
function triple(a,b,c){
// code
}*/

function triple(a,b,c){
    if (Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2))
    {
        return true;
    }
    else
    {
        return false;
    }
    // return resulta + resultb === resultc ? true : false
}

console.log(triple(3,4,5)) // true
console.log(triple(3,3,3)) // false

/*3. Pasangan Terbesar
Cari pasangan angka terbesar dari string number.Diberikan 2 buah function dengan task sebagai
berikut :
splitToArray : mengambil pasangan angka ke dalam array
Contoh : let input = "5279312" -> [52,27,79,93,31,12]
findTheLargest : function utama mengahasilkan number
function splitToArray(string) {
// code here
}
function findTheLargest(string) {
let arrayNumbers = splitToArray(string);
// code here
}
*/

function splitToArray(string){
    let k = 1;
    let tempstr = 0;
    temparr3 = [];
    while (k < string.length)
    {
        tempstr = string[k-1] + string[k];
        temparr3.push(tempstr);
        // temparr3.push(Number(tempstr)); -> convert to number
        tempstr = 0;
        k++;
    }
    return temparr3;
}

function findTheLargest(string) {
    let biggestNum = 0;
    if (string === "" || string === undefined)
    {
        return "Input number";
    }
    else if (string.length === 1)
    {
        let arrayNumbers = parseInt(string);
        biggestNum = arrayNumbers;
    }
    else
    {
        let arrayNumbers = splitToArray(string).map(str => {return Number(str);});
        for (let l = 0; l < arrayNumbers.length; l++)
        {
            if(arrayNumbers[l] > biggestNum)
            {
                biggestNum = arrayNumbers[l];
            }
        }
    }
    return biggestNum;  
}

console.log(findTheLargest("5275789312")); // 93
console.log(findTheLargest("313282787")); // 87
console.log(findTheLargest("19")); // 19
console.log(findTheLargest("7")); // 7
console.log(findTheLargest()); // Input number
