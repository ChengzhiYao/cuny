// Decisions

// If statement

var balance = 100,
		withdrawl = 200;

if (balance < withdrawl) {
	console.log('Insufficient funds.')
}


// If... else statement

if (balance < withdrawl) {
	// Happens if true
	console.log('Insufficient funds.')
} else {
	// Happens if false
	balance = balance - widthdrawl;

	dispenseMoney();
}

// If... else if... else

if (balance <= 0) {
  console.log('Insufficient funds.')
} else if (balance < withdrawl) {
  overdraft();
} else {
  balance = balance - widthdrawl;

	dispenseMoney();
}


// Switch Statement

switch (dog) {
	case 'Korben': 
		favoriteToy = 'stuffed bee';
		break;

	case 'Tugboat':
		favoriteToy = 'ball'
		break;

	case 'Beau':
		favoriteToy = 'tug rope';
		break;

	default:
		favoriteToy = 'bone';
		break;
}


function calculator(num1, num2, operator) {
	var calc;

	switch (operator) {
		case '+':
			calc = num1 + num2;
			break;

		case '-':
			calc = num1 - num2;
			break;

		case '*':
			calc = num1 * num2;
			break;

		case '/':
			calc = num1 / num2;
			break
	}

	return calc;
}

console.log( calculator(3, 5, '+') );



// Truthy & Falsy 

function sayHello(greeting) {
	if (!greeting) {
		console.log('Hello!');
	} else {
		console.log('Greeting');
	}
}