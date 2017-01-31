function User(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
};

function Adress(city, street) {
    this.city = city;
    this.street = street;
};

User.prototype.say = function(value) {
    console.log("I say " + value);
};

var jean = new User("Jean", "Burellier");
var loc = new Adress("Lyon", "Sala");
var paul = new User("Paul", "robert")

User.prototype.adress = loc;
console.log(jean.adress);

