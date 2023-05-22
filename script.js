console.log(`working`)
//initialized variables

//TELLING JS WHAT ITS GRABBING FORM HTML
const apiKey = `10072b800a1940dface180526231705` 
const button = document.querySelector(`#submitButton`)
const tempElement = document.querySelector(`#temp`)
const feelElement = document.querySelector(`#feelslike`)
const responseElement = document.querySelector(`#response`)
const humidityElement = document.querySelector(`#humidity`)
const conditionElement = document.querySelector(`#condition`)



//when this button is clicked, I want it to do the following
button.addEventListener('click', async () => {
    let searchInput = document.querySelector('input').value
    let response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchInput}`)
    console.log(response.data)
    let city = response.data.location.name
    let region = response.data.location.region
    let country = response.data.location.country
    responseElement.textContent = `${city} | ${region} | ${country}`
    let temperature = response.data.current.temp_c
    tempElement.textContent = `Temperature: ${temperature}°C`
    let feelslike = response.data.current.feelslike_c
    feelElement.textContent = `Feels like ${feelslike}°C`
    let humidity = response.data.current.humidity
    humidityElement.textContent = `Humidity: ${humidity}%`
    let condition = response.data.forecast.forecastday[0].day.condition.text
    conditionElement.textContent = `Condition: ${condition}`
})