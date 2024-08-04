import { DateTime } from "luxon";

const API_KEY = "5b549cc0bc75da52a689b3aa7d5282b0"
const BASE_URL = "https://api.openweathermap.org/data/2.5/"

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
    visibility,
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    pressure,
    visibility,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const formatForecastWeather = (data) => {
  console.log('---->',data)
  let { timezone, main, dt, weather } = data;
  let daily = {
      title: formatToLocalTime(dt, timezone, "ccc"),
      temp: main.temp,
      icon: weather[0].icon,
    };

  let hourly = {
      title: formatToLocalTime(dt, timezone, "hh:mm a"),
      temp: main.temp,
      icon: weather[0].icon,
    };

  return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("weather", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc ,dd MMM yyyy' | Local time: 'hh:mm a"
) =>{
  
  let d = DateTime.fromSeconds(secs).setZone(zone/60).toFormat(format);
  console.log(secs,zone,format,DateTime.fromSeconds(secs), d);
  return d
} 
console.log("formatToLocalTime: ", formatToLocalTime);

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };