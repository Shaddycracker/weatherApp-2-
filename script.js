const apiKey = "36458766824a44dffacd6aa717b22971";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const srchBox = document.querySelector('#searchField');
const srchBtn = document.querySelector('#search-btn');
const weatherIcon = document.querySelector('.weather-img');

async function checkweather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if(response.status == '404') {
         alert("Enter valid country name")
    } else {
        let data = await response.json();
        console.log(data)
        document.querySelector('.city-name').innerHTML = data.name
        document.querySelector('#temp-row1').innerHTML =  Math.round(data.main.temp) + "°C"
        document.querySelector('.fr-temp').innerHTML = Math.round(data.main.feels_like) + "°C"
        document.querySelector('.fr-wind').innerHTML = data.wind.speed + " km/h"
        document.querySelector('.weather-name').innerHTML = data.weather[0].main
        document.querySelector('.fr-cld').innerHTML = data.weather[0].description
        
       console.log(weatherIcon);
       if(data.weather[0].main == 'Clouds') {
         weatherIcon.src = "images/clouds.png"
       } else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = "images/clear.png"
       }
       else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = "images/rain.png"
       }
       else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "images/drizzle.png"
       }
       else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = "images/mist.png"
       }
       else if(data.weather[0].main == 'Fog'){
        weatherIcon.src = "images/mist.png"
       }
        
        
    }
   
}

srchBtn.addEventListener('click',()=>{
    checkweather(srchBox.value);
})