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

    function displayBusiness(local) {
        //variables 
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let pic = document.createElement('img');
        let addr = document.createElement('p');
        let tel = document.createElement('p');
        let website = document.createElement('p')

        //text
        h2.textContent = `${local.name}`;
        addr.textContent = `Address: ${local.address}`;
        tel.textContent = `Phone: ${local.phone}`;
        website.innerHTML = `Website: <a href="${local.website}">${local.website}</a>`;

        //portrait/img
        pic.setAttribute('src', local.logo);
        pic.setAttribute('loading', 'lazy');
        pic.setAttribute('alt', `${local.name} logo`);

        card.appendChild(h2);
        card.appendChild(tel);
        card.appendChild(addr);
        card.appendChild(website);
        card.appendChild(pic);

        document.querySelector('div.localbusiness-cards').appendChild(card);
    }

    function listBuisness(table) {

    }