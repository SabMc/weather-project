let apiKey = "aac2df75f978d1711f7f24c0ea00540c";
//Section Date and time
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  //date
  let currentDay = days[date.getDay()];
  let currentDate = date.getDate();
  let currentMonth = months[date.getMonth()];

  //time
  let currentHour = date.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }

  let currentMinute = date.getMinutes();
  if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }

  let formattedDate = `${currentDay} | ${currentDate} ${currentMonth} | ${currentHour}:${currentMinute}`;

  return formattedDate;
}

let localDate = document.querySelector("#current-date");
let currentTime = new Date();
localDate.innerHTML = formatDate(currentTime);

//show current Location
function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let cnt = "6";
  let apiKey = "aac2df75f978d1711f7f24c0ea00540c";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndpoint}lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  let apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
  axios.get(apiUrlForecast).then(showForecast);
}
//Forecast actual Position
function showForecast(response) {
  console.log(response);
}

//show current Location
function showTemperature(response) {
  let actualLocation = response.data.name;
  //console.log(response.data);

  let temperature = Math.round(response.data.main.temp);
  let currentTemperatureMax = Math.round(response.data.main.temp_max);
  let currentTemperatureMin = Math.round(response.data.main.temp_min);
  let currentHumidity = response.data.main.humidity;
  let currentWind = Math.round((response.data.wind.speed / 36) * 10);
  let currentPressure = response.data.main.pressure;

  let displayActualLocation = document.querySelector("#current-city");
  displayActualLocation.innerHTML = actualLocation;

  let displayTemperature = document.querySelector("#temperature");
  displayTemperature.innerHTML = temperature;

  let displayCurrentTemperatureMax = document.querySelector("#temp-max");
  displayCurrentTemperatureMax.innerHTML = currentTemperatureMax;

  let displayCurrentTemperatureMin = document.querySelector("#temp-min");
  displayCurrentTemperatureMin.innerHTML = currentTemperatureMin;

  let displayCurrentPressure = document.querySelector("#pressure");
  displayCurrentPressure.innerHTML = currentPressure;

  let displayCurrentWind = document.querySelector("#wind");
  displayCurrentWind.innerHTML = currentWind;

  let displayCurrentHumidity = document.querySelector("#humidity");
  displayCurrentHumidity.innerHTML = currentHumidity;
}

navigator.geolocation.getCurrentPosition(showPosition);

//Search Function: show searched Location and Weather Condition

function getCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city");
  //console.log(cityInput);
  let newCity = document.querySelector("#current-city");
  newCity.innerHTML = cityInput.value;

  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    console.log(response.data);
    let temperatureMax = Math.round(response.data.main.temp_max);
    let temperatureMin = Math.round(response.data.main.temp_min);
    let humidity = response.data.main.humidity;
    let wind = Math.round((response.data.wind.speed / 36) * 10);
    let pressure = response.data.main.pressure;

    let displaySearchedTemperature = document.querySelector("#temperature");
    displaySearchedTemperature.innerHTML = temperature;

    let displayTemperatureMax = document.querySelector("#temp-max");
    displayTemperatureMax.innerHTML = temperatureMax;

    let displayTemperatureMin = document.querySelector("#temp-min");
    displayTemperatureMin.innerHTML = temperatureMin;

    let displayHumidity = document.querySelector("#humidity");
    displayHumidity.innerHTML = humidity;

    let displayWind = document.querySelector("#wind");
    displayWind.innerHTML = wind;

    let displayPressure = document.querySelector("#pressure");
    displayPressure.innerHTML = pressure;
  }

  let apiKey = "aac2df75f978d1711f7f24c0ea00540c";
  let units = "metric";
  let cnt = "6";
  let city = cityInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  let apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${cnt}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
  axios.get(apiUrlForecast).then(showForecast);
}
let clickCityButton = document.querySelector("#search-form");
clickCityButton = addEventListener("submit", getCity);
