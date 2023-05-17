let button = document.querySelector("#searchButton")

//Axios call goes here

//remember to use Async and Await!  
button.addEventListener('click', async () => {
  let locationName = document.querySelector("#locationName")
  let locationImage = document.querySelector("#locationImage")
  let textInput = document.querySelector("#inputBar").value
  let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=8d24062f9f6f460b849180743231705&q=${textInput}&aqi=yes`)

  locationName.innerText = response.data.name

  console.log(textInput)
  console.log(response.data)


weatherImage.src = response.data.sprites.front_default
locationWeather.innerText = response
locationTempC.innerText = response
locationTempF.innerText = response
feelsLike.innerText =
locationCondition.innerText =
uvIndex.innerText = 
})

