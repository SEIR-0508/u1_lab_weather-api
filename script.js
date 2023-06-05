console.log("working")

const apiKey = '4bfe153978a04c0ea05223325230206'
let button = document.querySelector("#submitButton")


button.addEventListener('click', async () => {
    let textInput = document.querySelector("#textInput").value
    //let city = document.querySelector(textInput)  //setting getters for empty html elements
    let temp = document.querySelector("#temp")
    let weatherResponse = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${textInput}&aqi=no`)


    console.log(textInput)
    console.log(temp)
})