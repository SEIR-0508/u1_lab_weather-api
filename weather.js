
const button = document.querySelector('#submitButton')

button.addEventListener('click', async () => {
    const apiKey = '7c152c9ade274f528f3180622231705'
    const input = document.querySelector('#textInput').value
    let city = document.querySelector('#cityName')
    let country = document.querySelector('#countryName')
    let region = document.querySelector('#regionName')
    let temp = document.querySelector('#temp')
    let humidity = document.querySelector('#humidity')
    let windSpeed = document.querySelector('#windSpeed')
    let cloudCondition = document.querySelector('#cloudCondition')
    let cloudIcon = document.querySelector(`#cloudIcon`)
    let feelsLike = document.querySelector(`#feelsLike`)
    let localTime = document.querySelector(`#localTime`)
    let uvIndex = document.querySelector('#uvIndex')
      


    let weather = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}&aqi=no`) 
    console.log(weather)
    country.innerHTML = `Country: ${weather.data.location.country}`
    city.innerHTML = `City: ${weather.data.location.name} `
    region.innerHTML = `Region: ${weather.data.location.region}`
    localTime.innerHTML = `Date & Time: ${weather.data.location.localtime}`
    temp.innerHTML = `Temperature: ${weather.data.current.temp_f} &#8457`
    feelsLike.innerHTML = `Feels Like: ${weather.data.current.feelslike_f} &#8457`
    uvIndex.innerHTML = `UV Index: ${weather.data.current.uv}`
    humidity.innerHTML = `Humidity ${weather.data.current.humidity}`
    windSpeed.innerHTML = `Wind Speed: ${weather.data.current.wind_mph}mph`
    cloudCondition.innerHTML = `${weather.data.current.condition.text}`
    cloudIcon.src = `${weather.data.current.condition.icon}`

})

var input = document.getElementById('textInput')
input.addEventListener("keyup",function(event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        document.getElementById("submitButton").click()
    }
})