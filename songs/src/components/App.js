import React from 'react';
// web pack automatically gets index.js
// import actions from '../actions';
// this part | means we specifically want a named export
//           v
// this is also an optional import
import { selectSong } from '../actions';
import SongList from './songList';
import SongDetail from './songDetail';

// connect the songlist component
const App = () => {
	return (
		<div className="ui container grid">
			<div className="ui row">
				<div className="column eight wide">
					<SongList/>
				</div>
				<div className="column eight wide">
					<SongDetail />
				</div>
			</div>
		</div>
	);
};

// exporting like this (default) means you do not need curly braces around the imported item
// if you are importing a named export you need the curly braces
export default App;