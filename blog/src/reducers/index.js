import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
export default combineReducers({
	// dummy reducer
	// replaceMe: () => 10
	posts: postsReducer,
	users: usersReducer
});