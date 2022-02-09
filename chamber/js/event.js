const now = new Date();

var weekday = new Array(7);
weekday[0]= "Sunday";
weekday[1]= "Monday";
weekday[2]= "Tuesday";
weekday[3]= "Wednesday";
weekday[4]= "Thursday";
weekday[5]= "Friday";
weekday[6]= "Saturday";
var day = weekday[now.getDay()];

	if (day = "Monday" || "Tuesday") {
		document.querySelector('#eventbanner').style.display = 'block';
	} 
	else {
		document.querySelector('#eventbanner').style.display = 'none';;
	}