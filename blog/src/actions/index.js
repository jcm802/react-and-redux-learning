import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// =============
// overfetching solution no. 2
// ============
// aggregated action creator - contains both fetchPosts and fetchUsers. Here we also use getState
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // call fetchPosts and fetchUsers multiple times, and the user will only call this function now
    // think of this then as the public method and the smaller methods are now private
    // make sure that you dispatch the result of the action creator

    // call fetchPosts, and await (waits for the api request to complete before anything else is done underneath in this function)
    console.log('About to fetch posts');
    await dispatch(fetchPosts());
    // you will see a slight delay before you see this one, which means it works
    console.log('Fetched posts!');
    // get list of posts, this will contain all our posts
    //console.log(getState().posts);

    // find all unique ids and fetch each one
    // we used lodash's map function with uniq
    const userIds = _.uniq(_.map(getState().posts, 'userId'))

    // here are all our unique ids
    // console.log(userIds);

    // for each unique user id dispatch the result of it to fetchUser
    userIds.forEach(id => dispatch(fetchUser(id)));

    // optional lodash chaining syntax
    // _.chain(getState().posts) // getState().posts now 1st arg of rest of functions
    // .map('userId') // the result of this... (note userId is the 2nd arg only)
    // .uniq() // is passed to this...
    // .forEach(id => dispatch(fetchUser(id))) // we dispatch each user
    // .value() // and this executes the chain

};

// action creator, this makes the api request
export const fetchPosts = () => {
    // dispatch - power to make changes to the data on the redux side of our app
    // getState - this can be called on the redux store and will return all the data inside the store
    // manual dispatch - once the request is complete we need to manually dispatch the action
    return async (dispatch, getState) => {
    // bad approach!!! the normal way is not how we do this
    const response = await jsonPlaceholder.get('/posts');
    // this is not an action, as it is turned into ES2015 by the DOM
    // the async await syntax is actually a lot more code than we see here
    // when you see it translated with Babel, therefore this will not work with redux, because
    // it expects a plain old js object
    // normal action - but instead of this...
    // return {
    //     type: 'FETCH_POSTS',
    //     payload: promise
    // };

    // this, note we also are only interested in the data of the payload
    dispatch({ type: 'FETCH_POSTS', payload: response.data})
}
};

// alternatively, we could change the response name to a promise and get rid
// of the async await syntax, however this still won't work in the way you would expect
// the redux cycle happens much quicker than the request to the server does, so the data will not 
// be there by the time the redux cycle is ready to update the state at the end of the cycle

// the answer to this problem = middleware
// instead of sending our actions to reducers, we send it to middleware instead
// the middleware can stop, modify or do whatever to actions
// so that the cycle here happens in the correct order and time that suits async operations

// after thunk is calibrated, it will only return the inner function(dispatch, getState) so we can
// use the async await syntax again

// bear in mind we are not using the getState arg here, but we likely will in future projects

// this code can be neatly refactored further, do so in future projects

// ===========
// overfetching solution no. 1
// ============
// this is the quick and easy but weird looking solution - only fetching one user per request
// using lodash to only fetch a unique user one time using memoization
// fetch user action creator with an id, using shortened syntax
// function that calls another function, that calls _fetchUser with id and dispatch arguments
// a side effect of this solution is that if you want to refetch another user if it changes you can't very efficiently
// the underscore (_)fetchUser indicates a private function (it shouldnt be changed)

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async(id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data});
// });

// ===========
// overfetching solution no. 2
// ===========
export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data});
};

// using lodash memoize to only get a unique user once, it doesnt work
// we need to memoize it outside the main function and that way it will work the way we expect
// export const fetchUser = function(id) {

//     return _.memoize(async function(dispatch){
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data});
//     });
// };