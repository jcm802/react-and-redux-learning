import React from 'react';
import { connect } from 'react-redux';
// importing action creator
import { selectSong } from '../actions';

// class based component
class SongList extends React.Component {

	renderList(){
		// take our song list, map and return a list of jsx
		return this.props.songs.map((song) => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button 
							className="ui button primary"
							onClick={() => this.props.selectSong(song)}
						>
							Select
						</button>
					</div>
					<div className="content">
						{song.title}
					</div>
				</div>
			);
		});
	}

	render(){
		// this.props === {songs: state.songs} the two are equal
		//console.log(this.props);
		return <div className="ui divided list">{this.renderList()}</div>;
	}
}

// Note: this code will be the same, repeated over and over throughout your career
// always import connect, always the bring in the React component, always mapStateToProps, always export the connect function

// take state object (all data in the store) run computation to make that data into props and show it inside our component
// this is the conventional name
const mapStateToProps = (state) => {
	// the selected song
	console.log(state);
	// you will now be able to see our state object
	// console.log(state);
	return {
		songs: state.songs
	};
	// everytime we click a button this will rerun
};

// integrate connect with SongList
// connect is a function returning a function
// hence this syntax
// mapStateToProps passed in so we can access the songs
export default connect(
	mapStateToProps,
	// es2015 shortening syntax, the equivalent of selectSong: selectSong
	// separate passed object for selectSong component, passed in as a prop for this component
	// this is passed automatically to the dispatch function
	// selectSong is an action creator (it is the method of passing data along to reducers)
	{ selectSong }
	)(SongList); // songlist class passed into connect