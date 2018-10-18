$(document).ready(function () {
	var $menu = $('li.list__item');

	$menu.on('click', function(e) {
		var $target = $(e.target);

		if ($target.text() === 'Contact') {
			$('.contact.sublist').slideToggle(500);
		} else {
			$('.contact.sublist').slideUp(500);
		}
	});

	var $submenu = $('li.sublist__item');

	$submenu.on('click', function(e) {
		$('.contact-info').hide();

		var $target = $(e.target);

		var dataType = $target.data('type');

		$('.' + dataType).fadeIn(300);
	});
});