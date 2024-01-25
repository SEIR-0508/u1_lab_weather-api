const button = document.querySelector('#submitButton')
//Add click event to button calling a function to make Axios call
button.addEventListener('click', async () => {
	const apiKey = '0b326877a67a4530af2141038242501'

	let cityName = document.querySelector('#cityName')
	let temp = document.querySelector('#temp')
	let feelsLike = document.querySelector('#feelsLikeTemp')
	let weatherIcon = document.querySelector('#icon')
	let input = document.querySelector('#textInput').value
	try {
		let result = await axios.get(
			`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}&aqi=no`
		)
		console.log(result)
		if (
			result &&
			result.data.location &&
			result.data.location.name &&
			result.data.location.region
		) {
			cityName.textContent =
				'Location: ' +
				result.data.location.name +
				', ' +
				result.data.location.region
			console.log(result.data.location.name)
			console.log(result.data.location.region)

			if (
				result &&
				result.data.current &&
				result.data.current.condition &&
				result.data.current.condition.icon
			) {
				if (result.data.current.temp_f !== undefined) {
					temp.textContent =
						'Current Temperature: ' + result.data.current.temp_f + ' °F'
					console.log('Fahrenheit: ' + result.data.current.temp_f)
					weatherIcon.setAttribute('src', result.data.current.condition.icon)
				} else {
					temp.textContent = 'Current Temperature: Unknown'
				}
				if (result.data.current.feelslike_f !== undefined) {
					feelsLike.textContent =
						'Feels Like: ' + result.data.current.feelslike_f + ' °F'
					console.log(result.data.current.feelslike_f)
				}
			}
		}
	} catch (error) {
		console.log(error)
		cityName.textContent = 'Invalid City Name'
		weatherIcon.setAttribute('src', '')
	}
})
