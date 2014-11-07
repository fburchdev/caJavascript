var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while(slaying){
    if(youHit ===1){
        console.log("You hit! Rock on Dragonslayer!");
    }else{
        console.log("The dragon fried you!");
    }
    slaying = false;
}