/**Spotlight section JS**/

const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=61.10566&lon=-149.84357&units=imperial&exclude=minutely,hourly&appid=c3cede631c229fe404795865753b8a97"

let templecard = document.querySelector('#weather');
let spaceFilled = 0;

fetch(apiURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const weather = jsonObject['daily'];
        shuffledList.forEach(spaces)
    });

    function spaces(house) {
        if (spaceFilled == 3)
            return;
        else {
            if (spaceFilled == 0) {
                let emptySpace = document.querySelector('#templeSpotlight');
                displayTemples(house, emptySpace);
            }
            if (spaceFilled == 0) {
                let emptySpace = document.querySelector('#templeSpotlight');
                displayTemples(house, emptySpace);
            }
            if (spaceFilled == 0) {
                let emptySpace = document.querySelector('#templeSpotlight');
                displayTemples(house, emptySpace);
            }
            spaceFilled++;
        }
    }

    function displayTemples(temples, index) {
        //variables
        let cards = document.createElement('section');
        let h2 = document.createElement('h2');
        let picture = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');

        cards.setAttribute('class', `spot${index}`);

        h2.textContent = `${temples.name}`;
        address.textContent = `Address: ${temples.address}`;
        phone.textContent = `Phone: ${temples.phone}`;
        website.innerhtml = `Website: <a href="${temples.url}">${temples.url}</a>`;

        //Temple pictures
        picture.setAttribute('src',temples.image);
        picture.setAttribute('loading', 'lazy');
        picture.setAttribute('alt', `${temples.name}`);

        cards.appendChild(h2);
        cards.appendChild(picture);
        cards.appendChild(phone);
        cards.appendChild(address);
        cards.appendChild(website);

        templecard.prepend(cards);
    }