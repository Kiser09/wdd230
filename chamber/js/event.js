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

if (day = "Monday" || "Tuesday") {
	document.getElementById("eventbanner").innerHTML = eventbanner.base.display = "block";
} 
else {
	eventbanner.base.display = "none";
}