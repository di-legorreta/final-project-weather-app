// @ts-check

function refreshWeather(response) {
   let temperatureElement = document.querySelector("#weather-app-temp-value");
   let temperature = response.data.temperature.current;
   temperatureElement.innerHTML = Math.round(temperature);

   let cityElement = document.querySelector("#weather-app-city");
   cityElement.innerHTML = response.data.city;

   let descriptionElement = document.querySelector("#description");
   descriptionElement.innerHTML = response.data.condition.description;

   let humidityElement = document.querySelector("#humidity");
   humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

   let speedElement = document.querySelector("#speed");
   speedElement.innerHTML = `${response.data.wind.speed}km/h`;

   let timeElement = document.querySelector("#time");
   let date = new Date(response.data.time * 1000);

   timeElement.innerHTML = formatDate(date);
}

function formatDate(date) {
   let minutes = date.getMinutes();
   let hours = date.getHours();
   let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
   ];

   let day = days[date.getDay()];

   if (minutes < 10) {
      minutes = `0${minutes}`;
   }

   return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
   let apiKey = "297bdob5643aebcfc422bc019b792eta";
   let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
   axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
   event.preventDefault();
   let searchInput = document.querySelector("#search-form-input");

   searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Vienna");
