const apiKey = `8259ac308e88476fa78180558231705`
const $button = $(`#submitButton`)



$button.on(`click`, async function() {
    let $temp = $(`#temp`)
    let $tempText = $(`#tempText`)
    let $cityName = $(`#cityName`)
    let $imageDiv = $(`#imageDiv`)
    let $input = $(`#textInput`).val()
    let $cityImage = $(`#cityImage`);
    let cityResponse = await axios.get(`https://api.unsplash.com/search/photos?query=${$input}&client_id=CSkGT7Sy19C0a7I-i6_6wFjQvMhkQeL4o-s_r2m1Qqg`)
    let response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${$input}&aqi=no`)
    console.log(response)
    $cityName.html(`${response.data.location.name}, ${response.data.location.region}`)
    $imageDiv.html(`<img src="https:${response.data.current.condition.icon}"/>`)
    $tempText.html(`${response.data.current.condition.text}`)
    $temp.html(`Temperature: ${response.data.current.temp_c} C°`)
    let cityImageURL = cityResponse.data.results[0].urls.regular
    
    $(`body`).css(`background-image`, `url("${cityImageURL}")`)

})

