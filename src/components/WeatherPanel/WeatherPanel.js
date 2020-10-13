import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FavoritesTab from './FavoritesTab/FavoritesTab';
import { setLocation } from '../../store/actions/mainActions';
import ErrorHandler from '../ErrorHandler/ErrorHandler';
import MainTab from './MainTab/MainTab';
import { message } from 'antd';

const WeatherPanel = (props) => {
	const dispatch = useDispatch();
	const location = useSelector((state) => state.location);
	const weatherData = useSelector((state) => state.weatherData);

	useEffect(() => {
		if (!weatherData) {
			dispatch(setLocation(location));
		}

		if (weatherData) {
			message.success({
				content: `Woohoo! We're in ${location}!`,
				key: 'newLocation',
				duration: 2,
			});
		}
	}, [weatherData, location]);

	return useSelector((state) => state.tab) === 'main' ? (
		<ErrorHandler component="WeatherPanel">
			<MainTab />
		</ErrorHandler>
	) : (
		<FavoritesTab />
	);
};

export default WeatherPanel;
