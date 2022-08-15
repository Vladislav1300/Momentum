const time = document.querySelector('.time');
const dateText = document.querySelector('.date')

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000); 
}

function showDate(lang){
    const date = new Date();
    const options = {month: 'long', day: 'numeric', weekday: 'long'};
    if (lang === 'en') {
        const currentDate = date.toLocaleDateString('en-Us', options);
        dateText.textContent = currentDate;
    }
    else {
        const currentDate = date.toLocaleDateString('ru-Ru', options);
        dateText.textContent = currentDate;
    }
    
    
    
}
showDate('ru');

showTime();