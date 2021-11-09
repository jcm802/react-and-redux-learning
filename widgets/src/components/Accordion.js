import React, { useState } from 'react'; // now with useState hook
//	import
// create accordion component
// items array of objects
// use events, state and hooks to add functionality to the accordion

// passing items as a props (a props is the mechanism to transport data
// around) this is instead of using the general props object, making it more specific
const Accordion = ({items}) => {

	// array destructuring - variables in square brackets represent the 1st and 2nd elements of useState array
	// 1st arg is the piece of state we keeping track of and will change
	// 2nd arg sets the state and re-renders the component
	// these vars are also not special we can change them to whatever we want
	// useState() takes one argument, the default initialisation for our state and is based on our value type
	// whether you use hooks or class components they use a parallel process
	// once the whole component has re-rendered the initial state will not be used anymore, it falls away
	const [activeIndex, setActiveIndex] = useState(null);

	// helper method
	const onTitleClick = (index) => {
		// console.log('Title clicked', index);
		setActiveIndex(index);
	};

	// map the items so we can see them and access them, we used item and index (the second arg to map)
	// every element inside of a list of jsx elements must have a key property
	// if we want to call a function some time in the future we must use an arrow function, a normal function syntax will happen the moment the code is rendered which we don't want
	const renderedItems  = items.map((item, index) => {

		const active = index === activeIndex ? 'active' : '';

		// in this case we had to use a react fragment
		// instead of a div to comply with Semantic UI's rules
		// active class names (in semantic ui) indicate whether an element is expanded or not
		return (
		 <React.Fragment key={item.title}>
			<div 
			className={`title ${active}`}
			onClick={() => onTitleClick(index)}
			>
				<i className="dropdown icon"></i>
				{item.title}
			</div>
			<div className={`content ${active}`}>
				<p>{item.content}</p>
			</div>
		</React.Fragment>
		);
	});

	return <div className="ui styled accordion">
		{renderedItems}
	</div>
};

export default Accordion;