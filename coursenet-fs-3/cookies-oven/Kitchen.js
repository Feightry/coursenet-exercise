const { Chocolate, Sweet, Strawberry } = require('./Cookie');

class Kitchen {
    constructor(desserts){
        this.desserts = desserts || [];
    }

    bake(...params) {
        const [name, price, ingredients, type, isSweet] = params;
        let sweetToAdd;
        switch (type) {
            case 'Chocolate':
                sweetToAdd = new Chocolate(name, price, ingredients, type, isSweet);
                break;
            case 'Sweet':
                sweetToAdd = new Sweet(name, price, ingredients, type, isSweet);
                break;
            case 'Strawberry':
                sweetToAdd = new Strawberry(name, price, ingredients, type, isSweet);
                break;
        }
        this.desserts.push(sweetToAdd);
    }

    eat(name) {
        this.desserts = this.desserts.filter(dessert => dessert.name.toLowerCase() !== name.toLowerCase());
    }

    addSugar(name) {
        this.desserts = this.desserts.map(dessert => {
            if (dessert.name.toLowerCase() === name.toLowerCase()) {
                dessert.isSweet = true;
                return dessert;
            }
            return dessert;
        })
    }

    showCookie() {
        if (this.desserts.length > 0) {
            console.log("Desserts Available: ");
            this.desserts.forEach(dessert => {
                const { name, price, ingredients, type, isSweet } = dessert;
                console.log(`Name: ${name}`);
                console.log(`Price: Rp. ${price}`);
                console.log(`Ingredients: ${ingredients}`);
                console.log(`Type: ${type}`);
                if (isSweet === true) {
                    console.log("It is sweet!");
                }
                else {
                    console.log("It is not sweet.");
                }
                console.log("----------------------");
            });
        } else {
            console.log("There is no dessert available.")
        }
    }
}

module.exports = Kitchen;