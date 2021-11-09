import './SeasonDisplay.css';
import React from 'react';



// configuration object
const seasonConfig = {
	summer: {
		text: 'Lets hit the beach!',
		iconName: 'sun'
	},
	winter: {
		text: 'Burr, it is cold!',
		iconName: 'snowflake'
	}
};

const getSeason = (lat, month) => {
	// if it is the summer
	if(month > 2 && month < 9){
		// and we are in the northern hemisphere return 'summer'
		// else return 'winter'
		return lat > 0 ? 'summer' : 'winter';
	} else {
		// if we are in the southern hemisphere return summer else winter
		return lat > 0 ? 'winter' : 'summer';
	}
};

// prop
const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());

	// refatored ternary expressions
	// const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
	// const icon = season === 'winter' ? 'snowflake' : 'sun';
	const { text, iconName } = seasonConfig[season]; // { text, iconName}


	// using ES6 style
	return (
		<div className={`season-display ${season}`}> 
			<i className={`icon-left massive ${iconName} icon`}/>
			<h1>{text}</h1>
			<i className={`icon-right massive ${iconName} icon`}/>
		</div>
	);
};

export default SeasonDisplay;