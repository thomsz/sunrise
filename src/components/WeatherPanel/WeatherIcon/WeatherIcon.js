import React from 'react';

const WeatherIcon = (props) => {
	let width;

	switch (props.size) {
		case 'big':
			width = '100px';
			break;

		case 'small':
			width = '50px';
			break;

		default:
			width = '50px';
			break;
	}

	return (
		<img
			alt=""
			style={{ width }}
			src={`http://openweathermap.org/img/wn/${props.iconId}@2x.png`}
		/>
	);
};

export default WeatherIcon;
