// import functions
import { people } from './data.js';
//console.log(people, 'people');

// grab DOM elements
//to grab by class: document.querySelector()
//to grab by id: document.getElementById()

const selectEl = document.querySelector('.select');
const nameEl = document.getElementById('name');
const pronounsEl = document.getElementById('pronouns');
const favPlaceEl = document.querySelector('favoritePlace');
const hobbiesEl = document.querySelector('hobbies');

selectEl.addEventListener('change', (e) => {
    //console.log('user click');
});

function renderPerson(index) {
    nameEl.textContent = 'Name: ' + people[index].name;
    pronounsEl.textContent = 'Pronouns: ' + people[index].pronouns;
    favPlaceEl.textContent = 'Favorite Place: ' + people[index].favorite_place;

    for (let hobby of people[index].hobbies) {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesEl.appendChild(li);
    }
}

renderPerson(0);

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
