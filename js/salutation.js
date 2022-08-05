const gratingTxt = document.querySelector('.greeting');
const date = new Date();
const hours = date.getHours();
const name = document.querySelector('.name');

function getTimeOfDay(hour){
    const dayParts = ['morning', 'day', 'evening', 'night'];
    if (hour / 6 === 0 || Math.floor(hour / 6) >= 3.5) return dayParts[3];
    else if (hour / 6 > 2.8) return dayParts[2];
    else if (hour / 6 > 2) return dayParts[1];
    else if (hour / 6 >= 1) return dayParts[0];

}
gratingTxt.textContent = `Good ${getTimeOfDay(hours)}`;

function setLocalStorage() {
    localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage)

