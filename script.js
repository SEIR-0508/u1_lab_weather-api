let button = document.querySelector("#searchButton")

//Axios call goes here

//remember to use Async and Await!  
button.addEventListener('click', async () => {
  let locationName = document.querySelector("#locationName")
  let locationInfo = document.querySelector(".locationInfo")
  let textInput = document.querySelector("#inputBar").value
  let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=8d24062f9f6f460b849180743231705&q=${textInput}&aqi=yes`)

  // console.log(textInput)
  // console.log(locationInfo)
  console.log(response.data)
 // locationName.innerText = response.data.nam

weatherImage.src = response.data.current.condition.icon
locationWeather.innerText = `${response.data.current.cloud}% cloud cover`
locationTempC.innerText = `Temperature: ${response.data.current.temp_c} C`
locationTempF.innerText = `Temperature: ${response.data.current.temp_f} F`
// feelsLike.innerText = `${response.data}`
// locationCondition.innerText =
uvIndex.innerText = `UV Index: ${response.data.current.uv}`
humidityPoint.innerText = `Humidity: ${response.data.current.humidity}%`
pressureInch.innerText = `${response.data.current.pressure_in} PSI`
localTime.innerText = `${response.data.location.localtime}`
location.innerText = `${response.data.object.current.location.name}`
})

