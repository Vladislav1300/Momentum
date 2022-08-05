import playList from './playList.js';
console.log(playList);

let isPlay = false;

const playlistInner = document.querySelector('.play-list');
const playBtn = document.querySelector('.play');
const audio = new Audio();

function playAudio() {
    if (!isPlay) {
        audio.src = playList[0].src;
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
        playBtn.classList.add('pause');
    }
    else {
        isPlay = false;
        audio.pause();
        playBtn.classList.remove('pause');
    }
}

for(let i = 0; i < playList.length; i++) {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = `${playList[i].title}`;
    playlistInner.append(li);
  }

playBtn.addEventListener('click', playAudio);