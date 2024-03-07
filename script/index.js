const fruits = [{name: "apple", color: "red", calories:95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "piniapple", color: "yelow", calories:37},
                {name: "grapes", color: "purple", calories: 62}];



fruits.sort((a,b) => a.calories - b.calories);
console.log(fruits)