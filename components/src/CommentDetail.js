import React from 'react';

// referencing props object (js object passing from parent to child) in our child
const CommentDetail = props => {
	return (
			<div className="comment">
					<a href="/" className="avatar">
						<img alt="avatar" src={props.avatar}/>
					</a>
					<div className="content">
						<a href="/" className="author">
							{props.author}
						</a>
						<div className="metadata">
							<span className="date">{props.timeAgo}</span>
						</div>
						<div className="text">{props.content}</div>
					</div>
				</div>
		);
};

// now available to outside files
export default CommentDetail;