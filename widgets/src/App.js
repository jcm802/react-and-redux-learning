import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import Link from './components/Link';

const items = [
	{
		title: 'What is React?',
		content: 'React is a front end javascript framework'
	},
	{
		title: 'Why use React?',
		content: 'React is a favourite JS library among engineers'
	},
	{
		title: 'How do you use React?',
		content: 'You use React by creating components'
	}
];

const options = [
	{
		label: 'The Color Red',
		value: 'red'
	},
	{
		label: 'The Color Green',
		value: 'green'
	},
	{
		label: 'A Shade of Blue',
		value: 'blue'
	}
];


	// setting up states for selected dropdown elements
	// const [selected, setSelected] = useState(options[0]);
	// const [showDropdown, setShowDropdown] = useState(true);

	// <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
	// 		{showDropdown ? : null }

	// <Dropdown 
	// 	selected={selected}
	// 	onSelectedChange={setSelected} 
	// 	options={options}
	// 	/> 

// helper function for refactoring but this isn't very react
// const showComponents = (route, component) => {
// 	return window.location.pathname === route 
// 	? component 
// 	: null; 
// };

// navigation without refactoring
// const showAccordion = () => {
// 	if(window.location.pathname === '/') 
// 		return <Accordion items={items}/>
// }

// const showList = () => {
// 	if(window.location.pathname === '/list')
// 		return <Search />;
// }

// const showDropdown = () => {
// 	if(window.location.pathname === '/dropdown')
// 		return <Dropdown />;
// }

// const showTranslate = () => {
// 	if(window.location.pathname === '/translate')
// 		return <Translate />
// }

// shorthand - make items array available to accordion
// when a component is inside of the other one, it is provided as a prop
// to Route as a child. Accordion shows up inside Route as a prop called children
// We can then display this component inside Route using the very special word 'children'
export default () => {
	const [selected, setSelected] = useState(options[0]);
	return (
		<div>
		<Header/>
			<Route path="/">
				<Accordion items={items}/>
			</Route>
			<Route path="/list">
				<Search/>
			</Route>
			<Route path="/translate">
				<Translate/>
			</Route>
			<Route path="/dropdown">
				<Dropdown
					label="Select a color"
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			</Route>				
		</div>
		);
};