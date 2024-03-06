

//---- Distructure in Funktion Parameters --------

function displayPerson({firstName, lastName, age, job = "Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook",
}

const person2  = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34, 
} 

displayPerson(person2);