const fullName = "Sergej      Jarosch";

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ")+1);
lastName = lastName.replaceAll(" ", "");
console.log(firstName);
console.log(lastName);
