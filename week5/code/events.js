var el = document.getElementById('select');

el.addEventListener('click', function(e) {
	console.log('Hello!');

	console.log(e.target.val);
});




var button = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function randomColor() {
	var randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';

	return randomColor;
}

button.addEventListener('click', function(e) {
	console.log(e.target.style);

	document.body.style.backgroundColor = randomColor();
});




function addElement() {
	document.getElementById('select').innerHTML += '<br>Hello!<br>'
}

el.addEventListener('click', function(e) {
	addElement();
});




// Add to multiple elements
var els = document.querySelectorAll('.square');

for (var i = 0; i < els.length; i++) {
  els[i].addEventListener('mouseover', turnRed);
  els[i].addEventListener('mouseout', turnBlue);
}

function turnRed() {
	for (var i = 0; i < els.length; i++) {
    els[i].classList.remove('blue');
    els[i].classList.add('red');
  }
}

function turnBlue() {
	for (var i = 0; i < els.length; i++) {
    els[i].classList.remove('red');
    els[i].classList.add('blue');
  }
}

//e = event object. All functions are passed and event object that provides information about the event itself. Call by naming the argument.

var els = document.querySelectorAll('.square');

for (var i = 0; i < els.length; i++) {
  els[i].addEventListener('mouseover', function(e) {
  	console.log(e);

  	turnRed(e.target);
  });

  els[i].addEventListener('mouseout', function(e) {
  	turnBlue(e.target);
  });

  els[i].addEventListener('click', function(e) {
  	turnOrange(e.target);
  });
}

function turnRed(element) {
  element.style.backgroundColor = 'red';
}

function turnBlue(element) {
  element.style.backgroundColor = 'blue';
}

function turnOrange(element) {
	element.style.backgroundColor = 'orange';
}



// Override standard behavior (make a link not navigate to a new page)
e.preventDefault();


// Stop event on child from happening to parent
e.stopPropagation();


// Get value
var value = document.getElementById('text-field-id').value;