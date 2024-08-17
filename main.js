
const Item = document.querySelectorAll('Item');
const Paragraphs = {
    1: document.getElementById('span1'),
    2: document.getElementById('span2'),
    3: document.getElementById('span3'),
    4: document.getElementById('span4'),
};
const TextSpan = ['* There is no problem with the video device',
    '* There is a problem with the place',
    `* The TV didn't work`,
    '* The videotape is missing ']

let activeButtons = [];

function handleButtonClick(buttonId) {
    const button = document.getElementById(buttonId);
    console.log(button);
    const Paragraph = Paragraphs[buttonId];
    if (!button.classList.contains('active')) {
        button.classList.add('active');
        Paragraph.innerHTML = '';
        activeButtons.push(buttonId);
        console.log(activeButtons);
    } else {
        button.classList.remove('active');
        if (activeButtons.length > 3) {
            Paragraph.innerHTML = ` ${TextSpan[buttonId - 1]}`;
        }
        activeButtons.splice(activeButtons.indexOf(buttonId), 1);
        console.log(activeButtons);


    }
    if (activeButtons.length < 3) return
    if (activeButtons.length > 3) {
        const randomIndex = Math.floor(Math.random() * 3);
        const buttonToDeactivate = document.getElementById(activeButtons[randomIndex]);
        console.log(randomIndex);
        buttonToDeactivate.classList.remove('active');
        Paragraphs[activeButtons[randomIndex]].innerHTML = `  ${TextSpan[activeButtons[randomIndex] - 1]}`;
        activeButtons.splice(randomIndex, 1);
    }
}


Item.forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button.id));
});