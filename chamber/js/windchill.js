/*Weather API for the weather section*/
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=north+pole,alaska&units=imperial&appid=c3cede631c229fe404795865753b8a97"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    /* */ 
        document.querySelector('temp').textContent = jsObject.main.temp.toFixed(1);

        document.querySelector('#current-temp').textContent = jsObject.main.temp.toFixed(1);
    });

/*Wind Chill function for the weather section*/
const t = parseInt(document.querySelector("#temp").textContent);
const w = parseInt(document.getElementById("wind").textContent);

if(t <= 50 && w > 3) {
    const windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(w,0.16) + 0.4275 * t * Math.pow(w,0.16)
    document.querySelector("#windchill").innerHTML = `${Math.round(windchill)}`;
}
else {
    document.querySelector("#windchill").innerHTML = "N/A"
}