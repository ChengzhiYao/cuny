var kickstarter = {
	name: 'Horizon Zero Dawn - The Board Game',
	description: 'Hunt in a distant future where machines roam wild and mankind is no longer the dominant species. In partnership with SIEE and Guerrilla.',
	img: 'img/hzd-game.jpg',
	link: 'https://www.kickstarter.com/projects/steamforged/horizon-zero-dawntm-the-board-game?ref=discovery',
	pledged: 919174,
	backers: 6709,
	timeLeft: function() {
		var _second = 1000,
     		_minute = _second * 60,
     		_hour = _minute * 60,
     		_day = _hour * 24;

    	var timer;

		var end = new Date('09/28/2018 2:00 PM'),
				now = new Date();

		var distance = end - now;

		var days = Math.floor(distance / _day),
        hours = Math.floor((distance % _day) / _hour),
        minutes = Math.floor((distance % _hour) / _minute),
        seconds = Math.floor((distance % _minute) / _second);

    	return [days, hours, minutes, seconds];
	},
	pledgeLevels: [{
			name: 'LIMITED EDITION SEEKER PLEDGE',
			price: 129,
			includes: [ '- Horizon Zero Dawn: The Board Game (Limited Edition KS Version)', 
			 	'- The Sacred Land Expansion',
				'- The Lawless Badlands Expansion',
				'- Kickstarter Exclusive Aloy',
				'- All Unlocked Stretch Goals' ],
			availible: true
		},
		{
			name: 'EARLY BIRD LIMITED EDITION PLEDGE',
			price: 123,
			includes: [ '- Horizon Zero Dawn: The Board Game (Limited Edition KS Version)', 
			 	'- The Sacred Land Expansion',
				'- The Lawless Badlands Expansion',
				'- Kickstarter Exclusive Aloy',
				'- All Unlocked Stretch Goals' ],
			available: false
		}
	]
}

var container = document.getElementById('pledge-container'),
		length = kickstarter.pledgeLevels.length;

for (i = 0; i < length; i++) {
	container.innerHTML += '<h1 class="red">' + kickstarter.pledgeLevels[i].name + '</h1>';

	container.innerHTML += '<h2>$' + kickstarter.pledgeLevels[i].price + '</h2>';

	/* 
		We still need i to go through the pledgeLevels array. If we use i in the second loop, it will redeclare (overwrite) i.

		j is standard convention (j is the next letter after i)
	*/

	for (j = 0; j < kickstarter.pledgeLevels.length; j++) {
		console.log(kickstarter.pledgeLevels[i].includes[j]);

		container.innerHTML += '<h3>' + kickstarter.pledgeLevels[i].includes[j] + '</h3>';
	}
}

