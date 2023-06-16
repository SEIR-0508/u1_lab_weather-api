const apiKey = "e9da854aa5f546319a3220838231606";
const googleApiKey = "AIzaSyD5hlJ7ymim6tAgvHqMNsDjye_xrA0Jmbg";

const $dropdown = $("#race-names");
const $h1 = $("h1");

const $country = $("#country");
const $city = $("#city");
const $raceDate = $("#race-date");
const $circuit = $("#circuit");
const $latitude = $("#latitude");
const $longitude = $("#longitude");

const $condition = $("#condition");
const $avgtemp = $("#avgtemp");
const $maxtemp = $("#maxtemp");
const $mintemp = $("#mintemp");
const $sunrise = $("#sunrise");
const $sunset = $("#sunset");

const $raceWinner = $("#race-winner");
const $team = $("#team");
const $nationality = $("#nationality");
const $driverNumber = $("#driver-number");

const raceData = {
  bahrain: {
    city: "Sakhir",
    raceDate: "2023-03-05",
    round: 1,
  },
  "saudi arabia": {
    city: "Jeddah",
    raceDate: "2023-03-19",
    round: 2,
  },
  australia: {
    city: "Melbourne",
    raceDate: "2023-04-02",
    round: 3,
  },
  azerbaijan: {
    city: "Baku",
    raceDate: "2023-04-30",
    round: 4,
  },
  miami: {
    city: "Miami",
    raceDate: "2023-05-07",
    round: 5,
  },
  imola: {
    city: "Imola",
    raceDate: "2023-05-21",
    round: 6,
  },
  monaco: {
    city: "Monaco City",
    raceDate: "2023-05-28",
    round: 7,
  },
  barcelona: {
    city: "Barcelona",
    raceDate: "2023-06-04",
    round: 8,
  },
};

$dropdown.on("change", async function () {
  let val = $(this).find(":selected").val();
  let { city, raceDate, round } = raceData[val];
  let raceDateFormat = new Date(raceDate).getTime();
  let today = new Date().getTime();
  let data = "";
  let data2 = "";

  if (raceDateFormat < today) {
    data = await axios.get(
      `http://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${city}&dt=${raceDate}`
    );
    data2 = await axios.get(
      `https://ergast.com/api/f1/2023/${round}/results.json`
    );
    let results = data2.data.MRData.RaceTable.Races[0].Results[0];

    $raceWinner.text(
      `${results.Driver.givenName} ${results.Driver.familyName}`
    );
    $team.text(results.Constructor.name);
    $nationality.text(results.Driver.nationality);
    $driverNumber.text(results.number);
  } else if (raceDateFormat > today && raceDateFormat - today > 86400000 * 14) {
    console.log("race date is over 14 days out");
  }

  let forecast = data.data.forecast.forecastday[0];

  $raceDate.text(raceDate);
  $country.text(data.data.location.country);
  $city.text(city);
  $latitude.text(data.data.location.lat);
  $longitude.text(data.data.location.lon);
  $condition.text(forecast.day.condition.text);
  $avgtemp.text(forecast.day.avgtemp_f);
  $maxtemp.text(forecast.day.maxtemp_f);
  $mintemp.text(forecast.day.mintemp_f);
  $sunrise.text(forecast.astro.sunrise);
  $sunset.text(forecast.astro.sunset);
});
