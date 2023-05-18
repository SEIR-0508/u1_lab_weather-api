//Weather API
let button = document.querySelector("#submitButton")

button.addEventListener('click', async () => {
    const apiKey = '72cab0be9183424c9a1183442231705'

let cityTime = document.querySelector("#cityTime")
let cityName = document.querySelector("#cityName")
let stateName = document.querySelector("#stateName")
let ctryName = document.querySelector("#ctryName")
let temp = document.querySelector("#temp")
let cityConditions = document.querySelector("#cityConditions")

let city = textInput.value
let weather = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)

cityTime.innerHTML = `Time: ${weather.data.location.localtime}`
cityName.innerHTML = `City: ${weather.data.location.name}`
stateName.innerHTML = `Region: ${weather.data.location.region}`    
temp.innerHTML = `Temperature: ${weather.data.current.temp_f}`
ctryName.innerHTML = `Country: ${weather.data.location.country}`
cityConditions.innerHTML = `Conditions: ${weather.data.current.condition.text}`

console.log(weather.data)

})

