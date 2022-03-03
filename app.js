// import functions
import { people } from './data.js';
//console.log(people, 'people');

// grab DOM elements
//to grab by class: document.querySelector()
//to grab by id: document.getElementById()

const contain = document.querySelector('.contain');
const selectEl = document.querySelector('.select');
const nameEl = document.getElementById('name');
const pronounsEl = document.getElementById('pronouns');
const favPlaceEl = document.querySelector('.favoritePlace');
const hobbiesEl = document.querySelector('.hobbies');

selectEl.addEventListener('change', (e) => {
    const selected = e.target.value;
    hobbiesEl.innerHTML = ' ';
    contain.classList.remove('Mohamed', 'Pete', 'hidden');

    if (selected === 'one') {
        renderPerson(0);
    } else {
        renderPerson(1);
    }
    //console.log('user click');
});

function renderPerson(index) {
    contain.classList.add(`${people[index].name}`);
    nameEl.textContent = 'Name: ' + people[index].name;
    pronounsEl.textContent = 'Pronouns: ' + people[index].pronouns;
    favPlaceEl.textContent = 'Favorite Place: ' + people[index].favorite_place;

    for (let hobby of people[index].hobbies) {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesEl.appendChild(li);
    }
}

//renderPerson(0);

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
