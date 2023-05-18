
const apiKey = '1b46f5ff018c4c0995c180645231705'

const button = document.querySelector("#submitButton")




button.addEventListener('click', async () => {
    let  input = document.querySelector("#textInput")
    let weatherInfo = input.value
    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${weatherInfo}`)
    console.log(response)


    // city name 
    let cityNmae = document.querySelector("#cityName")
    let cName = response.data.location.name 
     cityNmae.innerHTML= cName

     // city temp
     let cityTemp = document.querySelector('#temp')
     let cTemp = response.data.current.temp_f 
     cityTemp.innerHTML= `emprature is ${cTemp} F`

     // current conditions text + dinamic weather change 
     let currentText = document.querySelector('#currentText')
     let cText = response.data.current.condition.text
     currentText.innerHTML= `Current conditions are ${cText}`
        if (cText === 'Overcast'){
            document.body.style.backgroundColor = 'gray'
        } else if (cText === 'Sunny'){
            document.body.style.backgroundColor = 'lightyellow'
        } else {
            document.body.style.backgroundColor = 'lightblue'
        }

     // current conditions immage
     let currentImage = document.querySelector(`#currentImage`)
     let cImage = response.data.current.condition.icon
     currentImage.src= cImage

    

})