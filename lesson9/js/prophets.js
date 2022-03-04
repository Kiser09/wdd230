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
        let prophetNumber = ''

        if (prophet.order === 1 && prophet.order != 11){
            prophetNumber = `${prophet.order}st`;} 

            else if (prophet.order === 2 && prophet.order != 12) {
            prophetNumber = `${prophet.order}nd`;}
        
            else if (prophet.order === 3 && prophet.order != 13) {
            prophetNumber = `${prophet.order}rd`;}
            
            else {
            prophetNumber = `${prophet.order}th`;}

        //text
        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        bday.textContent = `Date of Birth: ${prophet.birthdate}`;
        bplace.textContent = `Place of Birth: ${prophet.birthplace}`;

        //portrait/img
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('alt', `Portrait of ${prophet.name}  ${prophet.lastname} - ${prophetNumber} Latter-Day President`);

        card.appendChild(h2);
        card.appendChild(bday);
        card.appendChild(bplace);
        card.appendChild(portrait);

        document.querySelector('div.cards').appendChild(card);
    }