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
let currentTime = new Date();

let localDate = document.querySelector("#current-date");
localDate.innerHTML = formatDate(currentTime);

//show current Location
function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let cnt = "8";
  let apiKey = "aac2df75f978d1711f7f24c0ea00540c";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndpoint}lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
  axios.get(apiUrlForecast).then(showForecast);
}
//Forecast actual Position
function showForecast(response) {
  console.log(response.data);
  console.log(response.data.daily[6].temp.max);

  //Day 1
  let forecastDay1TempMax = Math.round(response.data.daily[1].temp.max);
  let forecastDay1TempMin = Math.round(response.data.daily[1].temp.min);

  let displayforecastDay1TempMax = document.querySelector("#day1TempMax");
  displayforecastDay1TempMax.innerHTML = forecastDay1TempMax;

  let displayforecastDay1TempMin = document.querySelector("#day1TempMin");
  displayforecastDay1TempMin.innerHTML = forecastDay1TempMin;

  //Day 2
  let forecastDay2TempMax = Math.round(response.data.daily[2].temp.max);
  let forecastDay2TempMin = Math.round(response.data.daily[2].temp.min);

  let displayforecastDay2TempMax = document.querySelector("#day2TempMax");
  displayforecastDay2TempMax.innerHTML = forecastDay2TempMax;

  let displayforecastDay2TempMin = document.querySelector("#day2TempMin");
  displayforecastDay2TempMin.innerHTML = forecastDay2TempMin;

  //Day 3
  let forecastDay3TempMax = Math.round(response.data.daily[3].temp.max);
  let forecastDay3TempMin = Math.round(response.data.daily[3].temp.min);

  let displayforecastDay3TempMax = document.querySelector("#day3TempMax");
  displayforecastDay3TempMax.innerHTML = forecastDay3TempMax;

  let displayforecastDay3TempMin = document.querySelector("#day3TempMin");
  displayforecastDay3TempMin.innerHTML = forecastDay3TempMin;

  //Day 4
  let forecastDay4TempMax = Math.round(response.data.daily[4].temp.max);
  let forecastDay4TempMin = Math.round(response.data.daily[4].temp.min);

  let displayforecastDay4TempMax = document.querySelector("#day4TempMax");
  displayforecastDay4TempMax.innerHTML = forecastDay4TempMax;

  let displayforecastDay4TempMin = document.querySelector("#day4TempMin");
  displayforecastDay4TempMin.innerHTML = forecastDay4TempMin;

  //Day 5
  let forecastDay5TempMax = Math.round(response.data.daily[5].temp.max);
  let forecastDay5TempMin = Math.round(response.data.daily[5].temp.min);

  let displayforecastDay5TempMax = document.querySelector("#day5TempMax");
  displayforecastDay5TempMax.innerHTML = forecastDay5TempMax;

  let displayforecastDay5TempMin = document.querySelector("#day5TempMin");
  displayforecastDay5TempMin.innerHTML = forecastDay5TempMin;

  //Day 6
  let forecastDay6TempMax = Math.round(response.data.daily[6].temp.max);
  let forecastDay6TempMin = Math.round(response.data.daily[6].temp.min);

  let displayforecastDay6TempMax = document.querySelector("#day6TempMax");
  displayforecastDay6TempMax.innerHTML = forecastDay6TempMax;

  let displayforecastDay6TempMin = document.querySelector("#day6TempMin");
  displayforecastDay6TempMin.innerHTML = forecastDay6TempMin;
}

//show current Location
function showTemperature(response) {
  let actualLocation = response.data.name;

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

  let newCity = document.querySelector("#current-city");
  newCity.innerHTML = cityInput.value;

  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);

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
  let cnt = "5";
  let city = cityInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  let apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${cnt}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
  axios.get(apiUrlForecast).then(showForecast);
}
let clickCityButton = document.querySelector("#search-form");
clickCityButton = addEventListener("submit", getCity);
