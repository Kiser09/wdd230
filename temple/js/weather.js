/*Weather API for the weather section*/
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=61.10566&lon=-149.84357&units=imperial&exclude=minutely,hourly&appid=c3cede631c229fe404795865753b8a97"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
/*Current Day*/
    /*This document selector gathers the temp from the API and delievers the temp into the html*/ 
        document.querySelector('#temp').textContent = jsObject.current.temp.toFixed(1);

        const desc = jsObject.current.weather[0].description;
        /*Sets page img alt attribute to the description variable*/
        document.querySelector('#weatherIcon').setAttribute('alt', desc);

        /*Weather Condition tag*/
        document.querySelector('#condition').textContent = desc;

        /*The following variable and document selector are to display the icon from the API to the html page.*/
        const iconsrc= `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;

        document.querySelector('#weatherIcon').setAttribute('src', iconsrc);
    
    /*Day 2*/

    document.querySelector('#temp2').textContent = jsObject.daily.temp[0].day.toFixed(1);

        const desc2 = jsObject.current.weather[0].description;
        /*Sets page img alt attribute to the description variable*/
        document.querySelector('#weatherIconday2').setAttribute('alt', desc2);

        /*Weather Condition tag*/
        document.querySelector('#condition2').textContent = desc2;

        /*The following variable and document selector are to display the icon from the API to the html page.*/
        const iconsrc2= `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;

        document.querySelector('#weatherIconday2').setAttribute('src', iconsrc2);

    /*Day 3*/
    
    });

