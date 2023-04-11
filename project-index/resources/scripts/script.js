//create a function to get the weather data for a city using the openweatherapi. this function should
//take cityname and make a get request to the API

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

				// Store data in local storage
      localStorage.setItem("weatherData", JSON.stringify(data));


      },
      error: function() {
        alert("Error: City not found");
      }
    });
  }

  // Function to display current weather data
  function displayCurrentWeather(data) {

		//display city name, date, and,
	$("#city-name")[0].textContent ="City: " + data.city.name + " " + dayjs().format(' MM/DD:mm:ss/YYYY')


		$("#icon")[0].src = "http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png";
		$("#temp")[0].textContent = "Temperature: " + data.list[0].main.temp + " Fahrenheit";
		$("#humidity")[0].textContent = "Humidity: " + data.list[0].main.humidity + "%";
		$("#wind")[0].textContent = "Wind speed " + data.list[0].wind.speed;
		}

  // Function to display weather forecast data
  function displayForecast(data) {
		//for loop through days
			for (var i = 0;i < 5; i++){
				//add all our forecast data +i for +1 index
				var forecast = {
					date: todayMoment.clone(data).add(i +1, 'days'),
					icon: "http://openweathermap.org/img/wn/" + data.list[i + 1].weather[0].icon + "@2x.png",
					temp: data.list[i + 1].main.temp,
					humidity: data.list[i + 1].main.humidity,
					wind: data.list[i + 1].wind.speed
					};
					//add content to our cards
					var cardsForecast = "#forecast-" + i;
					$(cardsForecast)[0].textContent = forecast.date;
					cardsForecast = "#icon-" + i;
					$(cardsForecast)[0].src = forecast.icon;
					cardsForecast = "temp-" + i;
					$(cardsForecast)[0].textContent = forecast.temp;
					cardsForecast = "humidity-" + i;
					$(cardsForecast)[0].textContent = forecast.humidity;
					cardsForecast = "wind-" + i;
					$(cardsForecast)[0].textContent = forecast.wind;
			}
  }

  // Event listener for search button
  $("#submit").on("click", function(event) {
    event.preventDefault();
    var city = $("#search-bar").val().trim();
    getWeather(city);
  });

  // Event listener for search history dropdown
  $(".storage").on("click", ".dropdown-item", function(event) {
    event.preventDefault();
    var city = $(this).text();
    getWeather(city);
  });

});
