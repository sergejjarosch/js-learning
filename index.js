let loggedIn = false;
let username;
let password;

do{
    username = window.prompt("Enter your username:");
    password = window.prompt("Enter your password:");
    if (username === "myUsername" && password === "password"){
        loggedIn = true;
        console.log("You are logged in!");
    } else {
        console.log("Invalid credentials! Please try again.");
    }
} while (!loggedIn)