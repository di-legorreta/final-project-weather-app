// @ts-check

function refreshWeather(response) {
   let temperatureElement = document.querySelector("#weather-app-temperature");
   let temperature = response.data.temperature.current;

   cityElement.innerHTML = response.data.city;
   temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
   let apiKey = "297bdob5643aebcfc422bc019b792eta";
   let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
   console.log(apiUrl);
   axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
   event.preventDefault();
   let searchInput = document.querySelector("#search-form-input");

   searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Mexico");
