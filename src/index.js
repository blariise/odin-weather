import "./styles.css";
import fetchWeather from "./weather.js";
import createDayDOM from "./dom.js";

(async () => {
  const search = document.querySelector(".search input");
  let weatherData = undefined;
  search.addEventListener("keydown", async (event) => {
    if (event.key == "Enter" && search.value !== "") {
      weatherData = await fetchWeather(search.value);
      search.value = "";
      renderWeatherData(weatherData);
    }
  });
})();

function renderWeatherData(weatherData) {
  const xd = createDayDOM();
  const c = document.querySelector(".weather-container");
  c.appendChild(xd);
  console.log(weatherData);
}

