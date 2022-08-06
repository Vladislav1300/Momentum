import playList from './playList.js';
console.log(playList);

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
        console.log(playList[playNum].title)
    }
    else {
        audio.pause();
    }
}

function toggleBtn (){
    playBtn.classList.toggle('pause');
    isPlay = !isPlay;
    console.log(isPlay)
}

for(let i = 0; i < playList.length; i++) {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = `${playList[i].title}`;
    playlistInner.append(li);
}

function playNext (){
    if (isPlay){
        playNum += 1;
        if (playNum > playList.length - 1) playNum = 0;
        playAudio();
        console.log(isPlay)
    }
}
function playPrev (){
    if (isPlay){
        playNum -= 1;
        if (playNum < 0) playNum = playList.length - 1;
        playAudio();
        console.log(playNum)
    }
}


playPrevBtn.addEventListener('click', playPrev);
playNextBtn.addEventListener('click', playNext);
playBtn.addEventListener('click', toggleBtn);
playBtn.addEventListener('click', playAudio);
