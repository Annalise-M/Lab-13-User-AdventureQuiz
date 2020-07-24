import allQuests from '../data.js';
import { findById, renderSection } from './questUtils.js';

const main = document.querySelector('main');

const params = new URLSearchParams(window.location.search);
const nextButton = document.querySelector('#next');

const questId = params.get('id');
const questData = findById(allQuests, questId);
const sectionEl = renderSection(questData);


nextButton.addEventListener('click', () => {
    window.location = '/map';

});


main.append(sectionEl);


