const weekdays = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
const today = new Date();
const dayOfWeek = weekdays[today.getDay()];

function updateTime() {
  const currentTime = new Date().toLocaleTimeString();
  document.getElementById("day-of-week-time").innerHTML = `${dayOfWeek} ${currentTime}`;
}

updateTime();
setInterval(updateTime, 1000);

function getWeather() {
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "80ca243099f9b82058054fce2dd0a565";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          const temperature = Math.round(data.main.temp - 273.15);
          const weatherDescription = data.weather[0].description;
  
          document.getElementById("weather").innerHTML = `${temperature}°C, ${weatherDescription}`;
        } else {
          document.getElementById("weather").innerHTML = "Kunde inte hämta väderinformation";
        }
      })
      .catch(error => console.error(error));
  });
}

getWeather();
