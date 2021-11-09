// named export allows many different functions to be exported
// ==============
// action creator
// ==============
export const selectSong = song => {
	// return an action
	return {
		// type
		type: 'SONG_SELECTED',
		// payload (optional)
		payload: song
	};
};