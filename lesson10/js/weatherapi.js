const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=fairbanks&units=imperial&appid=c3cede631c229fe404795865753b8a97";

fetch(apiURL)
    .then((response) => response.json())
    .then ((jsObject) => {
        console.log(jsObject);
    });