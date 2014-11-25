var user = prompt("What's your name?").toUpperCase();

switch(user){
    case 'MIMI':
        console.log("Hello Mimi");
        break;
    case 'ERIN':
        console.log("Hello Erin");
        break;
    case 'FRED':
        console.log("Hello Fred");
        break;
    default:
        console.log("User not recognized");
}