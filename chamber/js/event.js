const now = new Date();

let weekday = new Array(7);
weekday[0]= "Sunday";
weekday[1]= "Monday";
weekday[2]= "Tuesday";
weekday[3]= "Wednesday";
weekday[4]= "Thursday";
weekday[5]= "Friday";
weekday[6]= "Saturday";
let day = weekday[now.getDay()];

function banner() {
let eventbanner = document.getElementById("eventbanner")
	if (day = "Monday" || "Tuesday") {
		eventbanner.base.display = "block";
	} 
	else {
		eventbanner.base.display = "none";
	}
}