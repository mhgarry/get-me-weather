//create a function to get the weather data for a city using the openweatherapi. this function should
//take city name and make a get request to the API
$(document).ready(function() {

  // Function to get weather data from OpenWeather API
  function getWeather(city) {
    var apiKey = "b8b599eeeca773c6410a67d2f92e3e5a";
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial&units=metric";

    $.ajax({
      url: apiUrl,
      method: "GET",
      dataType: "json",
      success: function(data) {
        // Call functions to display weather data
        displayCurrentWeather(data);
        displayForecast(data);

				// Store weather data in local storage
      localStorage.setItem("weatherData", JSON.stringify(data));


      },
      error: function() {
        alert("Error: City not found");
      }
    });
  }});
