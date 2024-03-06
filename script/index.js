function Car (make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.make} ${this.model}`)}
}

const car1 = new Car("Tesla", "Model-3", 2024, "white");
const car2 = new Car("Mercedes-Benz", "EQS", 2025, "red");
const car3 = new Car();

car1.drive();
car2.drive();