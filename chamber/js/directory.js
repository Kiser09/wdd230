const requestURL = 'https://kiser09.github.io/wdd230/chamber/data/data.json';

const cards = document.querySelector('.localbusiness-cards');
const lists = document.querySelector('.localbusiness-list');

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

        //image
        pic.setAttribute('src', local.logo);
        pic.setAttribute('loading', 'lazy');
        pic.setAttribute('alt', `${local.name} logo`);

        card.appendChild(h2);
        card.appendChild(tel);
        card.appendChild(addr);
        card.appendChild(website);
        card.appendChild(pic);

        cards.prepend(card);
    }


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const localbusiness = jsonObject['localbusiness'];
        localbusiness.forEach(displayList);
    });

    function displayList (locallist) {
        //business rows
        let row = document.createElement('tr');
        let name = document.createElement('td');
        let address = document.createElement('td');
        let tel = document.createElement('td');
        let website = document.createElement('td');

        name.textContent = `${locallist.name}`;
        address.textContent = `${locallist.address}`;
        tel.textContent = `${locallist.phone}`;
        website.textContent = `${locallist.website}`;

        row.appendChild(name);
        row.appendChild(address);
        row.appendChild(tel);
        row.appendChild(website);

        lists.appendChild(row)
    }