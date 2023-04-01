const citiyWeather = [{
    "name": "food1",
    "Glc": 2,
    "Lip": 0.2,
    "Prot": 0.5,
    "IG": 20
  }, {
    "name": "food2",
     "Glc": 4,
    "Lip": 1.2,
    "Prot": 0.7,
    "IG": 40
 }, {
    "name": "food3",
    "Glc": 5,
    "Lip": 0.32,
    "Prot": 0.76,
    "IG": 60
 }, {
    "name": "food4",
    "Glc": 7.5,
    "Lip": 1.5,
    "Prot": 1.3,
    "IG": 80
 }       
];

const dropdown = document.getElementById('forecast-dropdown');
const defaultOption = document.createElement('option');
defaultOption.text = 'Choose City';


dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

document.getElementById('forecast-button').addEventListener('click', (event) => {
  console.log('click');
  const dropDown = document.getElementById('weather-by-location');
  const result = [];
  for(let i = 0; i < dropDown.options.length; i++) {
      const option = dropdown.options[i];
      
      if(option.selected) {
          result.push(JSON.parse(option.value));
      }            
  }
  console.log("do something with \n", result);
})

for (let food of Food) {
  const option = document.createElement('option');
  option.text = food.name;
  option.value = JSON.stringify(food);
  dropdown.add(option);
}