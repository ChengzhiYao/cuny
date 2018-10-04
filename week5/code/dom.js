// Locating Elements

// Get an element using their ID attribute
var id = document.getElementById('one');
console.log(id);



/* 
	NodeLists look like arrays and are accessed the same way (i.e. NodeList[0] get the first node), but have a couple of additional methods to work with.
*/

// Get a NodeList of all elements with the same class attribute
var classes = document.getElementsByClassName('red');
// Gets all elements with a class of 'red'
console.log(classes);


// Get an array of all elements of the same type
var tags = document.getElementsByTagName('li');
// Gets all elements inside of <li> tags
console.log(tags);


// Can use any CSS selector (id, class, tag). Only gets the first instance.
var query = document.querySelector('#two'); 

// Will only grab the first element with the class of "red"
var query = document.querySelector('.red'); 

// Will only grab the first div on the page
var query = document.querySelector('div'); 



// Can use any CSS selector. Gets all instances.

var queryAll = document.querySelectorAll('li.red');
// Will get an array of every <li> with a class of red
console.log(queryAll);

/* 
	Note:
	querySelector is a bit more versitile. getElementById only gets IDs, getElementsByClassName only gets classes, and getElementsByTagName gets all tags. querySelector and querySelectorAll can get all three (and they are easier to write);

	In CSS, to apply a style to an ID you need a #:
		
		CSS:
		#one { background-color: red; }

	Just like CSS, you need to include the # so querySelector knows it's looking for an ID:

		JS:
		document.querySelector('#two'); 
	
	Just like CSS, classes need to start with a . and tags don't need anything:

		CSS: 
		div { font-size: 12px; }
		.green { color: green; }

		JS:
		document.querySelectorAll('div'); 
		document.querySelectorAll('.green'); 

	You can also string together classes, ids, and tags:
	
		document.querySelectorAll('div.green'); 

	This will select all divs with the class "green". If you have an li with the class "green", that will not be selected.
*/




// Traversing the tree

// Selects element's parent (one step up on the tree)
var parent = id.parentNode();

// Selects element before or after at the same level of the tree
var nextSibling = id.nextSibling();
var prevSibling = id.previousSibling();

// Selects the first/last child inside a parent element
var firstChild = id.firstChild();
var lastChild = id.lastChild();




// Manipulating the DOM


/* 
	Another method to append new elements to the DOM: 
*/

// 1. Create element reference as variable
var el = document.createElement('li');
/* 
	This doesn't add an <li> to your page yet. It acts as a blueprint, creating a reference to an <li> that will exist in the future. 

	It may sound weird, but we are telling JavaScript that the variable el will equal an <li> that does not exist yet, but will exist in the future.

	If we were making a T-Shirt, think of this as creating the pattern for the body. 
*/

// Creates text to put into the element
var text = document.createTextNode('Hello');
/* 	
	Just like el, this doesn't create text, but gives JS a blueprint of what the text will be in the future. 

	This is like making the pattern for our T-Shirt sleeves.
*/ 

// Attach text to element
el.appendChild(text);
/*
	This attaches the text blueprint to the el blueprint to make a larger blueprint of all parts.

	This is like attaching the sleeve pattern to the body pattern to create a whole shirt pattern.
*/

// Select parent
var parent = document.getElementById('parent');

// Append child
parent.appendChild(el);
/*
	This takes the blueprint you've made and renders it. <li>Hello</li> will now be added to your HTML.

	This is like taking your pattern to a shirt factory and finally making a real T-Shirt!

	The benefit of this method of appending is that you have the variable 'el' with is a blueprint or pattern for a specific element. Just like a blueprint or pattern, it can be used to make more elements just like it!
*/



// Using this method in a loop:

var greetings = ['Hello!', 'Yo!', 'Hi!'];

var length = greetings.length;

for (i = 0; i < length; i++) {
	// Create your element blueprint
	var el = document.createElement('li');

	// Create your text blueprint
	var text = document.createTextNode( greetings[i] );

	// Put your blueprints togther
	el.appendChild(text);	

	// Get your parent container (where you want to element to live)
	var parent = document.getElementById('parent');

	// Use your blueprint to build that element inside of the parent container
	parent.appendChild(el);

	// Adds the class 'red' to the <li> you just created
	document.getElementsByTagName('li').item(i).setAttribute('class', 'red');
}


