$(window).scroll( function(e) {
	$('.js-fader').css({
		'opacity': 1 - ($(window).scrollTop() / 1000)
	});

	$('.nav-button').on('click', function(e) {
		e.preventDefault();

		var $target = $(e.target),
			value = $target.text();

		var offset = $('.color-bar[data-color="' + value + '"]').offset();

		var navHeight = $('nav').height();

		$('body').animate({
			scrollTop: offset.top - navHeight
		}, 500);
	});

	var scrollTop = $(window).scrollTop(),
			redTrigger = $('.color-bar[data-color="Red"]').offset().top - 500,
			greenTrigger = $('.color-bar[data-color="Green"]').offset().top - 500,
			blueTrigger = $('.color-bar[data-color="Blue"]').offset().top - 500;

		if (scrollTop > redTrigger ) {
			$('.color-bar[data-color="Red"]').animate({
				'left': '0px'
			}, 750);
		} 

		if ( scrollTop > greenTrigger) {
			$('.color-bar[data-color="Green"]').animate({
				'left': '0px'
			}, 750);
		}

		if ( scrollTop > blueTrigger) {
			$('.color-bar[data-color="Blue"]').animate({
				'left': '0px'
			}, 750);
		}
});