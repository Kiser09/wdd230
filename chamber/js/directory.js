const requestURL = 'https://kiser09.github.io/wdd230/chamber/data/data.json';

const card = document.querySelector('.localbusiness-cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const localbusiness = jsonObject['localbusiness'];
        localbusiness.forEach(displayBusiness);
    });

    function displayBusiness(localbusiness) {
        //variables 
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let logo = document.createElement('img');
        let addr = document.createElement('p');
        let tel = document.createElement('p');
        let website = document.createElement('p')

        //text
        h2.textContent = `${localbusiness.name}`;
        addr.textContent = `Address: ${localbusiness.address}`;
        tel.textContent = `Phone: ${localbusiness.phone}`;
        website.textContent = `Web address: ${localbusiness.website}`

        //portrait/img
        logo.setAttribute('src', localbusiness.logo);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('alt', `${localbusiness.name} logo`);

        card.appendChild(h2);
        card.appendChild(tel);
        card.appendChild(addr);
        card.appendChild(website);
        card.appendChild(logo);

        document.querySelector('div.cards').appendChild(card);
    }