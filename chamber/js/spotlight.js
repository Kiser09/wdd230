//**This is the Spotlight JS for gold and silver membership **/

const requestURL = 'https://kiser09.github.io/wdd230/chamber/data/data.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const localbusiness = jsonObject['localbusiness'];
        const spotlightBusiness = localbusiness.filter( x => (x.membership === "gold" || x.membership === "silver"));
        spotlightBusiness.forEach(buildBusiness)
    });

    function buildSpotlight(company) {
        let card = document.createElement('section');
        let h4 = document.createElement('h3');
        let img = document.createElement('img');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let site = document.createElement('p');

        //text for businesses
        h4.textContent = `${company.name}`;
        address.textContent = `${company.address}`;
        phone.textContent = `${company.phone}`;
        site.innerHTML = `<a href="${company.website}">${company.website}</a>`;

        //image js
        img.setAttribute('src', company.logo);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('alt', `${company.name} logo`);

        card.appendChild(h4);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(site);
        card.appendChild(img);
    }

    function randomSpawn(){
        let openSpot = 0;
        randomCard = Math.floor(Math.random() * buildSpotlight().length);

        select_card = buildSpotlight()[randomCard]

        if (openSpot == 0) {
            let cardAd = document.querySelector('#spotlight1');
            buildSpotlight(company, cardAd);
        }
    }