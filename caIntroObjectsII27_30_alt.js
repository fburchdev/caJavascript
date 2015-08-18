var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// ran this code after forum suggestion to further illustrate retrieving values by key in a loop
for (var x in languages) {
    console.log(x + ' : ' + languages[x])
};