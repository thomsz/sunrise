import { toFahrenheit } from 'celsius';
import { useSelector } from 'react-redux';

const UnitManager = (props) => {
	const unit = useSelector((state) => state.unit);
	return unit.unit === 'imperial'
		? toFahrenheit(props.degrees) + unit.symbol
		: props.degrees + unit.symbol;
};

export default UnitManager;
