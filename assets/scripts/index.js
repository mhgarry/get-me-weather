$(document).ready(function() {
	// Function to get weather data from OpenWeather API
	function getWeather(city) {
		var apiKey = `b8b599eeeca773c6410a67d2f92e3e5a`;
		//the url we are going to call inserting our api key into the URL and the passed in city to get weather by city
		var apiUrl =
			`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial&units=metric`;
		//make our "GET" api call to the openweathermap api using jquery and ajax
		$.ajax({
			url: apiUrl,
			method: "GET",
			dataType: "json",
			success: function(data) {
				// Call functions to display weather data
				displayCurrentWeather(data);
				// Store data in local storage
				localStorage.setItem("weatherData", JSON.stringify(data));
			},
			//error message if something goes wrong and city is not found
			error: function() {
				alert("Error: City not found");
			}
		});
	}
	// Function to display current weather data
	function displayCurrentWeather(data) {
		//display city name, date, and,
		$("#city-name")[0].textContent = "City: " + data.city.name + " " +
			dayjs().format(' MM/DD:mm:ss/YYYY')
		//display weather data
		$("#icon")[0].src = `http://openweathermap.org/img/wn/${data.list[0]
			.weather[0].icon}@2x.png`;
		$("#temp")[0].textContent = `Temperature: ${data.list[0].main.temp} Fahrenheit`;
		$("#humidity")[0].textContent = `Humidity: ${data.list[0].main
			.humidity}%`;
		$("#wind")[0].textContent = `Wind speed ${data.list[0].wind.speed}`;
	}
// Function to append search history to drop-down list
function appendSearchHistory() {
  // Get weather data from local storage
  var weatherData = JSON.parse(localStorage.getItem("weatherData"));

  // Get city name from weather data
  var cityName = weatherData.city.name;

  // Create a new anchor element for the drop-down list
  var option = $("<option>");
  option.val(cityName);
  option.text(cityName);

  // Append the new anchor to the drop-down list
  $(".city-options").append(option);
}

$("#submit").on("click", function(event) {
  event.preventDefault();
  var city = $("#search-bar").val().trim();
  getWeather(city);
  appendSearchHistory();
});

$(".city-options").on("change", function() {
  var city = $(this).val();
  getWeather(city);
});
	// Event listener for search button on submit
	$("#submit").on("click", function(event) {
		event.preventDefault();
		var city = $("#search-bar").val().trim();
		getWeather(city);

	});
});
