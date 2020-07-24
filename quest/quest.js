import allQuests from '../data.js';
import { findById, renderSection } from './questUtils.js';

const main = document.querySelector('main');

const questId = 'dragon';
const questData = findById(allQuests, questId);

// console.log(questData);

const sectionEl = renderSection(questData);

main.append(sectionEl);


