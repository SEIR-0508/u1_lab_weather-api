console.log(`working`)

const apiKey = `10072b800a1940dface180526231705` 
const button = document.getElementById('submitButton')
const input = document.getElementById(`textinput`)
const cityName = document.getElementById(`cityName`)
const temp = document.getElementById(`temp`)

const getName = async () => {
    let response = await axios.get (`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}&aqi=no`)
}
getName()


