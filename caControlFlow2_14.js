var isEven = function(number) {
    // Your code goes here!
    if(number%2 === 0){
        return true;
    }else if(isNaN(number)){
        return "Your input is not a number!";
    }
    else{
        return false;
    }

};