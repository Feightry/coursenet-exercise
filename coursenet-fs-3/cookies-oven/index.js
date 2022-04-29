const Kitchen = require('./Kitchen')

const kitchen = new Kitchen();

kitchen.bake("Dark Chocolate", 25000, ["Cacao bean", "Sugar"], "Chocolate", false);
kitchen.bake("Strawberry Shortcake", 38000, ["Strawberry", "Sugar", "Butter", "Milk"], "Strawberry", false);
kitchen.bake("White Chocolate", 30000, ["Cocoa butter", "Sugar", "Milk", "Vanilla"], "Chocolate", true);
kitchen.bake("Licorice", 22000, ["Liquorice extract", "Sugar"], "Sweet", false);
kitchen.bake("Caramel", 24000, ["Sugar"], "Sweet", true);


kitchen.addSugar("licorice");
kitchen.eat("caramel");

//console.log(kitchen);
kitchen.showCookie();