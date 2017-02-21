// http://bit.ly/2lzhlCf

var point = {
	x: 100,
	y: 50,
	getX: function() {
		alert(this.x);
	},
	getY: function() {
		alert(this.y);
	},
	area: function() {
		alert("Area" + this.x*this.y)
	},
};

var anotherPoint = {
	x: 6
};

point.area();
anotherPoint.area = point.area.bind(anotherPoint);
anotherPoint.area();