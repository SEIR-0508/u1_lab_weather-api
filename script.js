/* Constants */
const key = 'e9dc36314d484b58962181041231705'
const searchBox = document.querySelector('.searchBox')
const searchBtn = document.querySelector('.searchBtn')
const curLocal = document.getElementById('curLocal')
const curRain = document.getElementById('curRain')
const curTemp = document.getElementById('curTemp')
const img = document.querySelector('.pic')
const feel = document.getElementById('feel')
const uv = document.getElementById('uv')
const wind = document.getElementById('wind')
const windDir = document.getElementById('windDir')
const oldFuture = document.getElementById('future')
const tableHead = document.getElementById('tableHead')
const row1 = document.getElementById('row1')
const row2 = document.getElementById('row2')
const picture = document.getElementById('picture')

/* Variables */
let myLocation = 'San Antonio'
let myInfo = []
let currentInfo = []
let futureInfo = []


/* Event Listeners */
searchBox.addEventListener('keypress', () => {
    if (event.key === 'Enter') {
        myLocation = searchBox.value
        searchBox.value = ""
        getInfo()
    }
})

searchBtn.addEventListener('click', () => {
    myLocation = searchBox.value
    searchBox.value = ""
    getInfo()
})


/* Functions */
const getInfo = async () => {
    let info = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${myLocation}&days=7&aqi=no&alerts=no`)
    myInfo = info.data
    currentInfo = myInfo.current
    futureInfo = myInfo.forecast
    console.log(myInfo)
    buildPage()
}
getInfo()

const buildPage = async () => {
    picture.innerHTML = ""
    curLocal.innerText = `${myInfo.location.name}, ${myInfo.location.region}`
    curRain.innerText = `${futureInfo.forecastday[0].day.daily_chance_of_rain}%`
    let img = document.createElement('img')
    img.src = `${currentInfo.condition.icon}`
    img.classList.add('pic')
    picture.appendChild(img)
    curTemp.innerText = `${Math.round(currentInfo.temp_f)} F`
    feel.innerHTML = `${Math.round(currentInfo.feelslike_f)}`
    uv.innerText = `${currentInfo.uv}`
    wind.innerText = `${currentInfo.wind_mph} MPH`
    windDir.innerText = `${currentInfo.wind_dir}`
    let currentDay = 0
    todaysForecast()
    futureForecast()
}

const hourForecast = () => {
    console.log('hour goes here')
}

const futureForecast = () => {
    oldFuture.innerHTML = "<h3>7 Day Forecast:</h3>"
    futureInfo.forecastday.forEach( day => {
        let date = day.Date
        let highTemp = Math.round(day.day.maxtemp_f)
        let lowTemp = Math.round(day.day.mintemp_f)
        let rain = `${day.day.condition.text}`
        let icon = `${day.day.condition.icon}`
        let forecast = document.createElement('div')
        let temps = document.createTextNode(`${lowTemp}/${highTemp}`)
        let weather = document.createTextNode(`${rain}`)
        let img = document.createElement('img')
        img.src = icon
        forecast.appendChild(temps)
        forecast.appendChild(img)
        forecast.appendChild(weather)
        forecast.classList.add('line')
        oldFuture.appendChild(forecast)

    })
}


const todaysForecast = () => {
    tableHead.innerHTML = ""
    row1.innerHTML = ""
    row2.innerHTML = ""
    console.log(futureInfo.forecastday[0].hour.length)
    for (var i = 0; i < futureInfo.forecastday[0].hour.length; i+=4) {
        let hour = futureInfo.forecastday[0].hour[i]
        let curHour = hour.time
        let newHour =curHour.substring(11, curHour.lenght)
        let temp = `${Math.round(hour.temp_f)} F`
        let icon = `${hour.condition.icon}`
        let img = document.createElement('img')
        img.src = icon
        let heading = document.createElement('th')
        let headingText = document.createTextNode(newHour)
        let cell = document.createElement('td')
        let cell2 = document.createElement('td')
        let cellData = document.createTextNode(temp)
        img.classList.add('small')
        heading.appendChild(headingText)
        cell.appendChild(img)
        cell2.appendChild(cellData)
        tableHead.appendChild(heading)
        row1.appendChild(cell)
        row2.appendChild(cell2)       
    }
}


