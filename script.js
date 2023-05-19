console.log('working')

let searchValue = document.querySelector("#textInput")
let button = document.querySelector('#searchButton')
let city = document.querySelector('#cityName')
let region = document.querySelector('#cityRegion')
let temperature = document.querySelector('#temp')

console.log()



const getWeather = async () => {
    weather = await axios.get(`http://api.weatherapi.com/v1/current.json?key=8a626df8b4724a6b83b180609231705&q=${searchValue.value}&aqi=no`)
   
    cityName.innerText = weather.data.location.name
    cityRegion.innerText = weather.data.location.region
    temperature.innerText = weather.data.current.temp_f
    
    console.log(weather)
}

button.addEventListener('click', getWeather )











