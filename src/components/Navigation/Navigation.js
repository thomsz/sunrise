import React from 'react';
import { Menu, Switch, Radio } from 'antd';
import { BulbOutlined, ApiOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setTab, setUnit } from '../../store/actions/mainActions';
import { toggleDarkMode } from '../../store/actions/mainActions';
import SearchField from '../WeatherPanel/SearchField/SearchField';

const Navigation = (props) => {
	const dispatch = useDispatch();

	const tab = useSelector((state) => state.tab);
	const unit = useSelector((state) => state.unit.unit);
	const darkMode = useSelector((state) => state.darkMode);

	const changeTabHandler = (tab) => dispatch(setTab(tab));

	return (
		<Menu mode="horizontal" selectedKeys={tab}>
			{/* Tabs */}
			<Menu.Item key="main" onClick={() => changeTabHandler('main')}>
				Main
			</Menu.Item>
			<Menu.Item
				key="favorites"
				onClick={() => changeTabHandler('favorites')}
			>
				My Favorites
			</Menu.Item>

			{/* Dark Mode */}
			{/* <Menu.Item key="darkMode" style={{ float: 'right' }}>
				<Switch
					onClick={() => dispatch(toggleDarkMode())}
					unCheckedChildren={<BulbOutlined />}
					checkedChildren={<ApiOutlined />}
					defaultChecked={darkMode}
				/>
			</Menu.Item> */}

			{/* Unit Switch */}
			<Menu.Item key="symbol" style={{ float: 'right' }}>
				<Radio.Group defaultValue={unit} size="small">
					<Radio.Button
						value="metric"
						onClick={() => dispatch(setUnit('metric'))}
					>
						°C
					</Radio.Button>
					<Radio.Button
						value="imperial"
						onClick={() => dispatch(setUnit('imperial'))}
					>
						°F
					</Radio.Button>
				</Radio.Group>
			</Menu.Item>

			{/* Search */}
			<Menu.Item key="search" style={{ float: 'right' }}>
				<SearchField />
			</Menu.Item>
		</Menu>
	);
};

export default Navigation;
