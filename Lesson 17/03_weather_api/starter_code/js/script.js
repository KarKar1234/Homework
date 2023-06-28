
// ToDo
// When the user submits the search form, make an API request to open weather api's search endpoint
// https://api.openweathermap.org/data/2.5/weather?q=CITY&APPID=KEY
// Icon URL - refer to docs on how to use
// https://openweathermap.org/img/wn/####@2x.png  - replace #### with icon code
// Display the results in the #weather-results div
// Each new search should erase the previous results

const myApiKey = "3a3404760db8fa53c845dfe550ac0009";

async function handleWeatherRequest(e) {
  
  e.preventDefault();

  const nameIt = document.querySelector('input[name=city]').value;

  const addr = `https://api.openweathermap.org/data/2.5/weather?q=${nameIt}&APPID=${myApiKey}`;

  console.log(addr);

  const response = await fetch(addr);

  const data = await response.json();

  console.log(data);
  
  // Write a separate function to convert the temps from the default units (Kelvin) to a more readable F or C
  function convertKtoF(K){

    let temperature = (K - 273.5) * 9/5 + 32 ;

    temperature = Math.round(temperature);

    return temperature;

  }

  const readableTemp = convertKtoF(data.main.temp);
  const readableFeelsLikeTemp = convertKtoF(data.main.feels_like);
  const readableMaxTemp = convertKtoF(data.main.temp_max);
  const readableMinTemp = convertKtoF(data.main.temp_min);
console.log(readableTemp);


  // build the icon src
  
  // create icon img tag
  
  // add icon url as src
  
  // clear out previous icon img
  
  // print all results to dom

  const newTempList = `<li>Current Temperature: ${readableTemp}&deg; </li>
  <li>Feels Like: ${readableFeelsLikeTemp}</li>
  <li>High: ${readableMaxTemp}</li>
  <li>Low: ${readableMinTemp}</li>`;


  
  // append icon img to dom
  document.querySelector('#weather-results').innerHTML = newTempList;
}

document.querySelector('#weather-search').addEventListener('submit', handleWeatherRequest);

// Attach an event listener to the submit button