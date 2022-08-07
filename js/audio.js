import playList from './playList.js';

let isPlay = false;
let playNum = 0;

const playlistInner = document.querySelector('.play-list');
const playBtn = document.querySelector('.play');
const playPrevBtn = document.querySelector('.play-prev');
const playNextBtn = document.querySelector('.play-next');

const audio = new Audio();

function playAudio() {
    if (isPlay === true) {
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
        audio.play();
    }
    else {
        audio.pause();
    }
    playItemSwitchColor();
}



function toggleBtn (){
    playBtn.classList.toggle('pause');
    isPlay = !isPlay;
}

function playNext (){
    if (isPlay){
        playNum += 1;
        if (playNum > playList.length - 1) playNum = 0;
        playAudio();
    }
}
function playPrev (){
    if (isPlay){
        playNum -= 1;
        if (playNum < 0) playNum = playList.length - 1;
        playAudio();
    }
}



for(let i = 0; i < playList.length; i++) {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = `${playList[i].title}`;
    playlistInner.append(li);
}

const playListItem = document.querySelectorAll('.play-item')
console.log(playListItem);

function playItemSwitchColor(){
    for (let i = 0; i < playListItem.length; i++) {
        if (isPlay && playListItem[i].textContent === `${playList[playNum].title}`) {
            playListItem[i].classList.add('item-active');
            console.log(1) 
        }
        else {
            playListItem[i].classList.remove('item-active'); 
        }
    }
}
playItemSwitchColor()


playPrevBtn.addEventListener('click', playPrev);
playNextBtn.addEventListener('click', playNext);
playBtn.addEventListener('click', toggleBtn);
playBtn.addEventListener('click', playAudio);
