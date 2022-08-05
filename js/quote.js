const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

let quoteNumber = 0;

function randQuote(){
    quoteNumber = Math.floor(Math.random()*3);
}

randQuote();

async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    quote.textContent = `${data[quoteNumber].text}`;
    author.textContent = `${data[quoteNumber].author}`;   
}
getQuotes();

function changeQuote(){
    quoteNumber ++;
    if (quoteNumber > 2) quoteNumber = 0;
    getQuotes();
}

document.querySelector('.change-quote').addEventListener('click', changeQuote);


