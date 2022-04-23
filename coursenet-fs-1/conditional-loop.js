/**Conditional + Loop 
 * 
 * If Else, switch case
*/

let level = "Unknown";

// toLowerCase() , toUpperCase()

if (level.toLowerCase() === "easy")
{
    console.log("Level is easy");
} 
else if (level.toLowerCase() === "medium")
{
    console.log("Level is medium");
}
else if (level.toLowerCase() === "hard")
{
    console.log("Level is hard");
}
else if (level.toLowerCase() === "")
{
    console.log("Level must be filled");
}
else
{
    console.log("Level is unknown");
}

/** Classification level of a game
 * 
 * If power greater than 100, status "Expert"
 * If power above 70 and less than equal to 100, status "Pro"
 * If power above 50 and less than equal to 70, status "Normal"
 * If power above 30 and less than equal to 50, status "Basic"
 * If power less than 30, status "Beginner"
 */

let power = "50";

if (power > 100)
{
    console.log("Expert");
}
else if (power > 70 && power <= 100)
{
    console.log("Pro");
}
else if (power > 50 && power <= 70)
{
    console.log("Normal");
}
else if (power > 30 && power <= 50)
{
    console.log("Basic");
}
else if (power < 30)
{
    console.log("Beginner");
}
else
{
    console.log("Error");
}

/** Vending machine giving drink input string
 * 
 * If drink is empty, output "Input drink"
 * If drink input is "Sweet Tea", output "You choose Sweet Tea, thanks"
 * If drink input is "Plain Tea", output "You choose Plain Tea, thanks"
 * If drink input is "Boba", output "You choose Boba, thanks"
 * If drink input is "Milk Coffee", output "You choose Milk Coffee, thanks"
 * If drink input is "Choco Ice", output "You choose Choco Ice, thanks"
 * If drink input is wrong, output "Drink is not defined"
*/

let drink = "swaet tea";
drink = drink.toLowerCase();

switch (drink)
{
    case "":
        {
        console.log("Please input drink");
        break;
        }
    case "sweet tea":
        {
        console.log("You choose Sweet Tea, thanks");
        break;
        }
    case "plain tea":
        {
        console.log("You choose Plain Tea, thanks");
        break;
        }
    case "boba":
        {
        console.log("You choose Boba, thanks");
        break;
        }
    case "milk coffee":
        {
        console.log("You choose Milk Coffee, thanks");
        break;
        }
    case "choco ice":
        {
        console.log("You choose Choco Ice, thanks");
        break;
        }
    default:
    {
        console.log("Drink is not defined");
    }
}

/** 3. E-commerce memberikan cashback besar-besaran menggunakan coupon code. Seorang pembeli akan
dapat cashback dari total pembelian barang yang dia beli. Berikut rincian coupon:

a. FreeOngkir
Jika pembelian lebih dari atau sama dengan 50000. Maka akan ada potongan 10%.
Jika pembelian antara 30000 dan 50000. Maka akan ada potongan 5%.
Jika kurang dari 30000. Maka akan ada potongan 2.5%

b. Free15%
Jika pembelian lebih dari atau sama dengan 30000. Maka akan ada potongan 15%.
Jika kurang dari 30000. Maka akan ada potongan 0%

Contoh proses:
Total pembelian 100000 dan memilih coupon FreeOngkir, maka result: "Total pembelian anda Rp. 90000"
*/

let totalcost = 40000;
let coupon = "Free15%"
let truecost;

switch (coupon)
{
    case "FreeOngkir":
        {
            if (totalcost >= 50000)
            {
                truecost = 0.9 * totalcost; 
            }
            else if (30000 < totalcost < 50000)
            {
                truecost = 0.95 * totalcost;
            }
            else if (totalcost < 30000)
            {
                truecost = 0.975 * totalcost;
            }
            break;
        }
    case "Free15%":
        {
            if (totalcost >= 30000)
            {
                truecost = 0.85 * totalcost;
            }
            else if (totalcost < 30000)
            {
                truecost = totalcost;
            }
            break;
        }
}

console.log("Total cost", totalcost, "and using", coupon, "so the total of your cost is Rp.", truecost);
