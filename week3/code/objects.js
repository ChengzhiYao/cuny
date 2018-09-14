// ========== Objects ==========

// Variables -> properties
// Functions -> Methods

// Structure
var object = {
	key: value
};





var dog = {
	name: 'Korben',
	breed: 'Shiba Inu',
	age: 4,
	favoriteToys: ['stuffed bee', 'squeaky ball', 'chew bone'],
	goodBoy: function() {
		return true;
	}
}

var dogName = dog.name, // 'Korben'
		isGoodBoy = dog.goodBoy; // true


var dogName = dog['name'], // 'Korben'
		isGoodBoy = dog['goodBoy']; // true






// adding a property
dog.weight = 32;

// remove a property
delete dog.weight;





// Object constructor
function Dog(name, breed, age, favoriteToys) {
	this.name = name;
	this.breed = breed;
	this.age = age;
	this.favoriteToys = favoriteToys;
}

var korben = new Dog('Korben', 'Shiba Inu', 4, ['stuffed bee', 'squeaky ball', 'old sock']),
		tugboat = new Dog('Tugboat', 'Pit Bull', 3, ['stuffed dragon', 'tug rope']),
		beau = new Dog('Beau', 'Beagle Mix', 9, ['frisbee', 'rubber duck', 'tennis ball'])




// Arrays of objects
var dogs = [
	{ name: 'Korben', breed: 'Shiba Inu', age: 4 },
	{ name: 'Tugboat', breed: 'Pit Bull', age: 3 },
	{ name: 'Beau', breed: 'Beagle Mix', age: 9 }
];