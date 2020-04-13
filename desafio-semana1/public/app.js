const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;

darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
}

lightButton.onclick = () => {
    body.classList.replace('dark', 'light');
}

solarButton.onclick = () => {
    if (body.classList.contains('solar')) {
        body.classList.remove('solar');
        solarButton.innerText = 'solarize';
    } else {
        body.classList.add('solar');
    }
}