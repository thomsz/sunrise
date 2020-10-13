import React from 'react';
import { Button, Card, Divider, Skeleton, message } from 'antd';
import { StarOutlined, StarFilled, LoadingOutlined } from '@ant-design/icons';
import DailyForecast from './DailyForecast/DailyForecast';
import UnitManager from '../UnitManager/UnitManager';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import { stripTimezoneString } from '../../../utils/string';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../../store/actions/mainActions';

const MainTab = (props) => {
	const dispatch = useDispatch();
	const location = useSelector((state) => state.location);
	const country = useSelector((state) => state.country);
	const weatherData = useSelector((state) => state.weatherData);
	const favorites = useSelector((state) => state.favorites);

	const favoriteButtonType = favorites.includes(location)
		? 'dashed'
		: 'primary';

	const onFavoriteHandler = () => {
		dispatch(toggleFavorite());

		const content = favorites.includes(location)
			? location + ' was removed from your favorites'
			: location + ' was added to your favorites';

		message.success({
			content,
			icon: <StarFilled />,
		});
	};

	return (
		<div>
			<Card
				type="inner"
				style={{ width: '350px', margin: 'auto' }}
				title={
					weatherData ? (
						`Current Weather in ${location}, ${country}`
					) : (
						<LoadingOutlined style={{ fontSize: 18 }} spin />
					)
				}
			>
				<div style={{ textAlign: 'center' }}>
					{weatherData ? (
						<div>
							<h4>{stripTimezoneString(weatherData.timezone)}</h4>
							<WeatherIcon
								iconId={weatherData.current.weather[0].icon}
								size="big"
							/>
							<p>
								{weatherData.current.weather[0].main}
								<br />
								{weatherData.current.weather[0].description}
							</p>
							<br />
							<h1>
								<UnitManager
									degrees={Math.floor(
										weatherData.current.temp
									)}
								/>
							</h1>
							<h4>
								Feels like{' '}
								<UnitManager
									degrees={Math.floor(
										weatherData.current.feels_like
									)}
								/>
							</h4>
						</div>
					) : (
						<Skeleton
							active
							round
							title={{ width: 200 }}
							paragraph={{ rows: 7 }}
						/>
					)}
				</div>
			</Card>

			<Divider>
				<Button
					type={favoriteButtonType}
					shape="circle"
					onClick={onFavoriteHandler}
				>
					<StarOutlined />
				</Button>
			</Divider>

			<DailyForecast />
		</div>
	);
};

export default MainTab;
