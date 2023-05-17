const apiKey = "4c08ba8c88474179a66180624231705";
const button = document.querySelector('#submitButton')
const input = document.querySelector('#textInput')
const cityName = document.querySelector('#cityName')
const temp_f = document.querySelector('#temp_f') 
const temp_c = document.querySelector('#temp_c')
const weatherPicture = document.querySelector('#weatherPicture')
const currentWeather = document.querySelector('#currentWeather')

button.addEventListener('click', async () => {
    let city = input.value
    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
    let currentTemp_f = response.data.current.temp_f
    let currentTemp_c = response.data.current.temp_c
    let name = response.data.location.name
    let weatherCondition = response.data.current.condition.text
    let picture = response.data.current.condition.icon
    let countryName = response.data.location.country
    let stateName = response.data.location.region
    console.log(response)
    if (countryName === "United States of America") {
        cityName.innerText = `Weather in ${name}, ${stateName}`
    }else {
        cityName.innerText = `Weather in ${name}, ${countryName}`
    }
    temp_f.innerText = `Fahrenheit: ${currentTemp_f}`
    temp_c.innerText = `Celsius: ${currentTemp_c}`
    weatherPicture.innerHTML = `<img src="${picture}"/>`
    currentWeather.innerText = `Currently: ${weatherCondition}`
})


