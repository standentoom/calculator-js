var Calculator = {};
var operators = [];
var numbers = [];
var input = "";
var SomDisplay = "";
var anwser = null;

Calculator.clear = function() {
	operators = [];
	numbers = [];
	input = "";
	SomDisplay = "";
	anwser = null;
	Calculator.display();
}

Calculator.add = function(inputFromCalculator) {
	SomDisplay += inputFromCalculator; 
	input = input += inputFromCalculator;

	Calculator.display();
}

Calculator.operator = function(action) {
	numbers.push(input);
	operators.push(action);
	input = "";

	SomDisplay += " " + action + " ";
	Calculator.display();
}

Calculator.calculate = function() {
	numbers.push(input);
	numbers.push(anwser);

	if (anwser != null) {
		var b = numbers[0];
		numbers[0] = numbers[1];
		numbers[1] = b;
	}
	while ((operators.includes("*") || operators.includes("/"))) {
		
		var keer = operators.indexOf("*");
		var delen = operators.indexOf("/");
	
		var position  = -1;
	
		if (((keer < delen) && keer > -1) || (keer >= 0 && delen == -1)) {
			position = keer;
		} else {
			if (delen > -1){
				position = delen;
			}
		}
	
		if (operators[position] == "*") {
			numbers[position] = Number(numbers[position]) * Number(numbers[position + 1]);
		} else {
			numbers[position] = Number(numbers[position]) / Number(numbers[position + 1]);
		}
	
		operators.splice(position, 1);
		numbers.splice(position + 1, 1);
	}
	
	while ((operators.includes("+") || operators.includes("-"))) {
		
		var plus = operators.indexOf("+");
		var min = operators.indexOf("-");
	
		var position  = -1;
	
		if (((plus < min) && plus > -1) || (plus >= 0 && min == -1)) {
			position = plus;
		} else {
			if (min > -1){
				position = min;
			}
		}
	
		if (operators[position] == "+") {
			numbers[position] = Number(numbers[position]) + Number(numbers[position + 1]);
		} else {
			numbers[position] = Number(numbers[position]) - Number(numbers[position + 1]);
		}
	
		operators.splice(position, 1);
		numbers.splice(position + 1, 1);
	}

	anwser = numbers[0];
	
	SomDisplay = "(" + SomDisplay + ")";

	Calculator.display(); 
}

Calculator.display = function() {
	
	document.getElementById("DisplaySom").value = SomDisplay;

	
	var Display = document.getElementById("Display");

	
	if (anwser != null) {
		Display.value = Math.round(anwser * 100) / 100;
		numbers = [];
	
	} else {
		Display.value = 0;
	}
}