import React from 'react';
import { useSelector } from 'react-redux';

const ErrorHandler = (props) => {
	const error = useSelector((state) => state.error);

	return error.hasError && error.component === props.component ? (
		<h2>Something went wrong</h2>
	) : (
		props.children
	);
};

export default ErrorHandler;
