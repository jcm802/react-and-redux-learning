import React from 'react';
// imports we have created by convention go at the bottom
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


// refactored to class based component so we can access search
// bar from here
// const App = () => {
// 	return (
// 		<div className="ui container" 
// 		style={{marginTop: '10px'}}>
// 			<SearchBar/>
// 		</div>
// 		);
// };

class App extends React.Component {

	state = {images: []}; // we expect an array of images as default

// here we can start doing data loading from inside the app
// async keyword we can use axios await function instead of a standard promise, then. Can be easier
	onSearchSubmit = async (term) => {
		const response = await unsplash.get('/search/photos', {
				params: {query: term} // unsplash api specifies ?query=<searchterm>
				// promise (success) if that happens we move to then
		});
		// checking we have recieved our term
		// console.log(term);
		// 1st arg: url, 2nd arg: can be a header object or params
		
		// this is the response we want
		// console.log(response.data.results);

		// set state to create re-render
		// console.log(this);
		this.setState({images: response.data.results});

		// we initially had an error where we were retrieving the wrong 'this'
		// we changed onSearchSubmit function to an arrow function with the async keyword in the proper place
	};
// - we can call onSubmit anything because we are creating it, but in SearchBar it needs to be very specific
// because it is a normal JSX element, not a reference
// - we then wrote a result on the JSX to tell us that images
// came through on our API request
	render() {
		return (
				<div className="ui container" style={{marginTop: '10px'}}>
					<SearchBar onSubmit={this.onSearchSubmit}/>
				<ImageList images={this.state.images}/>
				</div>
			);
	}
}

export default App;