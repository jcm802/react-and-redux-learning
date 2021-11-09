// maintains a list of posts from the json api
export default (state = [], action) => {
    // a reducer must return something besides 'undefined'
    // a reducer must only ever use it's own arguments, never venturing outside of itself
    // it is pure, only things you have already made it uses
    // state does not mutate (although this is false, it depends, it's just best practice)
    // basically if your state is the same or not the same and you return it, react will not rerender
    // redux will not register it even if it has changed because it looks like the same state var

    // if the action is a 'FETCH_POSTS' return the payload
    // if(action.type === 'FETCH_POSTS'){
    //     return action.payload;
    // }
    // otherwise return the previous state (because we have to return something)
    // return state;

    // Frequently a switch statement is used instead in a reducer instead
    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload;
        default: 
            return state;
    }
};

// this runs with initialisation once when the browser loads up
// this is the default state ([])
// our reducers run, then render() then componentDidMount()
// data is fetched by the reducer
// the reducer sees the action 'FETCH_POSTS'
// it returns action.payload
// then react sees the new data, and rerenders itself
// the postList component is then rerendered
// mapStateToProps is called again, with a new value of state.posts
// then props.posts is going to show up inside our component (render())
// we get the entire response object back, but we are just interested in the data portion
// so in the index.js file in actions, we adjust the response to just bring back the data