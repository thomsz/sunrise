import { useSelector } from 'react-redux';

const ThemeManager = (props) => {
	const darkTheme = useSelector((state) => state.darkMode);

	if (darkTheme) {
		import('antd/dist/antd.dark.css').then();
	} else {
		import('antd/dist/antd.css').then();
	}

	return null;
};

export default ThemeManager;
