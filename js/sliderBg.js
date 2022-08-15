let randNumb = 0;

function getRandomNum() {
    randNumb = Math.ceil(Math.random() * 20);
}
getRandomNum();
// document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";


function setBg() {
    let timeOfDay = getTimeOfDay(hours, 'en');
    let bgNum = String(randNumb).length === 1 ? String(randNumb).padStart(2, 0) : String(randNumb);
    if (timeOfDay === 'day') timeOfDay = 'afternoon';
    document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
}
setBg();

function getSlideNext() {
    randNumb +=1;
    if (randNumb === 21) randNumb = 1;
    setBg();
}

function getSlidePrev() {
    randNumb -= 1;
    if (randNumb === 0) randNumb = 20;
    setBg()
}

document.querySelector('.slide-prev').addEventListener('click', getSlidePrev);
document.querySelector('.slide-next').addEventListener('click', getSlideNext);


