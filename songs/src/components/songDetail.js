import React from 'react';
import { connect } from 'react-redux';

// working with a functional component this time
// destructured argument instead of props
const SongDetail = ({ selectedSongDetail }) => {
	// if song does not yet exist guard to prevent undefined error
	if(!selectedSongDetail) return <div>Select a song</div>
	// this will show song detail when we click on a song
	// console.log(props); (if using it as an argument)
	return (
		<div>
			<h3>Details for:</h3>
			<p>
				Title: { selectedSongDetail.title }
				<br/>
				Duration: { selectedSongDetail.duration }
			</p>
		</div>
	);
};

// starting process of link up to connect so we can ge
// information from our redux store
// called with our state object
// we reach in and grab just the props that we care about
// we then return it as an object from this function
const mapStateToProps = state => {
	// looking at the combineReducers function in index.js
	// in the reducers folder, we can see the property selectedSong
	// this is what we need to access here.
	// we can call the key whatever we want
	// this is what shows up as our props object inside the component
	return {
		selectedSongDetail: state.selectedSong
	}
};

export default connect(mapStateToProps)(SongDetail);