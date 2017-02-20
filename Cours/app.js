var init = document.querySelector('#init');

config = {
	last: "+",
	sign: "false",
	stock: "+"
};

init.addEventListener("click", function() {
	calculator.init();
});


var calculator = {
	init: function() {
		var table = document.querySelector('.calculator');
		table.appendChild(calculator.drawTable());
		table.childNodes[0].appendChild(calculator.drawRow("", "", "", "+"));
		table.childNodes[0].appendChild(calculator.drawRow("7", "8", "9", "-"));
		table.childNodes[0].appendChild(calculator.drawRow("4", "5", "6", "*"));
		table.childNodes[0].appendChild(calculator.drawRow("1", "2", "3", "/"));
		table.childNodes[0].appendChild(calculator.drawRow("", "", "0", "="));
	},
	list: [],
	operation: function(val){
		calculator.list.push(val);
		calculator.result();
	},
	result: function() {
		var result = 0;
		for (var i = 0; i < calculator.list.length; i++) {
			switch(calculator.list[i]) {
				case "+":
					config.last = "+";
					config.sign = true;
					break;
				case "-":
					config.last = "-";
					config.sign = true;
					break;
				case "*":
					config.last = "*";
					config.sign = true;
					break;
				case "/":
					config.last = "/";
					config.sign = true;
					break;
				default:
					config.last = "";
					config.sign = false;
					break;
			}

			if(config.sign == false) {
				if(config.stock == "+") {
					result += parseInt(calculator.list[i]);
				}
				else if(config.stock == "-") {
					result -= parseInt(calculator.list[i]);
				}
				else if(config.stock == "*") {
					result *= parseInt(calculator.list[i]);
				}
				else if(config.stock == "/") {
					result /= parseInt(calculator.list[i]);
				}
				else {
					result += parseInt(calculator.list[i]);
				}
			}	
			else {
				//result += parseInt(calculator.list[i]);
			}	
			config.stock = config.last;	
		}
		calculator.showResult(result);
	},
	showResult: function(val) {
		var elem = document.querySelector('td');
		console.log(val);
		//elem.textContent(val);
	},
	drawTable: function() {
		return document.createElement('table');
	},
	drawRow: function(first, second, third, forth) {
		var tr = document.createElement('tr')
		tr.appendChild(calculator.generateCell(first));
		tr.appendChild(calculator.generateCell(second));
		tr.appendChild(calculator.generateCell(third));
		tr.appendChild(calculator.generateCell(forth));
		return tr;
	},
	generateCell: function(val) {
		var td = document.createElement("td");
		td.textContent = val;
		if (val != "") {
			td.addEventListener("click", function() {
				//console.log(this.textContent);
				calculator.operation(this.textContent);

			});
		}
		return td;
	},
}