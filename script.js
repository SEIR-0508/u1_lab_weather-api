const apiKey = '4a0c9b477fe64a3182b180612231705'
const searchInput = document.querySelector ('#searchInput')
const searchButton = document.querySelector ('#searchbutton')
const name = document.querySelector ('#inputName')
const region = document.querySelector ('#region')
const tempC = document.querySelector ('#tempC')
const tempF = document.querySelector ('#tempF')
const weatherIcon = document.querySelector ('#weatherIcon')
const condition = document.querySelector ('#condition')
const feelsLikeF = document.querySelector ('#feelsLikeF')
const feelsLikeC = document.querySelector ('#feelsLikeC')
const body = document.querySelector ('#body')



searchbutton.addEventListener('click', async () => {
    let weatherFrom = searchInput.value
    inputName.innerText = weatherFrom
    let response = await axios.get (
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${weatherFrom}`
        )
  
    //console.log(response)
    //console.log(response.data.current.temp_c)
    //console.log(response.data.current.temp_f)
    //console.log(response.data.location.region)
    //console.log(response.data.current.condition.text)
    //console.log(response.data.current.condition.icon)
    // console.log(response.data.current.feelslike_c)
    // console.log(response.data.current.feelslike_f)
    
    region.innerText = response.data.location.region

    tempF.innerText = `Temperature: ` +  response.data.current.temp_f + `\u2109`

    tempC.innerText = `(Temperature: ` +  response.data.current.temp_c + `\u2103)`

    feelsLikeF.innerText = `Feels like: ` + response.data.current.feelslike_f + `\u2109`

    feelsLikeC.innerText = `(Feels like: ` + response.data.current.feelslike_c + `\u2103)`

    weatherIcon.src = response.data.current.condition.icon

    condition.innerText = `Condition: ` + response.data.current.condition.text

    const backgroundCondition = response.data.current.condition.code

    if (backgroundCondition === 1000) { 
        body.style.backgroundColor = 'lightblue';
    } else if (backgroundCondition === 1066 || backgroundCondition === 1069 || backgroundCondition === 1114 || backgroundCondition === 1117 || backgroundCondition === 1210 || backgroundCondition === 1213 || backgroundCondition === 1216 || backgroundCondition === 1219 || backgroundCondition === 1222 || backgroundCondition === 1225 ||backgroundCondition === 1237 ) {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'lightgrey';

    }})
    
    

   