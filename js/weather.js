const weatherError = document.querySelector('.weather-error');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const city = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
city.value = 'Minsk'

async function getWeather() {
  try {
    weatherError.textContent = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=fc626404cbb93fbcc728f17808cda98a&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = `${data.weather[0].description}`;
    wind.textContent = `Wind spped: ${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`
  }
  catch {
    weatherError.textContent = 'Error! City not found!';
    temperature.textContent = '';
    weatherDescription.textContent = '';
    wind.textContent = '';
    humidity.textContent = '';
  }
    
}
getWeather()

city.addEventListener('change', getWeather);
