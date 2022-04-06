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
        let services = document.createElement('p');
        let sessions = document.createElement('p');
        let baptism = document.createElement('p');
        let endowment = document.createElement('p');
        let initiatory = document.createElement('p');
        let closure = document.createElement('p')
        let history = document.createElement('ol');
        let announcement = document.createElement('li');
        let openHouse = document.createElement('li');
        let dedication = document.createElement('li');
        let website = document.createElement('p');

        h2.textContent = `${temples.name}`;
        address.textContent = `Address: ${temples.address}`;
        phone.textContent = `Phone: ${temples.phone}`;
        services.textContent = `Services: ${temples.services}`;
        sessions.textContent = `Sessions: ${temples.session}`;
        baptism.textContent = `Baptism for the Dead Times: ${temples.baptism}`;
        endowment.textContent = `Endowment Sessions Times: ${temples.endowment}`;
        initiatory.textContent = `Initiatory Session Times: ${temples.initiatory}`;
        closure.textContent = `Temple Closures for the year: ${temples.closure}`;
        history.textContent = `History`;
        announcement.textContent = `Temple was announced on ${temples.announcement}`;
        openHouse.textContent = `Public Open House: ${temples.house}`;
        dedication.textContent = `Temple was dedicated on: ${temples.dedication}`;
        website.innerhtml = `Website: <a href="${temples.site}">${temples.url}</a>`;

        //Temple pictures
        picture.setAttribute('src', `${temples.image}`);
        picture.setAttribute('loading', 'lazy');
        picture.setAttribute('alt', `${temples.name}`);

        history.appendChild(announcement);
        history.appendChild(openHouse);
        history.appendChild(dedication);

        cards.appendChild(h2);
        cards.appendChild(picture);
        cards.appendChild(phone);
        cards.appendChild(address);
        cards.appendChild(services);
        cards.appendChild(sessions);
        cards.appendChild(baptism);
        cards.appendChild(endowment);
        cards.appendChild(initiatory);
        cards.appendChild(closure);
        cards.appendChild(history);
        cards.appendChild(website);

        templecard.prepend(cards);
    }