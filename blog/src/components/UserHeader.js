import React from 'react';
import { connect } from 'react-redux';

// after we implemented over fetching solution 2
// we didn't need this anymore
// import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    // this attempts to fetch it's own data, after we implemented over fetching solution 2
    // we didn't need this anymore
    // componentDidMount(){ 
    //     this.props.fetchUser(this.props.userId);
    // }

    // find method is invoked with each element inside the array and when that id is found return that id
    render(){
        // moved to mapStateToProps
        //const user = this.props.users.find((user) => user.id === this.props.userId);

        const { user } = this.props;
        // if we don't find a user return null
        if(!user) return null;

        // otherwise show the user's name
        return <div className="header">{user.name}</div>;
    }
}

// give component redux level state
// using ownProps to provide ref to the props seen in componentDidMount
// which are sent to the render function
// this is so we don't get all the users back just the user we care about
const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId)};
};

// after we implemented over fetching solution 2
// we didn't need this anymore (fetchUser action creator)
export default connect(mapStateToProps)(UserHeader);