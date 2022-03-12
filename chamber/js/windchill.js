/*Weather API for the weather section*/
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=north+pole,alaska&units=imperial&appid=c3cede631c229fe404795865753b8a97"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    /*This document selector gathers the temp from the API and delievers the temp into the html*/ 
        document.querySelector('#temp').textContent = jsObject.main.temp.toFixed(1);

    /*Document Selector gathers the temp from Fetch and displays into the html doc. Windchill calculation follows the wind doc selector.*/
        document.querySelector('#wind').textContent = jsObject.wind.speed.toFixed(0);

        /*Wind Chill function for the weather section*/
        const t = jsObject.main.temp.toFixed(1);
        const w = jsObject.wind.speed;

if(t <= 50 && w > 3) {
    const windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(w,0.16) + 0.4275 * t * Math.pow(w,0.16)
    document.querySelector("#windchill").innerHTML = `${Math.round(windchill)}`;
}
else {
    document.querySelector("#windchill").innerHTML = "N/A"
}

        const desc = jsObject.weather[0].description;
        /*Sets page img alt attribute to the description variable*/
        document.querySelector('#weathericon').setAttribute('alt', desc);

        /*Weather Condition tag*/
        document.querySelector('#condition').textContent = desc;

        /*The following variable and document selector are to display the icon from the API to the html page.*/
        const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

        document.querySelector('#weathericon').setAttribute('src', iconsrc);
    });

