/**
 * Study case 1
 * 
 * Buat Algorithm and pseudocode and code for:
 * 1. Rumus luas segitiga
 * 2. Rumus luas lingkaran
 */

/**Algorithm (Area of Triangle)
 * 1. Make variable base
 * 2. Make variable height
 * 3. Make variable area
 * 4. Isi variable area with 1/2 times base times height
 * 5. Print variable area
 * 
 * Pseudocode (Area of Triangle)
 * STORE base WITH ANY NUMBER
 * STORE height WITH ANY NUMBER
 * SET area WITH 1/2 MULTIPLY by base MULTIPLY by height
 * PRINT area
 */

/**Code (Area of Triangle) */

let base = 10;
let height = 6;
let trianglearea = 1/2 * base * height;
console.log(trianglearea);

/**Algorithm (Area of Circle)
 * 1. Make variable radius
 * 2. Make variable pi > assign it with math PI (3.14...)
 * 3. Make variable area
 * 4. Assign variable area with radius times radius times pi
 * 5. Pring variable area
 * 
 * Pseudocode (Area of Circle)
 * STORE radius WITH ANY NUMBER
 * STORE pi WITH MATH.PI
 * SET area WITH radius MULTIPLY by radius MULTIPLY by pi
 * PRINT area
 */
 
/**Code (Area of Circle) */

let radius = 10;
let pi = Math.PI;
let circlearea = radius * radius * pi;
console.log(circlearea);