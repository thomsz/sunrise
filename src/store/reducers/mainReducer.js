import * as types from '../constants/mainConstants';
import initialState from '../initialState';

const mainReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.LOADING_ON:
			return {
				...state,
				loading: true,
			};

		case types.LOADING_OFF:
			return {
				...state,
				loading: false,
			};

		case types.TOGGLE_UNIT:
			let unit;

			payload === 'imperial'
				? (unit = { unit: payload, symbol: '°F' })
				: (unit = { unit: 'metric', symbol: '°C' });

			// Save as preferred unit
			localStorage.setItem('unit', JSON.stringify(unit));
			return { ...state, unit };

		case types.TOGGLE_DARK_MODE:
			localStorage.setItem('darkMode', !state.darkMode);
			return { ...state, darkMode: !state.darkMode };

		case types.TOGGLE_FAVORITE:
			let favorites = [...state.favorites];

			favorites.includes(state.location)
				? favorites.splice(favorites.indexOf(state.location), 1)
				: (favorites = [state.location, ...favorites]);

			// Update to local storage
			localStorage.setItem('favorites', JSON.stringify(favorites));

			return { ...state, favorites };

		case types.SET_WEATHER_DATA_SUCCESS:
			return {
				...state,
				location: payload.location,
				country: payload.country,
				weatherData: payload.data,
			};

		case types.SET_WEATHER_DATA_FAILED:
			return {
				...state,
				error: { hasError: true, component: 'WeatherPanel' },
			};

		case types.SET_TAB:
			return { ...state, tab: payload };

		default:
			return state;
	}
};

export default mainReducer;
