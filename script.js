const weekdays = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
const today = new Date();
const dayOfWeek = weekdays[today.getDay()];

function updateTime() {
  const currentTime = new Date().toLocaleTimeString();
  document.getElementById("day-of-week-time").innerHTML = `${dayOfWeek} ${currentTime}`;
}

updateTime();
setInterval(updateTime, 1000);

// Example using OpenWeatherMap API to get weather information
const API_KEY = "Y80ca243099f9b82058054fce2dd0a565";
const city = "stockholm";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;

    document.getElementById("weather").innerHTML = `${temperature}°C, ${weatherDescription}`;
  })
  .catch(error => console.error(error));
