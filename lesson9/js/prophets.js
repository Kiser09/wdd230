const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

const card = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });

    function displayProphets(prophet) {
        //variables 
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let bday = document.createElement('p');
        let bplace = document.createElement('p');

        //text
        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        bday.textContent = `Date of Birth: ${prophet.birthdate}`;
        bplace.textContent = `Place of Birth: ${prophet.birthplace}`;

        //portrait/img
        portrait.setAttribute('src', prophet.imageur1);
        portrait.setAttribute('alt', `Portrait of ${prophet.name}  ${prophet.lastname} - Latter-Day President`);
        portrait.setAttribute('loading', 'lazy');

        card.appendChild(h2);
        card.appendChild(bday);
        card.appendChild(bplace);
        card.appendChild(portrait);

        document.querySelector('div.cards').appendChild(card);
    }