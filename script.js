console.log("working")

const apiKey = '4bfe153978a04c0ea05223325230206'
let button = document.querySelector("#submitButton")


button.addEventListener('click', async () => {
    let textInput = document.querySelector("#textInput").value
    let weatherResponse = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${textInput}&aqi=no`)
    let locationData = weatherResponse.data.current
    let region = weatherResponse.data.location.region

    console.log(textInput)
    console.log(weatherResponse)

    // let forecast = weatherResponse.data.current
    let condition = locationData.condition
    let tempF = locationData.temp_f
    let tempC = locationData.temp_c
    let cloud = locationData.cloud
    let humidity = locationData.humidity
    let windDir = locationData.wind_dir
    let windSpeedMPH =locationData.wind_mph
    let windSpeedKPH =locationData.wind_kph


    document.getElementById("cityName").innerHTML = `Thank you for taking such an interest in the forecast for ${textInput}`
    document.getElementById("region").innerHTML = `The state is `
    document.getElementById("tempF").innerHTML = `The temperature in ${textInput} in degrees farenheit is: ${tempF}`
    document.getElementById("tempC").innerHTML = `The temperature in ${textInput} in degrees celsius is: ${tempC}`
    document.getElementById("cloud").innerHTML = `The level of cloudinss on a scale of 1 - 100 in ${textInput} is: ${cloud}`
    document.getElementById("humidity").innerHTML = `The level of humidity on a scale of 1 - 100 in ${textInput} is: ${humidity}`
    document.getElementById("windDir").innerHTML = `The wind direction in ${textInput} is: ${windDir}`
    document.getElementById("windSpeedMPH").innerHTML = `The wind speed in Miles per Hour in ${textInput} is: ${windSpeedMPH}`
    document.getElementById("windSpeedKPH").innerHTML = `The wind speed in Kilometers per Hour in ${textInput} is: ${windSpeedKPH}`
    document.getElementById("region").innerHTML = `The state that ${textInput} is in is : ${region}`


})