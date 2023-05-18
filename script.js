/*
attach script tag including for jquery
add event listener that connects to api key
console.log current weather in api key
display that in text
*/ 

const api = '4cfa9701a2f44ca5ad0180630231705'
const input = document.querySelector('input')
const weatherData = document.querySelector('#weather-data')
const weatherTitle = document.querySelector('h2')
const infoTitle = document.querySelector('h3')
const cityData = document.querySelector('#city-data')
let lowerCaseCityFirstLetter = input.value.charAt(0)
let upperCaseCityFirstLetter = input.value.charAt(0).toUpperCase()
let cityDisplayName = input.value.replace(lowerCaseCityFirstLetter,upperCaseCityFirstLetter)
document.querySelector('button').addEventListener('click', async()=>{
    let weather = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${api}&q=${input.value}`)
    weatherTitle.innerText = `In ${weather.data.location.name}, it is:`
    weatherData.innerHTML= `<p>${weather.data.current.temp_f} degrees F</p>`
    weatherData.insertAdjacentHTML('beforeend', `<p>Feels like ${weather.data.current.feelslike_f} degrees F</p>`)
    weatherData.insertAdjacentHTML('beforeend',`<p>The skies are ${weather.data.current.condition.text}</p>`)
    weatherData.insertAdjacentHTML('beforeend', `<p>The winds are blowing at ${weather.data.current.wind_mph} mph towards the ${weather.data.current.wind_dir}</p>`)

    infoTitle.innerText = `Some key info about ${weather.data.location.name}:`
    cityData.innerHTML = `<p>It is ${weather.data.location.lon} in longitude and ${weather.data.location.lat} in latitude</p>` 
    cityData.insertAdjacentHTML('beforeend', `<p>It is in the ${weather.data.location.region} region</p>`)
    cityData.insertAdjacentHTML('beforeend', `<p>The current date and time there is ${weather.data.location.localtime}</p>`)
    console.log(weather.data)
})
