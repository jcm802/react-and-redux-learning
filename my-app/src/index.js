// Import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
//        ^ variables

// allows dynamic refreshing
if (module.hot) {
  module.hot.accept();
}

// Create a react component
const App = () => {
	const buttonText = {text: 'Click me'};
	const labelText = 'Enter name:'
	// this is not html, it is JSX (or javascript)
	// ==== Differences to html ====
	// styling is different in JSX
	// convention is "" for JSX '' for everything else
	// you use className instead of class so JS isnt confused
	// JSX can easily reference JS variables or function calls
	// for is htmlFor
	return (
		<div> 
			<label className="label" htmlFor="name">{labelText}</label>
	    	<input id="name" type="text"/>
	    	<button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
		</div>
	);
};


///Take the react component and show it on the screen
ReactDOM.render(
	<App />,
	document.querySelector('#root')
	);