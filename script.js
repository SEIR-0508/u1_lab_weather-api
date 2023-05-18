const apiKey = '15c261631f424268aca185140231705'
const button = document.querySelector('#submitButton')
const tempF = document.querySelector('#temp')
const highTemp = document.querySelector('#high')
const lowTemp = document.querySelector('#low')
const loc = document.querySelector('#cityName')
const conditions = document.querySelector('#condition')

button.addEventListener('click', async () => {
    let searchInput = document.querySelector('input').value;
    let response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchInput}`);
    console.log(response);
    let rawTemp = response.data.current.temp_f;
    let currentTemp = Math.round(rawTemp)
    tempF.innerHTML = `Current temperature: ${currentTemp}°F`
    let city = response.data.location.name;
    let country = response.data.location.country;
    loc.innerHTML = `Location: ${city}, ${country}`
    let rawHighTemp = response.data.forecast.forecastday[0].day.maxtemp_f;
    let hTemp = Math.round(rawHighTemp)
    highTemp.innerHTML = `High temperature: ${hTemp}°F`
    let rawLowTemp = response.data.forecast.forecastday[0].day.mintemp_f;
    let lTemp = Math.round(rawLowTemp)
    lowTemp.innerHTML = `Low temperature: ${lTemp}°F`
    let currConditions = response.data.forecast.forecastday[0].day.condition.text;
    let conIcon = response.data.forecast.forecastday[0].day.condition.icon;
    conditions.innerHTML = `${currConditions} <img src="https:${conIcon}">`
})