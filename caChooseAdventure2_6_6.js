var user = prompt("What's your name?").toUpperCase();

switch(user){
    case 'MIMI':
        console.log("Hello Mimi");
        break;
    case 'ERIN':
        var answer = prompt("Do you like stuffed animals?").toUpperCase();

        if (answer === 'YES' && answer != 'NO'){
            console.log("Bring your favorite along then, Erin.");
        }
        else{
            console.log("All right then, no stuffed animals.");
        }
        break;
    case 'FRED':
        console.log("Hello Fred");
        var answer = prompt("May I call you Freddie?").toUpperCase();
        if(answer === 'YES' || answer === 'SI'){
            console.log("Cool, Freddie!");
        }else{
            console.log("All right then, Fred.");
        }
        break;
    default:
        console.log("User not recognized");
}