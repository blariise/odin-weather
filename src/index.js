import "./styles.css";
import fetchWeather from "./weather.js";
import createCardDOM from "./dom.js";

(async () => {
  const search = document.querySelector(".search input");
  let weatherData = undefined;
  search.addEventListener("keydown", async (event) => {
    if (event.key == "Enter" && search.value !== "") {
      weatherData = await fetchWeather(search.value);
      search.value = "";
      console.log(weatherData);
      renderCardDOM();
      renderWeatherData(weatherData.currentConditions, weatherData.resolvedAddress);
    }
  });
})();

function renderCardDOM() {
  const weatherContainer = document.querySelector(".weather-container");
  weatherContainer.appendChild(createCardDOM());
}

function renderUpperCard(weatherData, place) {
  const dateDiv = document.querySelector(".date");
  dateDiv.innerText = weatherData.datetime;

  setUpperCardBackgroundGif(weatherData.icon);
  setUpperCardIcon(weatherData.icon);

  const temperature = document.querySelector(".temperature");
  temperature.innerText = `${weatherData.temp} °C`;

  const placeDiv = document.querySelector(".place");
  placeDiv.innerText = place;
}

function renderInfo(weatherData) {
  const relativeHumidity = document.querySelector(".relative-humidity");
  const cloudCover = document.querySelector(".cloud-cover");
  const visibility = document.querySelector(".visibility");
  const precipitation = document.querySelector(".precipitation");
  const precipitationChance = document.querySelector(".precipitation-chance");
  const precipitationType = document.querySelector(".precipitation-type");
  const snowfall = document.querySelector(".snowfall");
  const snowDepth = document.querySelector(".snow-depth");
  const windSpeed = document.querySelector(".wind-speed");
  const windGust = document.querySelector(".wind-gust");
  const windDirection = document.querySelector(".wind-direction");
  const solarRadiation = document.querySelector(".solar-radiation");
  const solarEnergy = document.querySelector(".solar-energy");
  const uvIndex = document.querySelector(".uv-index");

  relativeHumidity.innerText = `Relative humidity: ${weatherData.humidity}`;
  cloudCover.innerText = `Cloud cover: ${weatherData.cloudcover}`;
  visibility.innerText = `Visibility: ${weatherData.visibility}`;
  precipitation.innerText = `Precipitation: ${weatherData.precip}`;
  precipitationChance.innerText = `Precipitation chance: ${weatherData.precipprob}`;
  precipitationType.innerText = `Precipitation type: ${weatherData.preciptype}`;
  snowfall.innerText = `Snowfall: ${weatherData.snow}`;
  snowDepth.innerText = `Snow depth: ${weatherData.snowdepth}`;
  windSpeed.innerText = `Wind speed: ${weatherData.windspeed}`;
  windGust.innerText = `Wind gust: ${weatherData.windgust}`;
  windDirection.innerText = `Wind direction: ${weatherData.winddir}`;
  solarRadiation.innerText = `Solar radiation: ${weatherData.solarradiation}`;
  solarEnergy.innerText = `Solar energy: ${weatherData.solarenergy}`;
  uvIndex.innerText = `UV index: ${weatherData.uvindex}`;
}

function renderWeatherData(weatherData, place) {
  renderUpperCard(weatherData, place);
  renderInfo(weatherData);
}

async function dynamicImport(weatherStatus, extension) {
  const element = await import(`./assets/${weatherStatus}.${extension}`);
  return element.default;
}

async function setUpperCardBackgroundGif(weatherStatus) {
  const upperCard = document.querySelector(".upper-card");
  const background = await dynamicImport(weatherStatus, "gif");
  console.log(upperCard.style);
  upperCard.style.backgroundImage = `url("${background}")`;
  upperCard.style.backgroundSize = "cover";
}

async function setUpperCardIcon(weatherStatus) {
  const iconDiv = document.querySelector(".icon");
  const icon = await dynamicImport(weatherStatus, "svg");
  iconDiv.innerHTML = icon;
}
