import React from 'react';

// spinner with if null default message
const Spinner = (props) => {
	return (
		<div className="ui active dimmer">
		<div className="ui big text loader">
			{props.message}
		</div>
	</div>
	);
};

Spinner.defaultProps = {
	// for default message if no message
	message: 'Loading...'
};

export default Spinner;