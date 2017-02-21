var obj = {
	firstname : "Jean",
	lastname : "Burellier",
	say: function() {
		console.log("hello");
	}
}

function People(firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
}

People.prototype.say = function() {
	console.log("Hellow World. By " + this.firstname);
}

var barney = new People("barney", "Stinson");
var ted = new People("Ted", "Mosby");
var lilly = new People("Lilly", "Sanders");

People.prototype.bye = function() {
	console.log("By World. From " + this.firstname);
}

console.log(barney);
console.log(ted);
console.log(lilly);

barney.bye();
ted.bye();

barney.firstname = "Bob";

Object.keys(barney).forEach(function(elem) {
	barney[elem] = "Confidentiel";
	console.log(elem + " - " + barney[elem]);
});
