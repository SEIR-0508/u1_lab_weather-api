let button = document.querySelector("#submitButton")

    button.addEventListener('click', async () => {
    const apiKey = '75dd0e6f25704946963180717231705'
    // let input = document.querySelector("#textInput").value
    let cityTime = document.querySelector("#cityTime")
    let cityName = document.querySelector("#cityName")
    let stateName = document.querySelector("#stateName")
    let curTemp = document.querySelector("#temp")
    let country = document.querySelector("#ctryName")
    let condition = document.querySelector("#ctyCnd")
    let cityPic = document.querySelector("#ctyPic")
    //where does this need to be scoped?
    
    let city = textInput.value
    //axios call goes here
    let weather = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
    
    // let cityPix = await axios.get(``)
    
    cityTime.innerHTML = `Time: ${weather.data.location.localtime}`
    cityName.innerHTML = `City: ${weather.data.location.name}`
    stateName.innerHTML = `Region: ${weather.data.location.region}`
    curTemp.innerHTML = `Temperature: ${weather.data.current.temp_f}`
    country.innerHTML = `${weather.data.location.country}`
    condition.innerHTML = `Conditions: ${weather.data.current.condition.text}`
    cityPic.innerHTML = `<img src ="${weather.data.current.condition.icon}"/>`

   


    console.log(weather.data)
    })
    

