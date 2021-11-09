import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {

	// call action creator from componentDidMount
	componentDidMount() {
		this.props.fetchPostsAndUsers();
	}

	// this is going to take the list of posts and render them
	renderList(){ // arg post is what we get back during mapping
		return this.props.posts.map(post => {
			return (
				<div className="item" key={post.id}>
					<i className="large middle aligned icon user"/>
					<div className="content">
						<div className="description">
							<h2>{post.title}</h2>
							<p>{post.body}</p>
						</div>
						<UserHeader userId={post.userId}/>
					</div>
				</div>
			);
		});
	}

	render() {
		//console.log(this.props.posts);
		return <div className="ui relaxed divided list">{this.renderList()}</div>;
	};
};

// takes the entire state as an argument
// state will have a prop called posts which will hold of the data the api returns
const mapStateToProps = state => {
	return { posts: state.posts };
};

// connect to fetchPosts
export default connect(mapStateToProps, { fetchPostsAndUsers: fetchPostsAndUsers })(PostList);