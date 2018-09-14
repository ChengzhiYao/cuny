// ========== Functions ==========
var dog = 'Korben';

function goodBoy() {
	console.log (dog);
}

goodBoy(); // logs 'Korben'





function getArea(width, height) {
	return width * height;
}

getArea(3, 5); // 15




var width = 3,
		height = 5;

getArea(width, height); // 15





var wallOne = getArea(3, 5),
		wallTwo = getArea(2, 4);

function getArea(width, height) {
	var area = width * height;
	return area;
}

console.log(wallOne) // 15
console.log(wallTwo) // 8





function getSize(width, height, depth) {
	var area = width * height,
			volume = width * height * depth;

	var sizes = [area, volume];

	return sizes;
}

var objSizes = getSize(3, 2, 3),
		objArea = getSize(3, 2, 3)[0],
		objVolume = getSize(3, 2, 3)[1];

console.log(objSizes) // [6, 18]
console.log(objArea) // 6
console.log(objVolume) // 18