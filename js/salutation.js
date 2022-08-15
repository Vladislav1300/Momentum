const gratingTxt = document.querySelector('.greeting');
const date = new Date();
const hours = date.getHours();
const name = document.querySelector('.name');

function getTimeOfDay(hour, lang){
    let dayParts = [];
    if (lang === 'ru') {
        dayParts = ['утро', 'день', 'вечер', 'ночи'];
    }
    if (lang === 'en') {
        dayParts = ['morning', 'afternoon', 'evening', 'night'];
    }
    // console.log(lang)
    
    if (hour / 6 === 0 || Math.floor(hour / 6) >= 3.5) return dayParts[3];
    else if (hour / 6 > 2.8) return dayParts[2];
    else if (hour / 6 > 2) return dayParts[1];
    else if (hour / 6 >= 1) return dayParts[0];
    
}


function showSalutation(lang){
    // console.log(lang)    
    if (lang === 'ru') gratingTxt.textContent = `Добрый ${getTimeOfDay(hours, 'ru')}`;    
    if (lang === 'en') gratingTxt.textContent = `Good ${getTimeOfDay(hours, 'en')}`;
    
}
showSalutation("ru");


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

