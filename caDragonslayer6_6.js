var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while(slaying){
    if(youHit){
        console.log("You hit! Rock on Dragonslayer!");
        totalDamage += damageThisRound;
        if(totalDamage >= 4){
            console.log("You slew the dragon! You Win!!!");
        }else{
            youHit = Math.floor(Math.random() * 2);
        }
    }else{
        console.log("The dragon fried you!");
    }
    slaying = false;
}