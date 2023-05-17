// const apiKey = '68f455c28704427790c180919231705';
// const button = document.querySelector('#submitButton');

// button.addEventListener('click', handleClick );

// async function handleClick() {
//     const cityInput = document.querySelector('#textInput').value;
//     const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput}&aqi=no`;
//     // const imageUrl = `https://api.unsplash.com/photos/random?${cityInput}`
//     const unsplashApiUrl = `https://api.unsplash.com/photos/random?query=${query}&client_id=${apiKey}`;

//     await axios.get(apiUrl)
//     .then(response => {
//         const cityNameElement = document.querySelector('#cityName');
//         const tempElement = document.querySelector('#temp');
//         const cityName = response.data.location.name; 
//         const temperature = response.data.current.temp_c; 
//         const imageUrl = response.data.current.condition.icon;
//         cityNameElement.textContent = `City: ${cityName}`;
//         tempElement.textContent = `Temperature: ${temperature}°C`;

//         const photoUrl = getRandomPhoto(cityName);
//         function getRandomPhoto() {
//             const response =  axios.get(unsplashApiUrl);
//             response.data.urls.regular;
            
            
            
//             document.body.style.backgroundImage = `url(${photoUrl})`;
//             document.body.style.backgroundRepeat = 'no-repeat';
//             document.body.style.backgroundSize = 'cover'

//         }

        
//     })
// }

const apiKey = '68f455c28704427790c180919231705';
const button = document.querySelector('#submitButton');
const apiKeySplash = 'avsbvMn1my2KMUieiTl2iOjDZSr3ROlI0n3mMuIcayc'
button.addEventListener('click', handleClick);

async function handleClick() {
    
        const cityInput = document.querySelector('#textInput').value;
        const weatherApiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput}&aqi=no`;

        const response = await axios.get(weatherApiUrl);

        const cityNameElement = document.querySelector('#cityName');
        const tempElement = document.querySelector('#temp');

        const cityName = response.data.location.name;
        const temperature = response.data.current.temp_c;
        const imageUrl = response.data.current.condition.icon;

        cityNameElement.textContent = `City: ${cityName}`;
        tempElement.textContent = `Temperature: ${temperature}°C`;
        cityNameElement.style.fontFamily = 'Comic sans'; 
        cityNameElement.style.color = 'red';
        cityNameElement.style.fontBorder = 'black'; 
        tempElement.style.color = 'red';

        const photoUrl = await getRandomPhoto(cityName);
        
        document.body.style.backgroundImage = `url('${photoUrl}')`;
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
    
}

async function getRandomPhoto(query) {
    const unsplashApiUrl = `https://api.unsplash.com/photos/random?query=${query}&client_id=${apiKeySplash}`;

    
        const response = await axios.get(unsplashApiUrl);
        return response.data.urls.regular;
   
}



