// Loops

// For loop

for (i = 0; i < 3; i++) {
	console.log(i);
}


var dogs = ['Korben', 'Tugboat', 'Beau'],
		length = dogs.length;

for (i = 0; i < length; i++) {
	console.log( dogs[i] );
}


var dogs = ['Korben', 'Tugboat', 'Beau'],
		length = dogs.length;

for (i = 0; i < length; i++) {
	var dogElement = document.getElementById( 'dog' + i );

	dogElement.textContent = dogs[i];
}

// innerHTML vs. textContent

var example = document.getElementById('exampleId');

// textContent = text

example.textContent = '<a href="https://google.com">google</a>'; // output = <a href="http://google.com">google</a>

// innerHTML = parses as HTML (can be text or code)

example.innerHTML = '<a href="https://google.com">google</a>'; // output = actual link to Google.