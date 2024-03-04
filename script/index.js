
function isEven(number){
    return number % 2 === 0 ? true : false;
}

function isValidEmail (email){
    return email.includes("@") ? true : false;
}
console.log(isValidEmail("serg@code.com"));