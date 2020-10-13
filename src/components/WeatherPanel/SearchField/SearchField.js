import React, { useEffect, useState } from 'react';
import { Input, message } from 'antd';
import { useDispatch } from 'react-redux';
import { setLocation } from '../../../store/actions/mainActions';

const { Search } = Input;

const SearchField = (props) => {
	const dispatch = useDispatch();
	const [{ searchInput }, setSearchInput] = useState({ searchInput: '' });

	useEffect(() => {
		setSearchInput({ searchInput: '' });
	}, []);

	const inputHandler = (event) => {
		setSearchInput({ searchInput: event.target.value });
	};

	const searchHandler = (event) => {
		if (event.target.value !== '') {
			dispatch(setLocation(event.target.value));

			message.loading({
				content: 'Wait a sec...',
				key: 'newLocation',
			});
		}
	};

	const blurHandler = () => {
		setSearchInput({ searchInput: '' });
	};

	const keyHandler = (event) => {
		if (event.key.match(/[^a-zA-Z]/)) {
			// message.warning({
			// 	content: 'Please use latin letters',
			// 	key: 'searchValidator',
			// });
		}
	};

	return (
		<Search
			placeholder="Look for a Location..."
			onChange={inputHandler}
			onKeyDown={keyHandler}
			onPressEnter={searchHandler}
			onBlur={blurHandler}
			value={searchInput}
			allowClear
		></Search>
	);
};

export default SearchField;
