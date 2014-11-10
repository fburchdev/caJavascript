// Write your code below!
var frequency = prompt("How frequently do you exercise: frequently, sometimes, seldom, or never?");

switch(frequency){
    case 'frequently':
        console.log("Good job! Keep it up!");
        break;
    case 'sometimes':
        console.log("That is a good start. Consider some ways to improve.");
        break;
    case 'seldom':
        console.log("Consider an alternate activity next time. You might like it more and feel more motivated.");
        break;
    case 'never':
        console.log("Try googling ways to get started.");
        break;
    default:
        console.log("Could not interperet your answer.");
}
