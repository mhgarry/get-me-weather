//user story I'm a traveller and I want to get the weather from any city I'd like
//I need to be able to search the city and be prepared with accurate and prompt weather conditions for multiple days 
//I need to be able to get multiple variables and I need to be presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
//I need a 5 day forecast with date, temp, windspeed, and humidity
//

//our api key to get on the site 
var apiKey = '7286c108f57e704d69f96e3657c2f0f0'
var apiKeyForecast = '9d3bbf1b489ebcbf30502d4b9b25e597'

//get current weather and add HTML to index
function getWeather(city) {
  //link our api into our application so we can pull data from it 
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + apiKey;
    //store our data to JSON and output the user data using the apiUrl and create strings using template literals and our output data and then use the #weather class to put our weather into our document
    $.getJSON(apiUrl, function(data) {
      var html = '<h2>Current weather for ' + data.name + '</h2>';
      html += '<p>Temperature: ' + data.main.temp + '&deg;C</p>';
      html += '<p>Weather: ' + data.weather[0].description + '</p>';
      $('#current-weather').html(html);
    });
  }


//get future forecast and add HTML to document using the same method we got current weather with 
function getForecast (city) {
  var apiUrl = 'api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=' + apiKeyForecast;
    $.getJSON(apiUrl, function(data) {
      var innerText = '<h2>5 day forecast for ' + data.name + '</h2>';
      innerText += '<p>Temperature: ' + data.main.temp + '&deg;C</p>';
      innerText += '<p>Weather: ' + data.forecast[0,1,2,3,4].description + '</p>';
      $('#day').innerText(innerText);
    });
  }

  // Attach click event to search button for both getWeather and getForecast by city typed in using the val to pass through the data 
  $('#search-btn').on('click', function() {
    var city = $('#current-weather').val();
    getWeather(city);
  });

  $('#search-btn').on('click', function() {
    var city = $('#day').val();
    getForecast(city);
  });