// Days since last visit
const visit = window.localStorage.getItem('last-visited');
if(visit === undefined) {
    visit = new Date(Data.now());
}
const lastVisit = Date.parse(visit);
const FACTOR = 1000 * 60 * 60 * 24;


let between = Date.now() - lastVisit;
let numOfDays = between / FACTOR;

window.localStorage.setItem('last-visited', new Date(Date.now()));

const sinceLastVisit = Math.floor(numOfDays);
document.getElementById('last-visited').textContent = sinceLastVisit;