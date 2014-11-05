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
