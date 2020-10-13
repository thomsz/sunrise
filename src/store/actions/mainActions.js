import * as types from '../constants/mainConstants';

import { currentWeather } from '../../model/weather';

export const setUnit = (unit = 'metric') => {
	return {
		type: types.TOGGLE_UNIT,
		payload: unit,
	};
};

export const toggleLoading = (status = false) => {
	if (status) {
		return { type: types.LOADING_ON };
	} else {
		return { type: types.LOADING_OFF };
	}
};

export const toggleDarkMode = () => ({ type: types.TOGGLE_DARK_MODE });

export const toggleFavorite = () => ({ type: types.TOGGLE_FAVORITE });

export const setLocation = (location, unit) => {
	if (!location) return { type: types.SET_WEATHER_DATA_FAILED };

	// Save to localstorage as last seen
	localStorage.setItem('location', location);

	return (dispatch) =>
		currentWeather(location, unit)
			.then(({ data, city, country }) => {
				if (data && city && country) {
					dispatch({
						type: types.SET_WEATHER_DATA_SUCCESS,
						payload: { data, location: city, country },
					});
				} else {
					dispatch({
						type: types.SET_WEATHER_DATA_FAILED,
					});
				}
			})
			.catch(() => {
				return { type: types.SET_WEATHER_DATA_FAILED };
			});
};

export const setTab = (tab) => {
	return {
		type: types.SET_TAB,
		payload: tab,
	};
};
