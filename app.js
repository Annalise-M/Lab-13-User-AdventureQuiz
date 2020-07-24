import { makeUser } from './userUtils.js';

// initialize state
const form = document.querySelector('form');


// set event listeners to update state and DOM
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const user = makeUser(formData);

    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);
    
    window.location = '/map';

});

