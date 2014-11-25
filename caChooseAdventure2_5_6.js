var user = prompt("What's your name?").toUpperCase();

switch(user){
    case 'MIMI':
        console.log("Hello Mimi");
        break;
    case 'ERIN':
        if(1 > 0 && 2 > 0){
            console.log("Hello Erin");
        }
        else{
            console.log("Hi Erin");
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