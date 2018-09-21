// Comparison Operators

var value = 5;


// == is equal to

value == 5; //true

value == '5' // true

value == 8; // false


// != is not equal

value != 5; // false

value != 8; // true


// === strict equals -> identical value and type

value === 5; // true

value === '5'; // false


// !== strict does not equal -> identical value and type

value !== 5; // false

value !== '5'; // true

value !== 8; // true


// > greater than

value > 5; // false

value > 8; // false

value > 1; // true


// < less than

value < 5; // false

value < 8; // true

value < 1; // false


// >= greater than or equal to

value >= 5; // true

value >= 8; // false

value >= 1; // true


// <= less than or equal to

value <= 5; // true 

value <= 8; // true

value <= 1; // false





var pass = 65,
		score = 90;

var hasPassed = score >= passed;

console.log( 'Test Passed: ' + hasPassed ); // Test Passed: true





var score1 = 90,
		score2 = 95;

var highScore1 = 75,
		highScore2 = 95;

var comparison = (score1 + score2) > (highScore1 + highScore2);

console.log( 'New high score: ' + comparison ); // New high score: true





// Logical Operators

// && logical and

( (5 > 3) && (1 < 3) ); // true

( (5 < 3) && (1 < 3) ); // false

( (5 < 3) && (1 > 3) ); // false


// || logical or

( (5 > 3) || (1 < 3) ); // true

( (5 < 3) || (1 < 3) ); // true

( (5 < 3) || (1 > 3) ); // false


// ! logical not
!(5 > 3); // false

!(5 < 3); // true


(5 > 10) && (1 < 10) // First condition is false. Expression cannot be true, so code will stop evaluating there.

(5 < 10) || (1 > 10) // First condition is true. Expression is true, so code will stop evaluating there.