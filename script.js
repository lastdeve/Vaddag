const weekdays = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
const today = new Date();
const dayOfWeek = weekdays[today.getDay()];
const currentTime = today.toLocaleTimeString();

document.getElementById("day-of-week-time").innerHTML = `${dayOfWeek} ${currentTime}`;

// Example using OpenWeatherMap API to get weather information
const API_KEY = "80ca243099f9b82058054fce2dd0a565";
const city = "Stockholm";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;

    document.getElementById("weather").innerHTML = `${temperature}°C, ${weatherDescription}`;
  })
  .catch(error => console.error(error));
