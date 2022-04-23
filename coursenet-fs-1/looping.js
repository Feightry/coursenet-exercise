/** Looping */

/** 1. Faktor merupakan deretan angka yang membentuk suatu angka tertentu.
Contoh: Faktor dari 10 adalah angka 1, 2, 5 dan 10.
Ciri-ciri faktor adalah angka tersebut habis membagi.
var number = 10;
// Results
// 1,2,5,10
Buat sebuah program untuk menghasilkan faktor dari sebuah angka.*/

let number = 10;
let i = 1;
let result = "";

while (i <= 10) 
{
    if (10 % i === 0)
    {
        if (i != 10)
        {
            result = result.concat(i,",");
        }
        else
        {
            result = result.concat(i);
        }
    }
    i++;
}

console.log(result);

let numf = 5;
let faktor = 0;

for (let a = 1; a <= numf; a++)
{
    if (numf % a === 0)
    {
        faktor++;
    }
}

if (faktor === 2)
{
    console.log(numf + " adalah bilangan Prima");
}
else
{
    console.log(numf + " adalah bukan bilangan Prima");
}

console.log("--------------------------");
/** 2. Print segitiga
var n = 5;
// Result
/*
#
#X
#X#
#X#X
#X#X#
*/  

let n = 1;
let result2 = "";

while (n <= 5)
{
    if (n % 2 === 0)
    {
        result2 = result2.concat("X");
        console.log(result2);
    }
    else
    {
        result2 = result2.concat("#");
        console.log(result2);
    }
    n++;
}

console.log("--------------------------");
/** 3. Print sebuah kotak
var input = 5;
// Result
/*
#####
#   #
#   #
#   #
#####
*/

let x = 1;
let bar5 = "#####";
let bar2 = "#   #";

while (x <= 5)
{
    if (x === 1 || x === 5)
    {
        console.log(bar5);
    }
    else
    {
        console.log(bar2);
    }
    x++;
}

/// Alternative solution

let numa = 5;
let restemp = "";

for(let ia = 0; ia < numa; ia++)
{
    for(let ja = 0; ja < numa; ja++)
    {
        if(ia === 0 || ia === numa-1)
        {
            restemp += "#";
        }
        else
        {
            if(ja === 0 || ja === numa-1)
            {
                restemp += "#";
            }
            else
            {
                restemp += " ";
            }
        }
    }
    console.log(restemp);
    restemp = "";
}


/** let word = "bukber"
 * result: BuKbEr
 */

let word = "bukber";
let lengthc = word.length;
let result3 = "";

for (let y = 0; y < lengthc; y++)
{
    if (y % 2 == 0)
    {
        result3 = result3.concat(word[y].toUpperCase());
    }
    else
    {
        result3 = result3.concat(word[y].toLocaleLowerCase());
    }
}

console.log(result3);

/** Study case 3
 * 
 * let sentence = "saya mau buka bersama teman"
 * 
 * result:
 * saya
 * mau
 * buka
 * bersama
 * teman
 */

let sentence = "saya mau buka bersama teman"
let chartemp = ""

for (let z = 0; z < sentence.length; z++)
{
    if (sentence[z]!=" ")
    {
        chartemp += sentence[z]; 
    }
    else
    {
        console.log(chartemp);
        chartemp = "";
    }
    if (z === sentence.length - 1)
    {
        console.log(chartemp);
        chartemp = "";
    }
}

/** Loop within loop */

let input1 = 3;
let temp = "";

for(let j = 0; j < input1; j++)
{
    for(let k = 0; k < input1; k++)
    {
        temp = temp + "#";
    }
    console.log(temp);
    temp = "";
}

/** 1
 *  12
 *  123
 *  1234
 *  12345
 */

let var1 = 5;
let temp2 = "";

for(let m = 1; m <= var1; m++)
{
    temp2 = temp2 + m;
    console.log(temp2)
}