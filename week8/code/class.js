var oldWay = document.getElementById('element');

// $('#id')

// $('.class')

// $('div')

// $('li#first.red')

// $('li.left-side.red')

// $('ul > li')
// $('ul li')

document.getElementById('element').innerHTML = 'Hey'

$('#first').animate({
	'font-size': '20px',
	'color': 'lightcoral',
	'border': '3px solid lightblue',
	'margin-top': '100px'
}, 1000);

$element.prepend('<h1 id="second">Hey</h1>');

$('#first').removeClass('pink');

$list.each(function() {
	$(this).append('Hey');
});

$list.on('click', function(e) {
	$(e.target).toggleClass('pink');
});

$menu.on('mouseover', function(e) {
	$(e.target).addClass('active')
});

$menu.on('mouseout', function(e) {
	$(e.target).removeClass('active');
});