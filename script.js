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


button.addEventListener('click', async () => {
    let searchInput = document.querySelector('input').value
    let response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchInput}`)
    console.log(response.data)
 
    let city = response.data.location.name
    let region = response.data.location.region
    let country = response.data.location.country
    let temperature = response.data.current.temp_c
    let humidity = response.data.current.humidity
    // let condition = response.data.current.text

    responseElement.textContent = `${city}, ${region}, ${country} `
    tempElement.textContent = `Temperature: ${temperature}°C`
    humidityElement.textContent = `Humidity: ${humidity}`
    //conditionElement.textContent = `Condition: ${condition}`

})