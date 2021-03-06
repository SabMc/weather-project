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

//Show current Location
function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";

  let apiKey = "aac2df75f978d1711f7f24c0ea00540c";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndpoint}lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
  axios.get(apiUrlForecast).then(showForecast);
}

//Forecast current Position
function showForecast(response) {
  //Day 1
  let forecastDay1TempMax = Math.round(response.data.daily[1].temp.max);
  let forecastDay1TempMin = Math.round(response.data.daily[1].temp.min);

  let displayforecastDay1TempMax = document.querySelector("#day1TempMax");
  displayforecastDay1TempMax.innerHTML = forecastDay1TempMax;

  let displayforecastDay1TempMin = document.querySelector("#day1TempMin");
  displayforecastDay1TempMin.innerHTML = forecastDay1TempMin;

  let getIconDay1 = response.data.daily[1].weather[0].icon;
  let iconElementDay1 = document.querySelector("#emoji-day1");
  iconElementDay1.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${getIconDay1}@2x.png`
  );

  //Day 2
  let forecastDay2TempMax = Math.round(response.data.daily[2].temp.max);
  let forecastDay2TempMin = Math.round(response.data.daily[2].temp.min);

  let displayforecastDay2TempMax = document.querySelector("#day2TempMax");
  displayforecastDay2TempMax.innerHTML = forecastDay2TempMax;

  let displayforecastDay2TempMin = document.querySelector("#day2TempMin");
  displayforecastDay2TempMin.innerHTML = forecastDay2TempMin;

  let getIconDay2 = response.data.daily[2].weather[0].icon;
  let iconElementDay2 = document.querySelector("#emoji-day2");
  iconElementDay2.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${getIconDay2}@2x.png`
  );

  //Day 3
  let forecastDay3TempMax = Math.round(response.data.daily[3].temp.max);
  let forecastDay3TempMin = Math.round(response.data.daily[3].temp.min);

  let displayforecastDay3TempMax = document.querySelector("#day3TempMax");
  displayforecastDay3TempMax.innerHTML = forecastDay3TempMax;

  let displayforecastDay3TempMin = document.querySelector("#day3TempMin");
  displayforecastDay3TempMin.innerHTML = forecastDay3TempMin;

  let getIconDay3 = response.data.daily[3].weather[0].icon;
  let iconElementDay3 = document.querySelector("#emoji-day3");
  iconElementDay3.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${getIconDay3}@2x.png`
  );

  //Day 4
  let forecastDay4TempMax = Math.round(response.data.daily[4].temp.max);
  let forecastDay4TempMin = Math.round(response.data.daily[4].temp.min);

  let displayforecastDay4TempMax = document.querySelector("#day4TempMax");
  displayforecastDay4TempMax.innerHTML = forecastDay4TempMax;

  let displayforecastDay4TempMin = document.querySelector("#day4TempMin");
  displayforecastDay4TempMin.innerHTML = forecastDay4TempMin;

  let getIconDay4 = response.data.daily[4].weather[0].icon;
  let iconElementDay4 = document.querySelector("#emoji-day4");
  iconElementDay4.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${getIconDay4}@2x.png`
  );

  //Day 5
  let forecastDay5TempMax = Math.round(response.data.daily[5].temp.max);
  let forecastDay5TempMin = Math.round(response.data.daily[5].temp.min);

  let displayforecastDay5TempMax = document.querySelector("#day5TempMax");
  displayforecastDay5TempMax.innerHTML = forecastDay5TempMax;

  let displayforecastDay5TempMin = document.querySelector("#day5TempMin");
  displayforecastDay5TempMin.innerHTML = forecastDay5TempMin;

  let getIconDay5 = response.data.daily[5].weather[0].icon;
  let iconElementDay5 = document.querySelector("#emoji-day5");
  iconElementDay5.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${getIconDay5}@2x.png`
  );

  //Day 6
  let forecastDay6TempMax = Math.round(response.data.daily[6].temp.max);
  let forecastDay6TempMin = Math.round(response.data.daily[6].temp.min);

  let displayforecastDay6TempMax = document.querySelector("#day6TempMax");
  displayforecastDay6TempMax.innerHTML = forecastDay6TempMax;

  let displayforecastDay6TempMin = document.querySelector("#day6TempMin");
  displayforecastDay6TempMin.innerHTML = forecastDay6TempMin;

  let getIconDay6 = response.data.daily[6].weather[0].icon;
  let iconElementDay6 = document.querySelector("#emoji-day6");
  iconElementDay6.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${getIconDay6}@2x.png`
  );
}
//Forecast Date 1
function calculateForecastDay1(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
  let forecastDay = days[date.getDay()];
  let forecastDate = date.getDate();
  let forecastMonth = months[date.getMonth()];

  let forecastedDate1 = `${forecastDay} <br /> ${forecastMonth} ${forecastDate}`;

  return forecastedDate1;
}

let forecastDate1 = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

let displayForecastDate1 = document.querySelector("#day1");
displayForecastDate1.innerHTML = calculateForecastDay1(forecastDate1);

//Forecast Date 2
function calculateForecastDay2(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
  let forecastDay = days[date.getDay()];
  let forecastDate = date.getDate();
  let forecastMonth = months[date.getMonth()];

  let forecastedDate2 = `${forecastDay} <br /> ${forecastMonth} ${forecastDate}`;

  return forecastedDate2;
}

let forecastDate2 = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 2);

let displayForecastDate2 = document.querySelector("#day2");
displayForecastDate2.innerHTML = calculateForecastDay2(forecastDate2);

//Forecast Date 3
function calculateForecastDay3(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
  let forecastDay = days[date.getDay()];
  let forecastDate = date.getDate();
  let forecastMonth = months[date.getMonth()];

  let forecastedDate3 = `${forecastDay} <br /> ${forecastMonth} ${forecastDate}`;

  return forecastedDate3;
}

let forecastDate3 = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 3);

let displayForecastDate3 = document.querySelector("#day3");
displayForecastDate3.innerHTML = calculateForecastDay3(forecastDate3);

//Forecast Date 4
function calculateForecastDay4(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
  let forecastDay = days[date.getDay()];
  let forecastDate = date.getDate();
  let forecastMonth = months[date.getMonth()];

  let forecastedDate4 = `${forecastDay} <br /> ${forecastMonth} ${forecastDate}`;

  return forecastedDate4;
}

let forecastDate4 = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 4);

let displayForecastDate4 = document.querySelector("#day4");
displayForecastDate4.innerHTML = calculateForecastDay4(forecastDate4);

//Forecast Date 5
function calculateForecastDay5(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
  let forecastDay = days[date.getDay()];
  let forecastDate = date.getDate();
  let forecastMonth = months[date.getMonth()];

  let forecastedDate5 = `${forecastDay} <br /> ${forecastMonth} ${forecastDate}`;

  return forecastedDate5;
}

let forecastDate5 = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 5);

let displayForecastDate5 = document.querySelector("#day5");
displayForecastDate5.innerHTML = calculateForecastDay5(forecastDate5);

//Forecast Date 6
function calculateForecastDay6(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
  let forecastDay = days[date.getDay()];
  let forecastDate = date.getDate();
  let forecastMonth = months[date.getMonth()];

  let forecastedDate6 = `${forecastDay} <br /> ${forecastMonth} ${forecastDate}`;

  return forecastedDate6;
}

let forecastDate6 = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 6);

let displayForecastDate6 = document.querySelector("#day6");
displayForecastDate6.innerHTML = calculateForecastDay6(forecastDate6);

//Show current Location
function showTemperature(response) {
  let actualLocation = response.data.name;

  let getIcon = response.data.weather[0].icon;
  let iconElement = document.querySelector("#current-emoji");
  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${getIcon}@2x.png`
  );

  let temperature = Math.round(response.data.main.temp);
  let currentTemperatureMax = Math.round(response.data.main.temp_max);
  let currentTemperatureMin = Math.round(response.data.main.temp_min);
  let currentHumidity = response.data.main.humidity;
  let currentWind = Math.round((response.data.wind.speed * 36) / 10);
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
    let getSearchIcon = response.data.weather[0].icon;
    let SearchIconElement = document.querySelector("#current-emoji");
    SearchIconElement.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${getSearchIcon}@2x.png`
    );

    let temperature = Math.round(response.data.main.temp);
    let temperatureMax = Math.round(response.data.main.temp_max);
    let temperatureMin = Math.round(response.data.main.temp_min);
    let humidity = response.data.main.humidity;
    let wind = Math.round((response.data.wind.speed * 36) / 10);
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
  let city = cityInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}
let clickCityButton = document.querySelector("#search-form");
clickCityButton = addEventListener("submit", getCity);
