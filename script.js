console.log(`working`)
//initialized variables
const apiKey = `10072b800a1940dface180526231705` 
const button = document.querySelector(`#submitButton`)
const tempElement = document.querySelector(`#temp`)
const responseElement = document.querySelector(`#response`)
const regionElement = document.querySelector(`#region`)
const countryElement = document.querySelector(`#country`)
const humidityElement = document.querySelector(`#humidity`)
const conditionElement = document.querySelector(`#condition`)
//not done in main
const  precipElement = document.querySelector(`#precic-chance`)

//tomorrow detailed forecast
const tomTempElement = document.querySelector(`#tom-temp`)
const tomHumElement = document.querySelector(`#tom-hum`)
const tomCondElement = document.querySelector(`#tom-cond`)
const tomPrecipElement = document.querySelector(`#tom-precip-chance`)
//forecast day
const foreOneElement = document.querySelector(`#fore-1`)
const foreTwoElement = document.querySelector(`#fore-2`)
const foreThreeElement = document.querySelector(`#fore-3`)
const foreFourElement = document.querySelector(`#fore-4`)
const foreFiveElement = document.querySelector(`#fore-5`)
//forecast temperature
const tempOneElement = document.querySelector(`#temp-1`)
const tempTwoElement = document.querySelector(`#temp-2`)
const tempThreeElement = document.querySelector(`#temp-3`)
const tempFourElement = document.querySelector(`#temp-4`)
const tempFiveElement = document.querySelector(`#temp-5`)
//forecast condition
const condOneElement = document.querySelector(`#cond-1`)
const condTwoElement = document.querySelector(`#cond-2`)
const condThreeElement = document.querySelector(`#cond-3`)
const condFourElement = document.querySelector(`#cond-4`)
const condFiveElement = document.querySelector(`#cond-5`)



button.addEventListener('click', async () => {
    let searchInput = document.querySelector('input').value
    let response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchInput}`)
    console.log(response.data)
    //today
    let city = response.data.location.name
    let region = response.data.location.region
    let country = response.data.location.country
    responseElement.textContent = `${city}, ${region}, ${country} `
    let temperature = response.data.current.temp_c
    tempElement.textContent = `Temperature: ${temperature}°C`
    let humidity = response.data.current.humidity
    humidityElement.textContent = `Humidity: ${humidity}`
    let condition = response.data.forecast.forecastday[0].day.condition.text
    conditionElement.textContent = `Condition: ${condition}`
    
    //tomorrow

    


})