export function renderSection(quest) {
    const section = document.createElement('section');
    const div = document.createElement('div');
    div.textContent = quest.title;
    
    const img = document.createElement('img');
    img.src = quest.image;

    const form = document.createElement('form');
    const description = document.createElement('div');
    description.textContent = quest.description;
    form.append(description);
    
    
    for (let i = 0; i < quest.choices.length; i++) {
        const label = document.createElement('label');
        const labelDiv = document.createElement('div');
        const choice = quest.choices[i];

        labelDiv.textContent = choice.description;
        const input = document.createElement('input');

        input.type = 'radio';
        input.value = choice.id;
        input.name = 'choices';

        label.append(labelDiv, input);
        form.append(label);
    }
    const button = document.createElement('button');
    button.textContent = 'Submit';

    form.append(button);
    section.append(div, img, form);
    return section;
}

// create a Test for the below function findById
export function findById(array, id) {
    return array.find(i => i.id === id);
}
