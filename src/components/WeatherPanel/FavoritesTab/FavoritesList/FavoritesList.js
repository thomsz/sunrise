import React from 'react';
import { Button, Card, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { setLocation, setTab } from '../../../../store/actions/mainActions';

const FavoritesList = (props) => {
	const favorites = useSelector((state) => state.favorites);

	const dispatch = useDispatch();

	const onClickHandler = (location) => {
		dispatch(setLocation(location));

		message.loading({
			content: 'Wait a sec...',
			key: 'newLocation',
		});

		dispatch(setTab('main'));
	};

	const items = [];

	for (let index = 0; index < favorites.length; index++) {
		const item = favorites[index];
		items.push(
			<Card.Grid
				hoverable={false}
				key={index}
				style={{ width: '20%', textAlign: 'center' }}
			>
				<Button onClick={() => onClickHandler(item)}>{item}</Button>
			</Card.Grid>
		);
	}

	return <Card>{items}</Card>;
};

export default FavoritesList;
