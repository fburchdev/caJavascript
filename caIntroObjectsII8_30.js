var suitcase = {
    shirt: "Hawaiian"
};

if(suitcase.hasOwnProperty('shorts')){
    console.log(suitcase.shorts);
}
else{
    suitcase.shorts = "batik";
    console.log(suitcase.shorts);
}