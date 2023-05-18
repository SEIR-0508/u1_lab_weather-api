const apikey = 'c9ceb19e2b804e1485f182029231705'
const button = document.querySelector('#submitButton')

const cityName = document.querySelector('#cityName')
const temperature = document.querySelector('#temp')
const img = document.querySelector('#icon')
const description = document.querySelector('.description')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')

button.addEventListener('click', async ()=> {
    let input = document.querySelector('#textInput').value
    let response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${input}&aqi=no`)
    console.log(response)
    cityName.innerText = `Weather in ${response.data.location.name}`
    temperature.innerText = `${response.data.current.temp_f}°F`
    img.src = response.data.current.condition.icon
    console.log(img.src)

    description.innerText = response.data.current.condition.text
    humidity.innerText = `Humidity: ${response.data.current.humidity}%`
    wind.innerText = `Wind Speed: ${response.data.current.wind_mph}mph`
})

