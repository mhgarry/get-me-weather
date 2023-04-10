//our parameter we're going to connect to our search bar to search our city
const city = document.getElementById("search-bar").val()
//the base URL for the API call we're making
const baseUrl = "http://api.openweathermap.org/data/2.5/forecast?q="
//our api key to access openweather's api
const apiKey = "appid=7286c108f57e704d69f96e3657c2f0f0"
$.get(`${baseUrl}${apiKey}` + city, function(input)
		$('')
//our api call
function getWeather (city){

}
$.ajax({
	url: `${baseUrl}${apiKey}${city}`,
	type: 'GET',
	dataType: 'json',
	success: function(res) {
		console.log(res);
		alert(res);
	}
	});
