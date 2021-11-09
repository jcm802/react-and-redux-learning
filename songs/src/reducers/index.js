// here we are importing from an outside library, it depends on the library itself whether curly braces are required
// so you need to look at the docs for that library
import { combineReducers } from 'redux';

// ===============
//  reducer no. 1
// ===============
const songsReducer = () => {
	// static list of songs (it doesn't change)
	return [
		{
			title: 'No Scrubs',
			duration: '4:05'
		},
		{
			title: 'Macarena',
			duration: '2:30'
		},
		{
			title: 'All Star',
			duration: '3:15'
		},
		{
			title: 'I Want it That Way',
			duration: '1:45'
		}
	];
};

// ===============
//  reducer no. 2
// ===============
// if the type is SONG_SELECTED it will return that song
// if it is a different type it will just return what the currently selected song is
const selectedSongReducer = (selectedSong = null, action) => {
	if(action.type === 'SONG_SELECTED') 
		return action.payload;
	return selectedSong;
};

// any other file can now access our combined set of reducers
export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});