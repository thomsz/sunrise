import React from 'react';
import 'antd/dist/antd.css';
import classes from './App.module.css';
import ThemeManager from './components/ThemeManager/ThemeManager';
import WeatherPanel from './components/WeatherPanel/WeatherPanel';
import Navigation from './components/Navigation/Navigation';

import { Layout } from 'antd';
const { Content, Footer } = Layout;

function App() {
	return (
		<div className={classes.App}>
			<ThemeManager />
			<Layout style={{ minHeight: 'calc(100vh - 50px)' }}>
				<Navigation />
				<Content style={{ padding: '20px' }}>
					<WeatherPanel />
				</Content>
				<Footer>2020 Sunrise Weather Co.</Footer>
			</Layout>
		</div>
	);
}

export default App;
