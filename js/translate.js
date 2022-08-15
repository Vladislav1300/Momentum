const langBtns = document.querySelectorAll('.lang_btn');

langBtns.forEach((e) => {
    e.onchange = clickRadio;
})

function clickRadio() {
    showSalutation(this.value);
    getWeather(this.value);
    showDate(this.value);
}