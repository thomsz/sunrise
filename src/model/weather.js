import axios from 'axios';
import { message } from 'antd';
// require('dotenv').config();

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const GEOLOCATION_API_KEY = process.env.REACT_APP_GEOLOCATION_API_KEY;

export const currentWeather = (location, unit = 'metric') => {
	if (!location) return;

	location = encodeURI(location);

	return getCoordinates(location)
		.then(({ latitude, longitude, city, country }) => {
			const queryUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=${unit}`;

			return axios
				.get(queryUrl)
				.then(({ data }) => {
					return { data, city, country };
				})
				.catch((error) => console.log(error));
		})
		.catch((error) =>
			message.error({
				content: 'Could not get weather for this location',
				key: 'newLocation',
			})
		);
};

const getCoordinates = (location) => {
	if (!location) return;

	const queryUrl = `https://www.mapquestapi.com/geocoding/v1/address?key=${GEOLOCATION_API_KEY}&location=${location}`;

	return axios
		.get(queryUrl)
		.then(({ data }) => {
			const city = data.results[0].locations[0].adminArea5;
			if (city === '') {
				return;
			} else
				return {
					latitude: data.results[0].locations[0].latLng.lat,
					longitude: data.results[0].locations[0].latLng.lng,
					city,
					country: data.results[0].locations[0].adminArea1,
				};
		})
		.catch((error) => console.log(error));
};
