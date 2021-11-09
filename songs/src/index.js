// outside dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// component variable names have capitals
import { Provider } from 'react-redux';
// we pass createStore our set of reducers and returned back to us is a redux store
// it contains all of our reducers and all of our applications states
import { createStore } from 'redux';

// our own code
import App from './components/App';
// importing our reducers
import reducers from './reducers';

ReactDOM.render(
	// wrap the 'provider' around our app
	// provide it a single component called store
	// then create a redux store with it with our reducers
	<Provider store={createStore(reducers)}>
	<App />
	</Provider>, 
	document.querySelector('#root')
);