$(document).ready(function () {
	$(window).scroll(function(e) {
		parallax();
	});

	function parallax() {
		var scroll = $(window).scrollTop();

		$('.planet').css({
			'top': (scroll * 0.25) + 'px'
		});

		$('.debris').css({
			'top': (scroll * 0.50) + 'px'
		});

		$('.astronaut').css({
			'top': (scroll * 0.75) + 'px'
		});
	}
});