const fruits = [{name: "apple", color: "red", calories:95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "piniapple", color: "yellow", calories:37}];

fruits.push({name: "grapes", color: "purple", calories: 62});


const maxFruits = fruits.reduce((max, fruit) => 
                                fruit.calories > max.calories ?
                                fruit : max );

const minFruits = fruits.reduce((min, fruit) => 
                                fruit.calories < min.calories ?
                                fruit : min );
console.log(maxFruits);
console.log(minFruits);


