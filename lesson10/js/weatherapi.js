const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=fairbanks&units=imperial&appid=c3cede631c229fe404795865753b8a97";
fetch(apiURL)
/*Grabs thee information from the web and changes it into a json item for use. Then displays the information through the console*/
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    /*Document Selector for the current-temp id in the html doc*/
    document.querySelector('#current-temp').textContent = jsObject.main.temp.toFixed(1);/*.toFixed(1) rounds the temp to the nearest tenths place indicated by the 1*/

/*This section deals with the icon and icon source url*/
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    /* the 0 behind weather indicated the index we want to pull from from the array*/
    const desc = jsObject.weather[0].description;
    /*Icon URL*/
    document.querySelector('#icon-src').textContent = iconsrc;
    /*Icon Image which is in the image html tag*/
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    /*Alternate text for the image*/
    document.querySelector('#weathericon').setAttribute('alt', desc);
    /*figcaption displaying image description*/
    document.querySelector('figcaption').textContent = desc;
  });