// Scope:

// ========== Global Scope ==========

// the scope is by default global
var dog = 'Korben';

console.log(dog); // logs 'Korben'

function goodBoy() {
   console.log(dog); // 'dog' is accessible here and everywhere else
}

goodBoy(); // logs 'Korben'





// ========== Local Scope ==========

// This is the global scope

function someFunction() {
    // Local Scope #1

    function someOtherFunction() {
        // Local Scope #2
    }
}

// Global Scope

function anotherFunction() {
    // Local Scope #3
}

// Global Scope





var myFunction = function () {
  var dog = 'Korben';

  console.log(dog); // Wright
};

// Uncaught ReferenceError: dog is not defined
console.log(dog);





// ========== Lexical Scope ==========

// Scope A
var myFunction = function () {
  // Scope B
  var dog = 'Korben'; // defined in Scope B

  var myOtherFunction = function () {
    // Scope C: `dog` is accessible here!
  };
};





var myFunction = function () {
  var dog = 'Korben';

  var myOtherFunction = function () {
    console.log(dog + ' is a good boy!');
  };

  console.log(dog);

  myOtherFunction(); // call function
};

// Will then log out:
// `Korben`
// `Korben is a good boy!





var dog = 'Korben';

var scope1 = function () {
  // name is available here
  var scope2 = function () {
    // name is available here too
    var scope3 = function () {
      // name is also available here!
    };
  };
};





// dog = undefined
var scope1 = function () {
  // dog = undefined
  var scope2 = function () {
    // dog = undefined
    var scope3 = function () {
      var dog = 'Korben'; // locally scoped
    };
  };
};





// ========== this ==========

// this defaults to window object
function windowSize() {
	var width = this.innerWidth(),
			height = this.innerHeight();

	return [height, width];
}

// but refers to whatever object invoked it
var person = {
    firstName: 'Wright',
    lastName: 'Rickman',
    fullName: function () {
      ​// Notice we use "this" just as we used "he" in the example sentence earlier?:
      console.log(this.firstName + ' ' + this.lastName);

    	​// We could have also written this:​
      console.log(person.firstName + ' ' + person.lastName);
    }
}





