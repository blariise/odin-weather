export default function createCardDOM() {
  const cardDiv = document.createElement("div");
  cardDiv.className = "day-card";

  const upperDiv = createCardUpperDOM();
  const infoDiv = createInfoDOM();
  const carouselDiv = createCarouselDOM();

  cardDiv.appendChild(upperDiv);
  cardDiv.appendChild(infoDiv);
  cardDiv.appendChild(carouselDiv);
  return cardDiv;
}

function createCardUpperDOM() {
  const upperDiv = document.createElement("div");

  upperDiv.className = "upper-card";
  const simpleInfoDiv = createSimpleInfoDOM();

  const placeDiv = document.createElement("div");
  placeDiv.className = "place";

  upperDiv.appendChild(simpleInfoDiv);
  upperDiv.appendChild(placeDiv);
  return upperDiv;
}

function createSimpleInfoDOM() {
  const simpleInfoDiv = document.createElement("div");
  simpleInfoDiv.className = "simple-info";

  const dateDiv = document.createElement("div");
  dateDiv.className = "date";
  const iconDiv = document.createElement("div");
  iconDiv.className = "icon";
  const tempDiv = document.createElement("div");
  tempDiv.className = "temperature";

  simpleInfoDiv.appendChild(dateDiv);
  simpleInfoDiv.appendChild(iconDiv);
  simpleInfoDiv.appendChild(tempDiv);
  return simpleInfoDiv;
}

function createInfoDOM() {
  const infoDiv = document.createElement("div");
  infoDiv.className = "info";

  const relativeHumidity = document.createElement("div");
  relativeHumidity.className = "relative-humidity";
  const cloudCover = document.createElement("div");
  cloudCover.className = "cloud-cover";
  const visibility = document.createElement("div");
  visibility.className = "visibility";
  const precipitation = document.createElement("div");
  precipitation.className = "precipitation";
  const precipitationChance = document.createElement("div");
  precipitationChance.className = "precipitation-chance";
  const precipitationType = document.createElement("div");
  precipitationType.className = "precipitation-type";
  const snowfall = document.createElement("div");
  snowfall.className = "snowfall";
  const snowDepth = document.createElement("div");
  snowDepth.className = "snow-depth";
  const windSpeed = document.createElement("div");
  windSpeed.className = "wind-speed";
  const windGust = document.createElement("div");
  windGust.className = "wind-gust";
  const windDirection = document.createElement("div");
  windDirection.className = "wind-direction";
  const solarRadiation = document.createElement("div");
  solarRadiation.className = "solar-radiation";
  const solarEnergy = document.createElement("div");
  solarEnergy.className = "solar-energy";
  const uvIndex = document.createElement("div");
  uvIndex.className = "uv-index";

  infoDiv.appendChild(relativeHumidity);
  infoDiv.appendChild(cloudCover);
  infoDiv.appendChild(visibility);
  infoDiv.appendChild(precipitation);
  infoDiv.appendChild(precipitationChance);
  infoDiv.appendChild(precipitationType);
  infoDiv.appendChild(snowfall);
  infoDiv.appendChild(snowDepth);
  infoDiv.appendChild(windSpeed);
  infoDiv.appendChild(windGust);
  infoDiv.appendChild(windDirection);
  infoDiv.appendChild(solarRadiation);
  infoDiv.appendChild(solarEnergy);
  infoDiv.appendChild(uvIndex);

  return infoDiv;
}

function createCarouselDOM() {
  const carouselDiv = document.createElement("div");
  carouselDiv.className = "carousel";

  for(let i = 0; i < 4; ++i) {
    const carouselElement = document.createElement("div");
    carouselElement.className = "carousel-element";
    carouselDiv.appendChild(carouselElement);
  }

  return carouselDiv;
}

