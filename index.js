

let username = window.prompt("Enter your Username:");
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);