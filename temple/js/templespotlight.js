/**Spotlight section JS**/

const requestURL = 'https://kiser09.github.io/wdd230/temple/data/temples.json';

let templecard = document.querySelector('#templeSpotlight');
let spaceFilled = 0;

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temple = jsonObject['temples'];
        const shuffleList = temple.sort((a, b) => 0.5 - Math.random());
        shuffleList.forEach(spaces);
    });

    function spaces(house) {
        if (spaceFilled == 1)
            return;
        else {
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
        let list1 = document.createElement('ol');
        let history = document.createElement('li');
        let list2 = document.createElement('ol');
        let closure = document.createElement('li');
        let website = document.createElement('p');

        cards.setAttribute('class', `spot${index}`);

        h2.textContent = `${temples.name}`;
        address.textContent = `Address: ${temples.address}`;
        phone.textContent = `Phone: ${temples.phone}`;
        website.innerhtml = `Website: <a href="${temples.url}">${temples.url}</a>`;
        history.textContent = `History: ${temples.history}`

        //Temple pictures
        picture.setAttribute('src',temples.image);
        picture.setAttribute('loading', 'lazy');
        picture.setAttribute('alt', `${temples.name}`);

        cards.appendChild(h2);
        cards.appendChild(picture);
        cards.appendChild(phone);
        cards.appendChild(address);
        cards.appendChild(website);
        list1.appendChild(history);
        list2.appendChild(closure);
        cards.appendChild(list1);

        templecard.prepend(cards);
    }