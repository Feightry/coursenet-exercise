/** Algorithm and Pseudocode 
 * 
 * 1. Untuk menghitung massa jenis sebuah benda di perlukan rumus berikut:
rho = massa / volume

Algorithm (rho)
1. Make variable mass
2. Make variable volume
3. Make variable rho
4. Assign variable rho with mass divide with volume
5. Print variable rho

Pseudocode (rho)
1. STORE mass WITH ANY NUMBER
2. STORE volume WITH ANY NUMBER
3. SET rho WITH mass DIVIDED BY volume
4. PRINT rho
*/

/** 2. Diketahui rumus luas permukaan tabung adalah:
luas_permukaan_tabung = (2 x phi x height x r) + (2 x phi x r x r) 

Algorithm (Cone area)
1. Make variable height
2. Make variable r
3. Make variable pi
4. Assign pi with MATH.PI
5. Make variable area
6. Assign variable area with adding 2 times pi times height times r with 2 times pi times r times r
7. Pring variable area

Pseudocode (Cone area)
1. STORE height WITH ANY NUMBER
2. STORE r WITH ANY NUMBER
3. STORE pi WITH MATH.PI
4. SET area WITH 2 MULTIPLY BY pi MULTIPLY BY height MULTIPLY BY r ADDED WITH 2 MULTIPLY BY pi MULTIPLY BY r MULTIPLY BY r
5. PRINT area
*/

/**3. Menghitung volume setengah bola dengan rumus:
volume = 1/2 x phi x r^3

Algorithm (Volume of ball)
1. Make variable r
2. Make variable pi
3. Assign pi with MATH.PI
4. Make variable volume
5. Assign variable volume with 1/2 times pi times r times r times r

Pseudocode (Volume of ball)
1. STORE r WITH ANY NUMBER
2. STORE pi WITH MATH.PI
3. SET volume WITH 1/2 MULTIPLY BY pi MULTIPLY BY r MULTIPLY BY r MULTIPLY BY r
4. PRINT volume
*/

// Volume of ball
let r = 10;
let pi = Math.PI;
let volumeofball = 1/2 * pi * Math.pow(r,3);
console.log(volumeofball);

/**4. Menampilkan hasil seperti berikut:
Result
Selamat belajar, Vincent!
Keterangan: untuk nama orang dapat di ganti ganti dengan menggunakan variable */

let congrats = "Selamat belajar, "
let yname = "Vincent";
let combine = congrats.concat(yname,"!");
console.log(combine);

/**5. Membuat sebuah kode yang di generate secara random. Terdapat 3 bagian:
<nama_angkarandom_boolean>
Result
// 1st running
admin1true
// 2nd running
admin5true */

let name1 = "admin";
let status = true;

// Returns a random integer from 0 to 9:
let randnumber = Math.floor(Math.random() * 10);
let combine2 = name1.concat(randnumber,status);

console.log(combine2);
