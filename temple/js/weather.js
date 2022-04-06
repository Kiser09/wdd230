/*Weather API for section*/
const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=c3cede631c229fe404795865753b8a97`

anchorage lat = 61.10592
anchorage lon = -149.83951

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.querySelector('#temp').textContent = jsObject.main.temp.toFixed(1);
    });