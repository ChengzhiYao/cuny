var magno = {
	name: "Magno",
	price: 20,
	discount: 20,
	description: "A 2mm lead mechanical pencil unlike any other. It offers lead position accuracy far beyond other pencils due to the free-moving magnet concealed within its premium grade aluminium body.", 
	discountedprice: function() {	
		var offerprice = this.price * (1-0.2);
		return offerprice;
	}
};

console.log(magno);

magno.image = "magno.gif";

var magnoName, price, specialRate, description;

var magnoName = document.getElementById('magno');
magnoName.textContent = magno.name;
var price = document.getElementById("price");
price.textContent = '$' + magno.price;
var specialRate = document.getElementById("specialRate");
specialRate.textContent = '$' + magno.discountedprice();
var description = document.getElementById("description");
description.textContent = magno.description;

var expiryMsg;
var today;
var elEnds;

function offerExpires(today) {
	var weekFromToday, day, date, month, year, dayNames, monthNames;
	weekFromToday = new Date ((today.getTime()+14) + 7 * 24 * 60 * 60 * 1000);
	dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
	day = dayNames [weekFromToday.getDay()];
	date = weekFromToday.getDate();
	month= monthNames[weekFromToday.getMonth()];
	year = weekFromToday.getFullYear();
	expiryMsg = 'offer expires in two week!'
	expiryMsg += ' <br />' + day + ' <br />(' + month + ' ' + date + ',' + ' ' + year + ')';
	return expiryMsg;
}

today = new Date();
elEnds = document.getElementById('offerEnds');
elEnds.innerHTML = offerExpires(today);




