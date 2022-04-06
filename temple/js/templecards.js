const requestURL = 'https://kiser09.github.io/wdd230/temple/data/temples.json';

const templecard = document.querySelector('.templecards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temple = jsonObject['temples'];
        temple.forEach(displayTemples);
    });

    function displayTemples(temples) {
        //variables
        let cards = document.createElement('section');
        let h2 = document.createElement('h2');
        let picture = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let list1 = document.createElement('ol');
        let session = document.createElement('li');
        let list2 = document.createElement('ol');
        let closure = document.createElement('li');
        let website = document.createElement('p');

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