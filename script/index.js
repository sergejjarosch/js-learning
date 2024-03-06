


class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayPridukt(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(saleTax){
        return this.price + (this.price * salesTax)
    }
}
const salesTax = 0.19;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 32.99);
const product3 = new Product("Underware", 100)

product1.displayPridukt();
product2.displayPridukt();
product3.displayPridukt();


const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`)