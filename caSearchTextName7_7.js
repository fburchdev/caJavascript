/*jshint multistr:true */
var text = "My name is Frances. Frances is an awesome name.";
myName = "Frances";
hits = [];
for (var i = 0; i < text.length; i++){
    if(text[i] === 'F'){
        for ( var j = i; j < (myName.length + i); j++ ){
            hits.push(text[j]);
        }
    }
}
if (hits.length === 0){
    console.log( "Your name wasn't found!" );
}
else{
    console.log(hits);
}

/* could use match() with regexp instead to fine tune search results .*/