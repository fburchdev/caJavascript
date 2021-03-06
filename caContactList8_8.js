var friends = {};
friends.bill = {
    firstName: 'Bill',
    lastName: 'Gates',
    number: '1111111111',
    address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
    firstName: 'Steve',
    lastName: 'Jobs',
    number: '2222222222',
    address: ['1 Infinite Loop','Cupertino','CA','95014']
};
friends.angus = {
    firstName: 'Angus',
    lastName: 'Monkey',
    number: '4444444444',
    address: ['1 CSB', 'Spot 1', 'NYC', '13333']

};
friends.erin = {
    firstName: 'Erin',
    lastName: 'Kitten',
    number: '3333333333',
    address: ['1 CSB', 'Spot 2', 'NYC', '13333']

};

var list = function(obj){
    for (var prop in obj){
        console.log(prop);
    }
};

var search = function(name){
    for (var key in friends){
        if(friends[key].firstName === name){
            console.log("First Name: " + friends[key].firstName);
            console.log("Last Name: " + friends[key].lastName);
            console.log("Number: " + friends[key].number);
            return friends[key];
        }
    }
};

list(friends);
search("Erin");