import playList from './playList.js';

let isPlay = false;
let playNum = 0;

const playlistInner = document.querySelector('.play-list');
const playBtn = document.querySelector('.play');
const playPrevBtn = document.querySelector('.play-prev');
const playNextBtn = document.querySelector('.play-next');
const timeline = document.querySelector('.timeline');


let time = 0;

const audio = new Audio();

function playAudio() {
    if (isPlay === true) {
        audio.src = playList[playNum].src;
        audio.currentTime = time;
        audio.play();
        document.querySelector('.song-name').textContent = `${playList[playNum].title}`;
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
        time = 0;
        playAudio();
    }
}
function playPrev (){
    if (isPlay){
        playNum -= 1;
        if (playNum < 0) playNum = playList.length - 1;
        time = 0;
        playAudio();
    }
}

// ------------------отображение текущей длины трека на таймлайне------------------

setInterval(() => {
    const progressBar = document.querySelector(".progress");
    progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
    document.querySelector(".song-time .current").textContent = getTimeCodeFromNum(audio.currentTime);
    time = audio.currentTime;
  }, 500);
  // ------------------------------------------------------------------------------------

// функция для перематывания трека по клику на таймлайн----------

timeline.addEventListener('click', e => {
  
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
})
// ------------------------------------------------------------------


function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;
  
    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(seconds % 60).padStart(2, 0)}`;
}

// ----------------при наведении на иконку звука выезжает слайдер-----------------

document.querySelector('.volume-container').addEventListener('mouseenter', () => {
    document.querySelector('.volume-slider').classList.add('slider-active');
  });
  document.querySelector('.volume-container').addEventListener('mouseleave', () => {
    document.querySelector('.volume-slider').classList.remove('slider-active');
  });
  // --------------------------------------------------------------------------------

//------------функция для изменения громкости при клике на слайдер----------------
let newVolume = 0.75;
const volumeSlider = document.querySelector('.volume-slider');
volumeSlider.addEventListener('click', (event) => {
  const sliderWidth = window.getComputedStyle(volumeSlider).width;
  newVolume = event.offsetX / parseInt(sliderWidth);
  audio.volume = newVolume;
  document.querySelector('.volume-percentage').style.width = newVolume * 100 + '%';
})
// ---------------------------------------------------------------------------------

// функция для вкл/выкл громкости и смене иконки при клике на кнопку громкости
const volumeBtn = document.querySelector('.volume-button');
volumeBtn.addEventListener('click', () => {
  if (volumeBtn.classList.contains('volume-off')){
    volumeBtn.classList.remove('volume-off');
    audio.volume = newVolume;
    document.querySelector('.volume-percentage').style.width = newVolume * 100 + '%';
  }
  else {
    volumeBtn.classList.add('volume-off');
    document.querySelector('.volume-percentage').style.width = 0 + '%';
    audio.volume = 0;
  }
})
// -------------------------------------------------------------------------------

audio.addEventListener ("loadeddata", () => {
    document.querySelector(".song-time .length").textContent = getTimeCodeFromNum(audio.duration);
    audio.volume = .75;
});

for(let i = 0; i < playList.length; i++) {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = `${playList[i].title}`;
    playlistInner.append(li);
}

// ---------функция для выделения воспроизводимого трека в плейлисте

const playListItem = document.querySelectorAll('.play-item');

function playItemSwitchColor(){
  for (let i = 0; i < playListItem.length; i++) {
      if (isPlay && playListItem[i].textContent === `${playList[playNum].title}`) {
          playListItem[i].classList.add('item-active');
      }
      else {
          playListItem[i].classList.remove('item-active'); 
      }
  }
}
playItemSwitchColor();
// ------------------------------------------------------------------------


playPrevBtn.addEventListener('click', playPrev);
playNextBtn.addEventListener('click', playNext);
playBtn.addEventListener('click', toggleBtn);
playBtn.addEventListener('click', playAudio);
