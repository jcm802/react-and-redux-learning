import React from 'react';
import ReactDOM from 'react-dom';
// whenever we want to use a dependency we use import
import faker from 'faker';
// ./ look in the same folder we are in (webpack sorts out the js part for us)
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


if (module.hot) {
  module.hot.accept();
}

const App = () => {
	// Process
	// -------
	// create component
	// reuse component
	// configure component (making it dynamic with props)
	// each prop and value unique to each component to be consumed by the child
	// we made another component approvalCard that has comment detail as a child
	return (
			<div className="ui container comments">
				<ApprovalCard>
					<div>
						<h4>Warning</h4>
						Are you sure you want to do this?
					</div>
				</ApprovalCard>
				<ApprovalCard>
					<CommentDetail 
						author="Sam" 
						timeAgo="Today at 4:45PM" 
						avatar={faker.image.avatar()} 
						content="Love it!"
					/>
				</ApprovalCard>
				<ApprovalCard>
					<CommentDetail 
						author="Alex" 
						timeAgo="Today at 2:00AM" 
						avatar={faker.image.avatar()} 
						content="Booooooring"
					/>
				</ApprovalCard>
				<ApprovalCard>
					<CommentDetail 
						author="Jane" 
						timeAgo="Yesterday at 5:00PM" 
						avatar={faker.image.avatar()} 
						content="Fantastic!!!"
					/>
				</ApprovalCard>
			</div>
		);
};

ReactDOM.render(<App/>, document.querySelector('#root'));