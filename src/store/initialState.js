const savedFavorites = JSON.parse(localStorage.getItem('favorites'));
const lastSeenLocation = localStorage.getItem('location');
const unit = JSON.parse(localStorage.getItem('unit'));
const darkMode = JSON.parse(localStorage.getItem('darkMode'));

const initialState = {
	tab: 'main',
	location: lastSeenLocation === null ? 'Prague' : lastSeenLocation,
	country: null,
	weatherData: null,
	unit: unit === null ? { unit: 'metric', symbol: '°C' } : unit,
	favorites: savedFavorites === null ? [] : savedFavorites,
	darkMode: darkMode === null ? false : darkMode,
	loading: false,
	error: { hasError: false, component: null },
};

export default initialState;
