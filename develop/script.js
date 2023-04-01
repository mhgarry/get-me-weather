//user story I'm a traveller and I want to get the weather from any city I'd like
//search function to make api call
//triggers api call to reciever information about 5-day forecast 
//get cooridinates of city name
//makae api call that splits the latitude and the longitude 
//we get something like 34.2342,87.234
//e.target.value 
//container for city stored in a variable 

//https://coding-boot-camp.github.io/full-stack/apis/api-resources help with getting api url up and running
//our api key 


//our url to make calls with the specific city we're looking for 


//add event listener to search bar
// const input = document.getElementById("inputSearch")
// const button = document.getElementById("submit")
// const log = document.getElementById("values")

// input.addEventListener("click", updateValue)

// function updateValue (event) {
//     let userInput = event.target.value 
//     console.log(userInput)
//     let apiKey = "&appid=b8b599eeeca773c6410a67d2f92e3e5a"
    

 
// //get cooridnates of city name
// //make resquest to API and output it as JSON data 
// let theUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?"${userInput}${apiKey}`
// fetch(theUrl).then(
//     (res) => res.json()
    
// ).then(
//     (data) => console.log(data)
// ).catch (
//     (err) => console.log(err) 
// )}

$(document).ready(function(){
        $('#submit').click(function(){
                let city = $("#inputSearch").val();
                let apiKey = "b8b599eeeca773c6410a67d2f92e3e5a"

                if(city != ''){
                        $.ajax({
                                url: `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`,
                                type: "GET",
                                dataType: "jsonp",
                           
                                success: function(data){
                                        console.log(data.location.name);
                                        console.log(data.main.temp_max);
                                        console.log(data.main.humidity);
                                        console.log(data.weather.icon);
                                        console.log(data.wind.speed);
                                        
                                       
                                }
                        });
                }else {
                        $(error).html('Field cannot be empty')
                }
        });
})