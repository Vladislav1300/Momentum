const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const city = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
city.value = 'Gomel'

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=fc626404cbb93fbcc728f17808cda98a&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = `${data.weather[0].description}`;
    wind.textContent = `Wind spped: ${data.wind.speed} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`
  }
  getWeather();

  city.addEventListener('change', getWeather);
