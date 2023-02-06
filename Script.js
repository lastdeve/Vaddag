const weekdays = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
const today = new Date().getDay();
const dayOfWeek = weekdays[today];

document.getElementById("day-of-week").innerHTML = dayOfWeek;
