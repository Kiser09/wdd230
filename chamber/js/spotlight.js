//**This is the Spotlight JS for gold and silver membership **/

const requestURL = 'https://kiser09.github.io/wdd230/chamber/data/data.json';

const spaceFilled = 0

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const localbusiness = jsonObject['localbusiness'];
        const spotlightBusiness = localbusiness.filter( x => (x.membership === 'gold' || x.membership === 'silver'));
        const shuffledList = spotlightBusiness.sort((a, b) => 0.5 - Math.random());
        shuffledList.forEach(spaces)
    });

    function spaces(biz) {
        if (spaceFilled == 3)
            return;
        else {
            if (spaceFilled == 0) {
                let bizCard = document.querySelector('#spotlight1');
                buildSpotlight(biz, bizCard);
            }
            if (spaceFilled == 1) {
                let bizCard = document.querySelector('#spotlight2');
                buildSpotlight(biz, bizCard);
            }
            if (spaceFilled == 2) {
                let bizCard = document.querySelector('#spotlight3');
                buildSpotlight(biz, bizCard);
            }
            spaceFilled++;
        }
    } 

    function buildSpotlight(company, bizCard) {
        let h4 = document.createElement('h3');
        let img = document.createElement('img');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let site = document.createElement('p');

        //text for businesses
        h4.textContent = `${company.name}`;
        address.textContent = `${company.address}`;
        phone.textContent = `${company.phone}`;
        site.innerHTML = `<a href="${company.wevbsite}">${company.website}</a>`;

        //image js
        img.setAttribute('src', company.logo);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('alt', `${company.name} logo`);

        bizCard.appendChild(h4);
        bizCard.appendChild(img);
        bizCard.appendChild(phone);
        bizCard.appendChild(address);
        bizCard.appendChild(site);
        
    }