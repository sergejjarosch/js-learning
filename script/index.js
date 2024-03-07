const fruits = [{name: "apple", color: "red", calories:95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "piniapple", color: "yellow", calories:37}];

fruits.push({name: "grapes", color: "purple", calories: 62});

const yelowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

console.log(yelowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);

