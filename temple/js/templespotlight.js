/**Spotlight section JS**/

const requestURL = 'https://kiser09.github.io/wdd230/temple/data/temples.json';

let spotlight1 = document.querySelector('#spotlight1');
let section = document.querySelector('#spotlight')
let spaceFilled = 0;

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const temples = jsonObject['temples'];
        const shuffledList = temples.sort((a, b) => 0.5 - Math.random());
        shuffledList.forEach(spaces)
    });

    function spaces(temple) {  // Create elements to add to the document
        if (spaceFilled == 1)
            return;
        else {
            if (spaceFilled == 0) {
                let card = document.querySelector('#spotlight1');
                buildSpotlight(temple, card);
            }
            spaceFilled++;
        }
    } 

    function buildSpotlight(temple, index) {
        let templeCard = document.createElement('section')
        let h3 = document.createElement('h3');
        let img = document.createElement('img');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let list = document.createElement('ul');
        let li = document.createElement('li');
        let site = document.createElement('p');

        templeCard.setAttribute('class', `spot${index}`);

        //text for businesses
        h3.textContent = `${temple.name}`;
        address.textContent = `${temple.address}`;
        phone.textContent = `${temple.phone}`;
        li.textContent = `${temple.history}`
        site.innerHTML = `<a href="${temple.url}">${company.url}</a>`;

        //image js
        img.setAttribute('src', temple.image);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('alt', `${temple.name}`);
        img.setAttribute('class', 'templePicture');

        templeCard.appendChild(h4);
        templeCard.appendChild(img);
        templeCard.appendChild(phone);
        templeCard.appendChild(address);
        templeCard.appendChild(list);
        templeCard.appendChild(site);
        
        list.appendChild(li);
        section.appendChild(templeCard);
    }