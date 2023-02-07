const weekdays = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
const today = new Date();
const dayOfWeek = weekdays[today.getDay()];

function updateTime() {
  const currentTime = new Date().toLocaleTimeString();
  document.getElementById("day-of-week-time").innerHTML = `${dayOfWeek} ${currentTime}`;
}

updateTime();
setInterval(updateTime, 1000);

const weatherTranslations = {
  "clear sky": "klart väder",
  "few clouds": "några moln",
  "scattered clouds": "spridda moln",
  "broken clouds": "molnigt",
  "shower rain": "regnbyar",
  "rain": "regn",
  "thunderstorm": "åska",
  "snow": "snö",
  "mist": "dimma"
};

const currentHour = new Date().getHours();
const body = document.querySelector("body");

if (currentHour >= 6 && currentHour < 12) {
  body.style.background = "linear-gradient(to right, #ffb347, #ffcc33)";
} else if (currentHour >= 12 && currentHour < 18) {
  body.style.background = "linear-gradient(to right, #a1c4fd, #c2e9fb)";
} else if (currentHour >= 18 || currentHour < 6) {
  body.style.background = "linear-gradient(to right, #2c3e50, #4ca1af)";
}


async function getWeather() {
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_key = "866b77a685a00860c5173d53b321ff7d";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod === 200) {
      const temperature = Math.round(data.main.temp - 273.15);
      let weatherDescription = data.weather[0].description;
      
      weatherDescription = weatherTranslations[weatherDescription] || weatherDescription;

      document.getElementById("weather").innerHTML = `${temperature}°C, ${weatherDescription}`;
      
    } else {
      document.getElementById("weather").innerHTML = "Kunde inte hämta väderinformation";
    }
  } catch (error) {
    console.error(error);
  }
}

getWeather();
