# get-me-weather
This application is a traveler's weather guide to global weather at the tip of the user's fingers. To accomplish this I used
JavaScript, and the JavaScript library Jquery for functionality, and I used bootstrap for styling
![web-page][def]
## Table-Of-Contents 

  - [Table of contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Resources](#resources)
  - [Tests](#tests)
  - [How to Contribute](#how-to-contribute)
  - [Questions](#questions)


## Description 
		"get-me-weather" is a web application that uses the the "openweathermap" api to generate different weather statistics
		dynamically and show them on the page. This data includes temperature in Fahrenheit, humidity levels, wind speed, along with
		the city name and date. It also has a dropdown menu that shows the user's search history. I plan to implement a forecast
		feature that shows forecast  data for the next 5 days for the city the user is currently viewing. This application is meant to
		provide a user with the ability to get weather for any city across the globe they would like to. This application consists of
		a nav bar with a dropdown menu populated by the past city search values, a search bar field, a search button, a dynamic
		display section that shows the name of the city searched, a weather icon for the city, the city's temperature in
	  Fahrenheit, the city's current humidity level, and the city's current wind speed. I have a placeholder for a forecast section
		that will give the user a 5 day future forecast. All of the styling was designed using a combination of HTML and the Bootstrap
		library. All of the functionality was implemented using JavaScript along with the Jquery JavaScript library. This application
		is meant to be a light weight travel weather assistant. This application demonstrates a firm grasp on DOM manipulation and a
		an usable understanding of the Bootstrap framework and the Jquery library.
	
## Installation 
		The installation of this app only requires a device connected to the internet and a web browser (the usage of jquery and
		bootstrap makes this application compatible with legacy browsers). A user simply navigates to this web application using the
		URL and every other tool they need is already implemented within the application.

## Usage 
		The user can search any city in the world and it dynamically updates the HTML page and shows them the temperature for that
		city, the humidity level, the wind speed, along with the city name next to the date. To use the user inputs any city name into
		the search bar and climate data is shown. A traveler needs to be prepared for anything and using my experience backpacking
		made an app that I wish I had traveling. Using the "openweathermapapi" I not only show the temperature but also the humidity
		level and wind speed so the user knows exactly what to wear and take with them on their travels for the day. This applications
		also has a dropdown list showing the user their search history using local storage. To use this drop down list the user clicks
		on the menu and can click on any city name they've searched in the past and it will show the weather data for that city. I
		have plans to implement a forecast section showing the next 5 days. This application is lightweight, easy to use, dynamic, and
		effective. 

## Features
		This application provides a simple and aesthetically pleasing page that presents dynamically updated weather data to the user.
		"get-me-weather" is currently made up ofsearch bar, a search button, a section to show data results, a dropdown list, and an 
		accessible layout and UI design. This application also saves the data the a "openweathermap" api gets from the city that's
		passed into the search bar. Using that saved local storage data the application also populates the dropdown menu with past
		city search history. This city search history is dynamic and clickable for the user to pass in their past searches easily.
		plan to update this application with features to include a forecast section below the search bar and search bar results to
		give the user an updated 5 day forecast to plan ahead.  

![search-bar][search-bar]
## Resources
**		I used a variety of resources and references to get while building this application 
			
		- https://day.js.org/docs/en/display/format ("pulled in library and used it for date and time info")

		- https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2 ("pulled in api library and used it to dynamically update the weather on site")

		- https://openweathermap.org/forecast5#JSON ("used as reference for using the api")

		- https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_append ("used as reference for appending with jquery")

		- https://www.w3schools.com/jsref/event_onclick.asp ("used as reference for onclick events")

		- https://www.w3schools.com/jquery/ajax_getjson.asp ("used as reference for local storage")

		- https://www.w3schools.com/jsref/prop_search_value.asp ("used as reference to make function search bar")

		- https://www.javascripttutorial.net/javascript-fetch-api/ ("used as reference to work with the API request")

		- https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys ("used as reference using api keys and implementing the api into my project")

		- https://javascript.plainenglish.io/how-to-store-json-data-in-local-storage-js-react-angular-cba97508fbc5 ("used as local storage reference")

		- https://getbootstrap.com/docs/5.0/getting-started/introduction/ ("used to build bootstrap layout")

		- https://cloudnweb.dev/2020/08/3-efficient-ways-to-get-tomorrow-date-using-javascript/ ("used to dynamically get dates")

		- https://www.cloudflare.com/cdn/ ("used to pass in my cdn tool sets")

		- https://developers.google.com/fonts ("used for fonts")**




## Tests 
		The the user can test this application by passing any city in the world into the search bar to dynamically output the weather
		data for that city. 

## How To Contribute 
		Any developer who would like to contribute to this application is encouraged to use Github's user contribution guidelines
		https://gist.github.com/briandk/3d2e8b3ec8daf5a27a62. Anybody with input on this project can contact me either at my email
		address or github profile both linked below.

## Questions 
		For any futher questions or inquiries about this application or any other applications I may be working on feel free to email
		me at mhgarry92@gmail.com and feel free to refer to my Github profile at github.com/mhgarry and this projects repository at 
		github.com/mhgarry/get-me-weather


[def]: assets/images/Screenshot%202023-04-12%20235246.png
[search-bar]: assets/images/Screenshot%202023-04-12%20224737.png
