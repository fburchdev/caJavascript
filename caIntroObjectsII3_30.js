var james = {
    job: "programmer",
    married: false,
    speak: function(feeling) {
        if (feeling === "great"){
            console.log("Hello, I am feeling great");
        }
        else{
            console.log("Hello, I am feeling just okay");
        }
    }
};

james.speak("great");
james.speak("just okay");