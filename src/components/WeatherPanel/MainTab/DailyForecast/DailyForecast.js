import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Skeleton } from 'antd';
import UnitManager from '../../UnitManager/UnitManager';
import WeatherIcon from '../../WeatherIcon/WeatherIcon';

const DailyForecast = () => {
	const weatherData = useSelector((state) => state.weatherData);

	const convertTimestampToDay = (timestamp, format = 'date') => {
		const date = new Date(timestamp * 1000);

		const days = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];

		switch (format) {
			case 'date':
				return date.getDate() + '/' + date.getMonth();
			case 'day':
				return days[date.getDay()];
			default:
				return;
		}
	};

	let items = [];

	const item = (i) => {
		if (weatherData) {
			return (
				<>
					{!i
						? 'Today'
						: i === 1
						? 'Tomorrow'
						: convertTimestampToDay(weatherData.daily[i].dt, 'day')}
					<br />
					{convertTimestampToDay(weatherData.daily[i].dt, 'date')}
					<br />
					<h2>
						<UnitManager
							degrees={Math.floor(weatherData.daily[i].temp.day)}
						/>
					</h2>
					<WeatherIcon
						iconId={weatherData.daily[i].weather[0].icon}
						size="small"
					/>
					<br />
					{weatherData.daily[i].weather[0].main}
					<br />
					{weatherData.daily[i].weather[0].description}
				</>
			);
		} else {
			return <Skeleton active />;
		}
	};

	for (let i = 0; i < 5; i++) {
		items.push(
			<Card.Grid key={i} style={{ width: '20%', textAlign: 'center' }}>
				{item(i)}
			</Card.Grid>
		);
	}

	return <Card title="This Week's Forecast">{items}</Card>;
};

export default DailyForecast;
