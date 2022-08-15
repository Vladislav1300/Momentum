const langBtns = document.querySelectorAll('.lang_btn');

langBtns.forEach((e) => {
    e.onchange = clickRadio;
})

let lang = 'ru';

function clickRadio() {
    showSalutation(this.value);
    getWeather(this.value);
    showDate(this.value);
    // changeQuote(this.value)
    getQuotes(this.value);
    lang = this.value;
}