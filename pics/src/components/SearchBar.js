import React from 'react';

// class based because we are using state
class SearchBar extends React.Component {

// called each time the user types anything
// could also be handleInputChange (it is also just a name, and could be anything)
// a normal listener which we make 'controlled' not 'uncontrolled'
	// onInputChange(event){
	// 	console.log(event.target.value);
	// }

// click listener
	// onInputClick(){
	// 	console.log('Input was clicked');
	// }

// Why do this?
// 
state = {term : ''};

// form event handler - Keeps browser from submitting automatically
onFormSubmit = (event) => {
	event.preventDefault();

	// this will be our search term
	// this function requires arrow notation to find 'this' properly
	//console.log(this.state.term);

	// reference the prop in app.js using class components
	this.props.onSubmit(this.state.term);
}

// leaving parentheses off inputChange function call for use later, instead of each rendering
// we then refactored the event using a state term, in the process updating our state
	render(){
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
					<label>Image Search</label>
						<input 
						type="text"
						value={this.state.term}
						onChange={(e) => this.setState({term: e.target.value})}/>
					</div>
				</form>
			</div>
			);
	}
}

export default SearchBar;