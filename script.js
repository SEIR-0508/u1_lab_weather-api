const searchButton = document.querySelector('#seeWeatherButton')
const searchInput = document.querySelector('#inputBar')
const key = '776991d9b52f41859bf180614231705'
const contentContainer = document.querySelector('.content-container')

searchButton.addEventListener('click', getWeather = async () => {
    let city = searchInput.value
    let searchImage = document.querySelector('#currentWeatherImage')
    let searchWeather = document.querySelector('#currentWeather')
    let cityTitle = document.querySelector('#cityTitle')
    let searchLocalTime = document.querySelector('#cityTime')
    let searchTemp = document.querySelector('#cityTemp')
    let searchWindSpeed = document.querySelector('#cityWindSpeed')
    let searchWindDirection = document.querySelector('#cityWindDirection')
    let searchFeelsLikeF = document.querySelector('#cityFeelsLikeF')
    let searchUv = document.querySelector('#cityUv')

    const getWeatherResponse = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`)
    console.log(getWeatherResponse)
    try {
    searchImage.src = `${getWeatherResponse.data.current.condition.icon}`
    searchWeather.innerHTML = `${getWeatherResponse.data.current.condition.text}`
    cityTitle.innerHTML = `${getWeatherResponse.data.location.name}, ${getWeatherResponse.data.location.region}`
    searchLocalTime.innerText = `${getWeatherResponse.data.location.localtime}`
    searchTemp.innerText = `${getWeatherResponse.data.current.temp_f}℉`
    searchFeelsLikeF.innerText = `${getWeatherResponse.data.current.feelslike_f}℉`
    searchUv.innerText = `${getWeatherResponse.data.current.uv}` 
    searchWindSpeed.innerText = `${getWeatherResponse.data.current.gust_mph} mph`
    searchWindDirection.innerText = `${getWeatherResponse.data.current.wind_dir}`
    searchInput.value = ''
    showContainer()
    }
    catch (error) {
        alert('Your input was not a valid city.')
    }
})

function showContainer () {
    contentContainer.style.display = 'flex'
}