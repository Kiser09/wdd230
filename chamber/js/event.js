const weekday = new Date()
const day = weekday.getDay()

if(day.getDay() === 2 || day.getDay() === 1) {
	const banner = document.querySelector("#meeting");
	banner.style.display = "block";
}